"use strict";
//<> with ❤️ by Çetin Kaan Taşkıngenç
//Third Party
require('dotenv').config();
var Discord = require('discord.js');
var client = new Discord.Client();
var Player = require("discord-music-player").Player;
//Imports
var Rr = require("./commands/rr");
var Stats = require("./commands/stats");
var Help = require("./commands/help");
var Rps = require("./commands/rps");
var Countdown = require("./commands/countdown");
var Roll = require('./commands/roll');
var Reddit = require('./commands/reddit');
var Meme = require('./commands/meme');
var Moderation = require('./commands/moderation');
var Case = require('./commands/case');
var WeatherFile = require('./commands/weather');
var Btc = require('./commands/btc');
var WS = require("./commands/webshot/webshot");
var OSU = require("./commands/osu");
var Covid = require("./commands/covid");
var BJ = require("./commands/blackjack/blackjack");
var BJhit = require("./commands/blackjack/blackjack-hit");
var BJStay = require("./commands/blackjack/blackjack-stay");
var Play = require('./commands/music/play');
var Skip = require('./commands/music/skip');
var Clear = require('./commands/music/clear');
var Queue = require('./commands/music/queue');
var Pause = require('./commands/music/pause');
var Resume = require('./commands/music/resume');
var Stop = require('./commands/music/stop');
var Loop = require('./commands/music/loop');
var Progress = require('./commands/music/progress');
var Translate = require("./commands/translate");
//Blackjack variables
var stack = [], playerDeck = [], cpuDeck = [], curr, cpuSum = 0, sum = 0, gameStarted = false;
//Russian Roulette variables
var bullets = 6;
var player = new Player(client, {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: false,
    timeout: 0,
    volume: 150,
    quality: 'high',
});
client.player = player;
client.player.on('songAdd', function (message, queue, song) {
    return message.channel.send("**" + song.name + "** has been added to the queue!");
}).on('songFirst', function (message, song) {
    return message.channel.send("**" + song.name + "** is now playing!");
});
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
    client.user.setActivity("-help");
});
client.on('message', function (msg) {
    if (!msg.content.startsWith("-") || msg.author.bot)
        return;
    var args = msg.content.slice("-".length).split(' ');
    var command = args.shift().toLowerCase();
    //Play
    if (command === "p" || command === "play") {
        Play.execute(client, msg, args);
    }
    //Skip
    else if (command === 'skip') {
        Skip.execute(client, msg);
    }
    //Clear
    else if (command === 'clear') {
        Clear.execute(client, msg);
    }
    //Queue
    else if (command === 'queue' || command === 'q') {
        Queue.execute(client, msg);
    }
    //Pause
    else if (command === 'pause') {
        Pause.execute(client, msg);
    }
    //Resume
    else if (command === 'resume') {
        Resume.execute(client, msg);
    }
    //Stop
    else if (command === 'stop') {
        Stop.execute(client, msg);
    }
    //Loop
    else if (command === 'loop') {
        Loop.execute(client, msg);
    }
    //Progress
    else if (command === 'progress' || command === 'prog') {
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
        console.log("Game: " + gameStarted);
    }
    //Blackjack Hit
    else if (command === "h" && gameStarted === true) {
        gameStarted = BJhit.execute(msg, curr, playerDeck, cpuDeck, stack, gameStarted, sum);
        console.log("Player Deck: " + playerDeck);
    }
    //Blackjack Stay
    else if (command === "s" && gameStarted === true) {
        gameStarted = BJStay.execute(msg, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted);
    }
    //Translate
    else if (command === "translate") {
        Translate.execute(msg);
    }
});
client.login(process.env.DISCORD_KEY);
