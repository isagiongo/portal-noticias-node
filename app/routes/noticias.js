module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        var connection = app.config.dbConnection();

        connection.query('select * from noticia', function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });
    });
};