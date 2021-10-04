//<> with ❤️ by Çetin Kaan Taşkıngenç

//Third Party
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { Player } = require("discord-music-player");

//Imports
const Rr = require("./commands/rr");
const Stats = require("./commands/stats");
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
const WS = require("./commands/webshot/webshot");
const OSU = require("./commands/osu");
const Covid = require("./commands/covid");
const BJ = require("./commands/blackjack/blackjack");
const BJhit = require("./commands/blackjack/blackjack-hit");
const BJStay = require("./commands/blackjack/blackjack-stay");
const Play = require('./commands/music/play');
const Skip = require('./commands/music/skip');
const Clear = require('./commands/music/clear');
const Queue = require('./commands/music/queue');
const Pause = require('./commands/music/pause');
const Resume = require('./commands/music/resume');
const Stop = require('./commands/music/stop');
const Loop = require('./commands/music/loop');
const Progress = require('./commands/music/progress');


//Blackjack variables
let stack = [], playerDeck = [], cpuDeck = [], curr, cpuSum = 0, sum = 0, gameStarted = false;

//Russian Roulette variables
let bullets = 6; 



const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: false,
  timeout: 0,
  volume: 150,
  quality: 'high',
});

client.player = player;

client.player.on('songAdd',  (message, queue, song) => 
  message.channel.send(`**${song.name}** has been added to the queue!`)).on('songFirst',  (message, song) => 
    message.channel.send(`**${song.name}** is now playing!`));



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("-help");
});


client.on('message', (msg) => {

  if (!msg.content.startsWith("-") || msg.author.bot) return;
  let args = msg.content.slice("-".length).split(' ');
  const command = args.shift().toLowerCase();

  //Play
  if (command === "p" || command === "play") {
    Play.execute(client, msg, args);
  }

  //Skip
  else if (command === 'skip'){
    Skip.execute(client, msg);
  }

  //Clear
  else if (command === 'clear'){
    Clear.execute(client, msg);
  }

  //Queue
  else if (command === 'queue' || command === 'q'){
    Queue.execute(client, msg);
  }

  //Pause
  else if (command === 'pause'){
    Pause.execute(client, msg);
  }

  //Resume
  else if (command === 'resume'){
    Resume.execute(client, msg);
  }

  //Stop
  else if(command === 'stop'){
    Stop.execute(client, msg);
  }

  //Loop
  else if (command === 'loop') {
    Loop.execute(client, msg);
  }

  //Progress
  else if (command === 'progress' || command === 'prog'){
    Progress.execute(client, msg);
  }

  //Russian Rulatte
  else if (command === "rr") {
    bullets = Rr.execute(msg, bullets);
  }

  //Stats
  else if (command === "stats") {
    Stats.execute(msg, client);
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
    msg.channel.send("Sorry the weather command is currently not working :(");
    //WeatherFile.execute(msg, args);
  }

  //Bitcoin
  else if (command === "btc" || command === "bitcoin") {
    Btc.execute(msg);
  }

  //Webshot
  else if (command === "ws") {
    args = args.toString();
    WS.execute(args, msg);
  }

  //Covid
  else if (command === "covid") {
    Covid.execute(msg);
  }

  //Osu
  else if (command === "osu") {
    OSU.execute(msg, args);
  }

  //Blackjack Start
  else if (command === "bj") {
    gameStarted = BJ.execute(msg, gameStarted, stack, curr, playerDeck, cpuDeck);
    console.log("Game: "+gameStarted);
  }
  
  //Blackjack Hit
  else if (command === "h" && gameStarted === true) {
    gameStarted = BJhit.execute(msg, curr, playerDeck, cpuDeck, stack, gameStarted, sum);
    console.log("Player Deck: "+playerDeck)
  }

  //Blackjack Stay
  else if (command === "s" && gameStarted === true) {
    gameStarted = BJStay.execute(msg, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted);
  }

});

client.login(process.env.DISCORD_KEY);