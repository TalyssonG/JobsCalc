const express = require("express")
const server = express()
const routes = require("./routes")

server.set('view engine', 'ejs') //começando a config o ejs

//Habilitar arquivos statics 
server.use(express.static("public"))

//routes
server.use(routes)


server.listen(3000, () => console.log('rodando')) //Criando a porta do servidor com listen