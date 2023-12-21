import mysql from "mysql2";

const MYSQL_HOST = process.env.MYSQL_HOST || "mysql";
const MYSQL_USER = process.env.MYSQL_USER || "root";
const MYSQL_PORT = process.env.MYSQL_PORT || "3306";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "password";
const MYSQL_DB = process.env.MYSQL_DB || "admin";
const pool = mysql.createPool({
  connectionLimit: 100,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
});

const CREATE_ORDERS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT,
  orderId TEXT,
  price TEXT,
  quantity TEXT
)`;

pool.getConnection((err, connection) => {
  if (!err) {
    console.log("Connected to the MySQL DB - ID is " + connection.threadId);
    const createOrderTable = CREATE_ORDERS_TABLE_SQL;
    connection.query(createOrderTable, (err) => {
      if (!err) {
        console.log("Orders table was created");
      }
    });
    connection.release();
  }
});

export default pool;
