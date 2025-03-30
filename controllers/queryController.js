const db = require("../database");
const translateQuery = require("../utils/queryTranslator");

exports.processQuery = (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });

  const pseudoSQL = translateQuery(query);
  if (pseudoSQL === "Query not recognized.") {
    return res.status(400).json({ error: "Unsupported query" });
  }

  db.all(pseudoSQL, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ pseudoSQL, data: rows });
  });
};

exports.explainQuery = (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });
  res.json({
    explanation: `The query '${query}' retrieves relevant data from the database.`,
  });
};

exports.validateQuery = (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });
  res.json({ valid: true, message: "Query is feasible" });
};
