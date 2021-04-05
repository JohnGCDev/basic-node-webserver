const http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // const persona = {
    //     id: 1,
    //     nombre: 'David'
    // }
    // res.write(JSON.stringify(persona));

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, David\n');
    // res.write('2, Claudia\n');
    // res.write('3, Maria\n');
    // res.write('4, Carmen\n');
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hola Mundo');

    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);