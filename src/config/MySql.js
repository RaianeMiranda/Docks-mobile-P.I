const mysql = require('mysql2/promise');

const MySql = mysql.createMySql({
    host: 'docks-pi:southamerica-east1:docks-pi',
    user: 'raiane',
    password: 'adm1123',
    database: 'docks-pi',
});

export default MySql;
