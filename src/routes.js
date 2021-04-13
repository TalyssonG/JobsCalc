const express = require('express');
const routes = express.Router()


//request, response 
routes.get('/', (request, response) => {
  return response.sendFile(__dirname + "/views/index.html") //Mostrando o Html na página
})

routes.get('/index.html', (req, res) => {
  return res.redirect('/')
})

module.exposts = routes;