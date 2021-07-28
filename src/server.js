//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

//Third Party
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: true,
    leaveOnEnd: false,
    leaveOnStop: false,
    quality: 'high',
});

client.player = player;

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

//Blackjack variables
let stack = [], playerDeck = [], cpuDeck = [], curr, cpuSum = 0, sum = 0, gameStarted = false;

//RR
let bullets = 6; 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("!!help, !!play, !!reddit, !!meme");
});

client.player.on('songAdd',  (message, queue, song) =>
    message.channel.send(`**${song.name}** has been added to the queue!`))
    .on('songFirst',  (message, song) =>
        message.channel.send(`**${song.name}** is now playing!`));

client.on('message', async (msg) => {

  if (!msg.content.startsWith("!!") || msg.author.bot) return;
  let args = msg.content.slice("!!".length).split(' ');
  const command = args.shift().toLowerCase();


  //Russian Rulatte
  if (command === "rr") {
    bullets = Rr.execute(msg, bullets);
  }

  //--------------------------------------CLEANUP--------------------------------------------------------------------------
  else if (command === "play") {
    let song = await client.player.play(msg, args.join(' '));
    if(song)
      console.log(`Playing ${song.name}`);
    return;
  }

  else if (command === 'skip'){
    let song = client.player.skip(msg);
    if(song)
        msg.channel.send(`${song.name} was skipped!`);
  }

  else if (command === 'clear'){
    let isDone = client.player.clearQueue(msg);
    if(isDone)
        msg.channel.send('Queue was cleared!');
  }

  else if (command === 'queue'){
    let queue = client.player.getQueue(msg);
    if(queue)
        msg.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
            return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`
        }).join('\n')));
  }

  else if (command === 'pause'){
    let song = client.player.pause(msg);
    if(song) 
        msg.channel.send(`${song.name} was paused!`);
  }

  else if (command === 'resume'){
    let song = client.player.resume(msg);
    if(song)
        msg.channel.send(`${song.name} was resumed!`);
  }

  else if(command === 'stop'){
    let isDone = client.player.stop(msg);
    if(isDone)
        msg.channel.send('Music stopped, the Queue was cleared!');
  }

  else if (command === 'loop') {
    let toggle = client.player.toggleLoop(msg);
    
    if(toggle === null)
        return;
    // Send a message with the toggle information
    else if (toggle)
        msg.channel.send('I will now repeat the current playing song.');
    else msg.channel.send('I will not longer repeat the current playing song.');

  }

  else if (command === 'progress'){
    let progressBar = client.player.createProgressBar(msg, {
        size: 15,
        block: '=',
        arrow: '>'
    });
    if(progressBar)
        msg.channel.send(progressBar);
    // Example: [==>                  ][00:25/04:07]
  }

  //--------------------------------------CLEANUP--------------------------------------------------------------------------

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
    BJ.execute(msg, gameStarted, stack, curr, playerDeck, cpuDeck);
  }
  
  //Blackjack Hit
  else if (command === "h" && gameStarted === true) {
    BJhit.execute(msg, curr, playerDeck, cpuDeck, stack, gameStarted, sum);
  }

  //Blackjack Stay
  else if (command === "s" && gameStarted === true) {
    BJStay.execute(msg, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted);
  }
  
});

client.login(process.env.DISCORD_KEY);