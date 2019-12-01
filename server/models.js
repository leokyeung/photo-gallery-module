var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lemonloft'
});

connection.connect();

module.exports = {
    getListings: (callback) => {
        const query = `select * from listings;`
        connection.query(query, function (err, results) {
            if (err) {
                callback(err);
            } else {
                callback(null, results)
            }
        });
    }

}