const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:"); // In-memory database

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
  db.run(
    "CREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER, date TEXT)"
  );

  // Insert mock data
  db.run("INSERT INTO users (name) VALUES ('John Doe'), ('Jane Doe')");
  db.run(
    "INSERT INTO orders (user_id, date) VALUES (1, '2025-02-15'), (2, '2025-03-01')"
  );
});

module.exports = db;
