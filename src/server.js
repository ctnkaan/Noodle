//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

//Third Party
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs'); //changed from var


//Imports
const Rr = require("./commands/rr");
const Stats = require("./commands/stats");
const Bless = require("./commands/bless");
const Help = require("./commands/help");
const Rps = require("./commands/rps");
const Countdown = require("./commands/countdown");
const Roll = require('./commands/roll');
const Reddit = require('./commands/reddit');
const Meme = require('./commands/meme');
const Moderation = require('./commands/moderation');
const Case = require('./commands/case');
const WeatherFile = require('./commands/weather');
const Btc = require('./commands/btc');
const WS = require("./commands/webshot");
const OSU = require("./commands/osu");
const Covid = require("./commands/covid");
const BJ = require("./commands/blackjack");
const BJhit = require("./commands/blackjack-hit");
const BJStay = require("./commands/blackjack-stay");



let stack = [], playerDeck = [], cpuDeck = [], curr, cpuSum = 0, sum = 0, gameStarted = false; //blackjack

let bullets = 6; //RR 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("!!help");
});


client.on('message', msg => {

  if (!msg.content.startsWith("!!") || msg.author.bot) return;
  let args = msg.content.slice("!!".length).split(' ');
  const command = args.shift().toLowerCase();



  //Russian Rulatte
  if (command === "rr") {
    bullets = Rr.execute(msg, bullets);
  }

  //Stats
  else if (command === "stats") {
    Stats.execute(msg, client);
  }

  //Bless
  else if (command === 'bless') {
    Bless.execute(msg);
  }

  //Help
  else if (command === 'help') {
    Help.execute(msg);
  }

  //Rock paper scissors
  else if (command === 'rps') {
    Rps.execute(msg);
  }

  //Countdown
  else if (command === "countdown") {
    Countdown.execute(msg, args);
  }

  //Roll
  else if (command === 'roll') {
    Roll.execute(msg, args);
  }

  //Reddit
  else if (command === 'reddit') {
    Reddit.execute(msg, args);
  }

  //Meme
  else if (command === "meme") { 
    Meme.execute(msg);
  }

  //Moderation
  else if (command === "kick" || command === "ban") {
    Moderation.execute(msg, command);
  }

  //CSGO Case
  else if (command === "case") {
    Case.execute(msg);
  }

  //Weather
  else if (command === "weather") {
    WeatherFile.execute(msg, args);
  }

  else if (command === "btc" || command === "bitcoin") {
    Btc.execute(msg);
  }

  //Webshot capture
  else if (command === "ws") {
    args = args.toString();
    WS.execute(args, msg);
  }

  //Webshot send
  else if (command === "covid") {
    Covid.execute(msg);
  }

  //Osu Test
  else if (command === "osu") {
    OSU.execute(msg, args);
  }

  else if (command === "bj") {
    BJ.execute(msg, gameStarted, stack, curr, playerDeck, cpuDeck);
  }
  
  else if (command === "h" && gameStarted === true) {
    BJhit.execute(msg, curr, playerDeck, cpuDeck, stack, gameStarted, sum);
  }

  else if (command === "s" && gameStarted === true) {
    BJStay.execute(msg, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted);
  }
  
});

client.login(process.env.DISCORD_KEY);