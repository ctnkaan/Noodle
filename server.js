//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

//Third Party
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
var webshot = require('webshot-node');

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

//Functions
const Shuffle = require('./functions/shuffle');



let stack = [], playerDeck = [], cpuDeck = [], curr, cpuSum = 0, sum = 0, gameStarted = false; //blackjack

let bullets = 6; //RR 

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

  else if (command === "test") {
    webshot('google.com', 'img.png', function(err) {
      console.log(err)
    });
  }

  else if (command === "send") {
      msg.channel.send({
      files: [{
        attachment: "img.png",
        name: "img.png"
      }]
    })
  }

  //TODO: CARRY THIS TO COMMANDS
  //////////////////////////////////Blackjack//////////////////////////////////////

  else if (command === "bj") {

    gameStarted = true;

    for (let i = 0; i < 13; i++) {
        for (let j = 1; j <= 13; j++) {
            if (j > 10) 
              stack.push(10);
            else 
              stack.push(j);
        }
    }

    Shuffle.execute(stack)

    console.log(stack);

    //setting up players hand
    for (let i = 0; i < 2; i++) {
        curr = stack.pop()
        playerDeck[i] = curr;
    }

    //setting up cpu hand
    for (let i = 0; i < 2; i++) {
        curr = stack.pop()
        cpuDeck[i] = curr;
    }

    console.log(cpuDeck);

    msg.channel.send("Cpu has "+ cpuDeck[0]+ " and a hidden card\n\nYou have "+playerDeck[0]+" and "+playerDeck[1]+"\n\nType !!h for Hit\nType !!s for Stay");
  }
  
  else if (command === "h" && gameStarted === true) {
    curr = stack.pop();
    console.log(curr);
    playerDeck.push(curr);

    sum=0;
    for (let i = 0; i < playerDeck.length; i++)
      sum += playerDeck[i];

    msg.channel.send("You draw "+curr+"\nYour current sum is "+sum);

    if (sum > 21) {
      msg.channel.send("Bust!");
      stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
      gameStarted = false;
    }
  }

  else if (command === "s" && gameStarted == true) {
    msg.channel.send("CPU has "+ cpuDeck[0] + " and "+ cpuDeck[1]);

    if (cpuSum > sum) {
      console.log(cpuSum);
      console.log(sum);
      msg.channel.send("CPU wins !");
      stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
      gameStarted = false;
    }

    while(gameStarted == true) {
      curr = stack.pop();
      console.log(curr);
      cpuDeck.push(curr);

      cpuSum=0;
      for (let i = 0; i < cpuDeck.length; i++) 
        cpuSum+= cpuDeck[i];
      
        
      msg.channel.send("CPU draws "+curr+"\nCurrent CPU sum is "+cpuSum);

      if (cpuSum > 21) {
        msg.channel.send("CPU Bust !");
        stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
        gameStarted = false;
        break;

      } else if (cpuSum > sum) {
        console.log(cpuSum);
        console.log(sum);
        msg.channel.send("CPU wins !");
        stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
        gameStarted = false;
        break;

      } else {
        msg.channel.send("Stalemate !");
        stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
        gameStarted = false;
      }
    }
  }

/////////////////////////////////Blackjack//////////////////////////////////////
  
});

client.login(process.env.DISCORD_KEY);