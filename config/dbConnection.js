var mysql = require('mysql');

var connectionMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connectionMySql;
}
