const express = require("express")
const server = express()

//request, response 
server.get('/', (request, response) => {
  return response.send('OI!') //Send: Enviar
})


server.listen(3000, () => console.log('rodando 🚀'))