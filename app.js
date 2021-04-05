require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
// app.use(express.static("public"));

// Las siguientes 3 lineas tienen menor prioridad que app.use()
// app.get("/", (req, res) => {
//     res.send("Home page");
// });

// app.get("/hola", (req, res) => {
//     res.send("Hello World");
// });

// app.get("*", (req, res) => {
//     // res.send("404 | Page not found");
//     res.sendFile(__dirname + '/public/404.html');
// });

// Ejercicio: Sirviendo una template
const objPersona = {
        nombre: "David Guzman",
        titulo: "Curso de Node",
    };

app.use(express.static("public/templated-roadtrip"));

app.get("/", (req, res) => {
    res.render("home", objPersona);
});

app.get("/generic", (req, res) => {
    res.render("generic", objPersona)
});

app.get("/elements", (req, res) => {
    res.render("elements", objPersona);
});

app.get("*", (req, res) => {
    res.send("404 | Page not found");
});

app.listen(port, () => {
    console.log(`Aplicación ejecutandose en http://localhost:${port}`);
});