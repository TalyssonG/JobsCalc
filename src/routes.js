const express = require('express'); //express: Biblioteca para criar o servidor
const routes = express.Router() //Vai criar as rotas

const views = __dirname + "/views/"
//req, res 
routes.get('/', (req, res) => res.render(views + "index")) 
routes.get('/job', (req, res) => res.render(views + "job")) 
routes.get('/job/edit', (req, res) => res.render(views + "job-edit")) 
routes.get('/profile', (req, res) => res.render(views + "profile")) 


module.exports = routes;