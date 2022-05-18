const express = require("express");
const path = require("path");

const app = express();

const port = 2222

app.listen(port, () => {
    console.log("El servidor está activado en el puerto "+ port)          
});                                

app.use(express.static(path.join(__dirname, "public")));

// camino | path | ruta : es lo que vos escribís en el navegador
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})