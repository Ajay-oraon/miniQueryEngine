# Mini Data Query Simulation Engine

## Overview
This project is a lightweight backend service that simulates a simplified version of an AI-powered data query system. It processes natural language queries and translates them into pseudo-SQL, returning relevant data from an SQLite database.

## Features
- Convert natural language queries into pseudo-SQL
- Execute translated queries on an SQLite database
- Return relevant data dynamically
- Basic error handling

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** SQLite
- **Deployment:** Render

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [SQLite](https://www.sqlite.org/)
- Clone the repository:
  ```sh
  git clone https://github.com/your-username/mini-query-engine.git
  cd mini-query-engine
  ```

### Installation
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file and add the following:
   ```env
   PORT=5000
   ```
3. Initialize the database:
   ```sh
   node setupDatabase.js
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Documentation

### 1. **Process Query**
- **Endpoint:** `POST /api/query`
- **Description:** Accepts a natural language query, translates it into SQL, and returns the queried data.
- **Request Body:**
  ```json
  {
    "query": "find user named john"
  }
  ```
- **Response:**
  ```json
  {
    "pseudoSQL": "SELECT * FROM users WHERE name LIKE 'John%';",
    "data": [
      { "id": 1, "name": "John Doe" }
    ]
  }
  ```

### 2. **Explain Query**
- **Endpoint:** `POST /api/explain`
- **Description:** Returns a simulated breakdown of the query.
- **Request Body:**
  ```json
  {
    "query": "find user named john"
  }
  ```
- **Response:**
  ```json
  {
    "explanation": "The query 'find user named john' retrieves relevant data from the database."
  }
  ```

### 3. **Validate Query**
- **Endpoint:** `POST /api/validate`
- **Description:** Checks if the query is feasible.
- **Request Body:**
  ```json
  {
    "query": "find user named john"
  }
  ```
- **Response:**
  ```json
  {
    "valid": true,
    "message": "Query is feasible"
  }
  ```

## Sample Queries
| Natural Language Query | Pseudo-SQL |
|------------------------|------------|
| show all users | `SELECT * FROM users;` |
| get orders from last month | `SELECT * FROM orders WHERE date >= '2025-02-01';` |
| find user named john | `SELECT * FROM users WHERE name LIKE 'John%';` |
| total number of orders | `SELECT COUNT(*) AS total FROM orders;` |

## Deployment
The backend is deployed on **Render**.
- API Base URL: `https://miniqueryengine.onrender.com/`

## Testing with Postman or cURL

### Postman
1. Open Postman.
2. Create a new `POST` request.
3. Set the URL: `https://miniqueryengine.onrender.com/api/query`
4. In the Body tab, select `raw` and `JSON`, then add:
   ```json
   {
     "query": "find user named john"
   }
   ```
5. Send the request and view the response.

### cURL
Run this command in the terminal:
```sh
curl -X POST https://miniqueryengine.onrender.com/api/query -H "Content-Type: application/json" -d '{"query": "find user named john"}'
```

## Future Improvements
- Implement AI-powered query interpretation using OpenAI API
- Enhance SQL query generation for complex queries
- Add authentication and user-based query permissions

## License
This project is licensed under the MIT License.

---
### Contributors
- **Ajay Kumar Oraon** - [GitHub](https://github.com/Ajay-oraon)

