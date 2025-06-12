const express  = require('express')
const cors = require('cors')
const investimentoRoutes = require('./routes/investimentoRoutes')


const app = express()
const PORT = 5000;

app.use(cors())
app.use(express.json())


// Middlewares
app.use(cors());
app.use(express.json());

//Todas as rotas começaram com investimentos
app.use('/investimentos', investimentoRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na ${PORT}`)
})

        