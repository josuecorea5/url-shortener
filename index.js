const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const connectDb = require('./config/db');
const { getUrls, createShortUrl, openShortUrl } = require('./controllers/shortUrlController')

connectDb();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false}));

app.get('/', getUrls)

app.post('/shortUrl', createShortUrl)

app.get('/:short', openShortUrl)

app.listen(PORT, () => {
  console.log(`Server running at port:  ${PORT}`);
})