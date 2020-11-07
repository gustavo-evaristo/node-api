const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o app
const app = express()

//Json
app.use(express.json())

//Cors
app.use(cors())

//Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })

//Trazendo os models
requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)
