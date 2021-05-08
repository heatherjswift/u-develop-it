const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // have to enter pw to work but erasing for now
        password: '',
        database: 'election'
    },
);

module.exports = db;