const express = require('express'),
bodyParser = require('body-parser'),
app = express()

app.use(bodyParser.json())

app.get('**', (req, res) => {
    res.render('./public/index.html')
})

app.listen(process.env.PORT)