const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "students",
    password: "emanelkafrawy",
    port: 5432
});

module.exports = pool;