const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connect = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DB_USR,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: process.env.DBPORT
});


module.exports = connect;
