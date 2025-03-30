module.exports = (query) => {
  const mockResponses = {
    "show all users": "SELECT * FROM users;",
    "get orders from last month":
      "SELECT * FROM orders WHERE date >= '2025-02-01';",
    "find user named john": "SELECT * FROM users WHERE name LIKE 'John%';",
    "total number of orders": "SELECT COUNT(*) AS total FROM orders;",
  };

  for (const key in mockResponses) {
    if (query.toLowerCase().includes(key)) {
      return mockResponses[key];
    }
  }
  return "Query not recognized.";
};
