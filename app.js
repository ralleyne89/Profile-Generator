const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const puppeteer = require('puppeteer')

const createPdf = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('something goes here')
}
const PORT = process.env.PORT || 5000
const app = express()

// setting the public folder
app.use(express.static(path.join(__dirname, 'public')))

// using the bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

const pdfRoute = require('./routes/pdfmake')
app.use('/pdfmake', pdfRoute)
// index route
app.get('/', (req, res) => {
    res.sendFile('/js/generate-html')
})

app.listen(PORT, () => console.log('Server is running on PORT ' + PORT))