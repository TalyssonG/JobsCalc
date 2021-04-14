const express = require('express'); //express: Biblioteca para criar o servidor
const routes = express.Router() //Vai criar as rotas

const views = __dirname + "/views/"

const profile = {
  name:  "Talysson",
  avatar: "https://avatars.githubusercontent.com/u/68451890?v=4",
  "monthly-budget": 6000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
}

//req, res 
routes.get('/', (req, res) => res.render(views + "index")) 
routes.get('/job', (req, res) => res.render(views + "job")) 
routes.get('/job/edit', (req, res) => res.render(views + "job-edit")) 
routes.get('/profile', (req, res) => res.render(views + "profile", { profile })) 




module.exports = routes;