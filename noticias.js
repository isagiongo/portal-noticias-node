var server = http.createServer(function (req, res) {

    var categoria = req.url;
    // if (categoria == '/tecnologia') {
    //     res.end("<html><body>Notícias sobre Tecnologia</body></html>");
    // } else if (categoria == '/moda') {
    //     res.end("<html><body>Notícias sobre Moda</body></html>");
    // } else if (categoria == '/esportes') {
    //     res.end("<html><body>Notícias sobre Esportes</body></html>");
    // } else {
    //     res.end("<html><body>Portal de notícias</body></html>");
    // }

});

server.listen(3000);


console.log('Criando um site de noticias com Node.');
