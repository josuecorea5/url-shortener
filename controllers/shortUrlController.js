const ShortUrl = require('../models/shortUrl');

const getUrls = async (req,res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls});
}

const createShortUrl = async (req,res) => {
  await ShortUrl.create({ fullUrl: req.body.fullUrl});
  res.redirect('/');
}

const openShortUrl = async (req,res) => {
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.short});

  if(shortUrl === null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();
  
  res.redirect(shortUrl.fullUrl);
}

module.exports = {
  getUrls,
  createShortUrl,
  openShortUrl
}