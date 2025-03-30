const express = require("express");
const {
  processQuery,
  explainQuery,
  validateQuery,
} = require("../controllers/queryController");

const router = express.Router();

router.post("/query", processQuery);
router.post("/explain", explainQuery);
router.post("/validate", validateQuery);

module.exports = router;
