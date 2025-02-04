const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: "employee_db",
  password: process.env.DB_PASS,
  port: 5432
});

module.exports = pool;