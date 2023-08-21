const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path:'../.env'});

console.log(process.env.DBHOST);

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DB_USR,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: process.env.DBPORT
});
pool.getConnection((err, connection) => {
    if (err) {
        throw err;
    }
    
    connection.release();
});

module.exports = pool;
