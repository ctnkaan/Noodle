//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

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


let bullets = 6; // Required for Russian Rulatte

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("!!help");
});


client.on('message', msg => {

  if (!msg.content.startsWith("!!") || msg.author.bot) return;
  const args = msg.content.slice("!!".length).split(' ');
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

});


  

client.login(process.env.DISCORD_KEY);