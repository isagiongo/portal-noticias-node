var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function (req, res) {
    res.render("secao/tecnologia");
});

app.get('/moda', function (req, res) {
    res.send("<html><body>Notícias de Moda</body></html>");
});

app.get('/esportes', function (req, res) {
    res.send("<html><body>Notícias de Esportes</body></html>");
});

app.listen(3000, function () {
    console.log("Servidor rodando com express")
});
