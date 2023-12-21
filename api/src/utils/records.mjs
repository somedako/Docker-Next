import pool from "./mysqlPool.mjs";

const readRecords = () =>
  new Promise((resolve, reject) =>
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.query("SELECT * FROM `orders`", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
      connection.release();
    })
  );

const insertRecord = (order) =>
  new Promise((resolve, reject) =>
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.query(
        `INSERT INTO orders VALUES (null, '${order.title}', '${order.orderId}', '${order.price}', '${order.quantity}')`,
        (err, result) => {
          if (err) return reject(err);
          console.log(`New time ${order} was saved to the DB`);
          resolve(result);
        }
      );
      connection.release();
    })
  );

export { readRecords, insertRecord };
