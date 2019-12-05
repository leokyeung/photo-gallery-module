const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const controllers = require('./controllers.js')

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/listings', (req, res) => {
    controllers.getListings(req,res)
})

app.get('/listings/pictures', (req, res) => {
    controllers.getImages(req,res)
})

// app.listen(port, () => console.log(`Leo app listening on port ${port}!`))

module.exports = app