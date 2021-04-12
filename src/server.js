const express = require("express")
const server = express()

//Habilitar arquivos statics 
server.use(express.static("public"))

//request, response 
server.get('/', (request, response) => {
  return response.sendFile(__dirname + "/views/index.html") //Mostrando o Html na página
})



server.listen(3000, () => console.log('rodando')) //Criando a porta do servidor com listen