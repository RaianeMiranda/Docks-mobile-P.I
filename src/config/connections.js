const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'docks-pi:southamerica-east1:docks-pi',
    user: 'raiane',
    password: 'adm1123',
    database: 'docks-pi',
});

export default connection;
