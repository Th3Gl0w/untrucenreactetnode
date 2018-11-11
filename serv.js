const express = require ('express')
const scraping = require('./app')
const cors = require('cors')


const app = express()

app.use(cors())

app.get('/', (req , res) => {
    res.json({
        message : "Welcome"
    })
})

app.get('/api', (req, res) => {
    scraping.testScraping()
    .then(info => res.json(info))
})


const port = process.env.PORT || 9090
app.listen(port, () => {
    console.log(`Ecoute ce porc ${port}`)
})