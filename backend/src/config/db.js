const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "orepoitunuola",
  database: process.env.DB_NAME || "smart_estate",
});

module.exports = db;