import express from 'express';
import ViewEngine from "./config/viewEngine";
import configViewEngine from "./config/viewEngine";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;


configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/bang', (req, res) => {
    res.send('bangday')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})