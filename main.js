const { Client } = require("pg");

const conn = new Client({
  host: "my-postgres-db.cp80oomgqvqs.ap-south-1.rds.amazonaws.com",
  user: "postgres",
  port: 5432,
  password: "123456780",
  database: "ankushdb",
});

conn
  .connect()
  .then(() => {
    console.log("Connected to the database successfully!");

    // conn.query("SELECT * FROM demotable", (err, res) => {
    //   if (!err) {
    //     console.log("Query results:", res.rows);
    //   } else {
    //     console.error("Query error:", err);
    //   }
    //   conn.end(); // Only end after query completes
    // });
  })
  .catch((err) => {
    console.error("Connection error:", err.stack);
  });
