const express = require('express');
require('dotenv').config();
// const { Logging } = require('@google-cloud/logging');
const TelegramBot = require("node-telegram-bot-api");


const app = express();
// const logging = new Logging({
//   projectId: 'panda-manda-services',
// });

const token = '6313749780:AAF1Pv1CThOGHjFoakUcVXIppY-xmE7RVZ8';
const bot = new TelegramBot(token);

//heheheheheh



app.post('/', (req, res) => {
  if (req.headers['x-telegram-bot-api-secret-token'] !== 'sibebekgantengbangetehe') {
    res.status(401).send('Unauthorized, GO OUT!!');
    return;
  }
  // const message = `Received POST request with body: ${JSON.stringify(req.body)}`;
  // console.log(message);
  const sender=req.body.message.from.id;
  const chat=req.body.message.text;
  bot.sendMessage(sender, chat);
  res.send('OK');
  return;
});

app.get('/', (req, res) => {
    const token = process.env.TELEGRAM_TOKEN;
    res.send(token);
    return;
});

exports.webhook = app;