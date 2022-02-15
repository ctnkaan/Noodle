//<> with ❤️ by Çetin Kaan Taşkıngenç

//Third Party
import dotenv from "dotenv";
dotenv.config();
import { Client } from "discord.js";
import { Player } from "discord-music-player";

//Commands
import Rr from "./commands/rr";
import Stats from "./commands/stats";
import Help from "./commands/help";
import Rps from "./commands/rps";
import Countdown from "./commands/countdown";
import Roll from "./commands/roll";
import Reddit from "./commands/reddit";
import Meme from "./commands/meme";
import Moderation from "./commands/moderation";
import Case from "./commands/case";
import WeatherFile from "./commands/weather";
import Btc from "./commands/btc";
import WS from "./commands/webshot/webshot";
import OSU from "./commands/osu";
import Covid from "./commands/covid";
import BJ from "./commands/blackjack/blackjack";
import BJhit from "./commands/blackjack/blackjack-hit";
import BJStay from "./commands/blackjack/blackjack-stay";
import Play from "./commands/music/play";
import Skip from "./commands/music/skip";
import Clear from "./commands/music/clear";
import Queue from "./commands/music/queue";
import Pause from "./commands/music/pause";
import Resume from "./commands/music/resume";
import Stop from "./commands/music/stop";
import Loop from "./commands/music/loop";
import Progress from "./commands/music/progress";
import Translate from "./commands/translate";

//Blackjack variables
let stack: number[] = [],
  playerDeck: number[] = [],
  cpuDeck: number[] = [],
  curr: number,
  cpuSum = 0,
  sum = 0,
  gameStarted = false;

//Russian Roulette variables
let bullets: number = 6;

const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: false,
  timeout: 0,
  volume: 150,
  quality: "high",
});

client.player = player;

client.player
  .on("songAdd", (message: any, queue: any, song: any) =>
    message.channel.send(`**${song.name}** has been added to the queue!`)
  )
  .on("songFirst", (message: any, song: any) =>
    message.channel.send(`**${song.name}** is now playing!`)
  );

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("-help");
});

client.on("message", (msg: any) => {
  if (!msg.content.startsWith("-") || msg.author.bot) return;
  let args = msg.content.slice("-".length).split(" ");
  const command = args.shift().toLowerCase();

  //Play
  if (command === "p" || command === "play") {
    Play.execute(client, msg, args);
  }

  //Skip
  else if (command === "skip") {
    Skip.execute(client, msg);
  }

  //Clear
  else if (command === "clear") {
    Clear.execute(client, msg);
  }

  //Queue
  else if (command === "queue" || command === "q") {
    Queue.execute(client, msg);
  }

  //Pause
  else if (command === "pause") {
    Pause.execute(client, msg);
  }

  //Resume
  else if (command === "resume") {
    Resume.execute(client, msg);
  }

  //Stop
  else if (command === "stop") {
    Stop.execute(client, msg);
  }

  //Loop
  else if (command === "loop") {
    Loop.execute(client, msg);
  }

  //Progress
  else if (command === "progress" || command === "prog") {
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
  else if (command === "help") {
    Help.execute(msg);
  }

  //Rock paper scissors
  else if (command === "rps") {
    Rps.execute(msg);
  }

  //Countdown
  else if (command === "countdown") {
    Countdown.execute(msg, args);
  }

  //Roll
  else if (command === "roll") {
    Roll.execute(msg, args);
  }

  //Reddit
  else if (command === "reddit") {
    Reddit.execute(msg, args);
  }

  //Meme
  else if (command === "meme") {
    Meme.execute(msg);
  }

  //Moderation
  /*
  else if (command === "kick" || command === "ban") {
    Moderation.execute(msg, command);
  }
  */

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
    gameStarted = BJ.execute(
      msg,
      gameStarted,
      stack,
      curr,
      playerDeck,
      cpuDeck
    );
    console.log("Game: " + gameStarted);
  }

  //Blackjack Hit
  else if (command === "h" && gameStarted === true) {
    gameStarted = BJhit.execute(
      msg,
      curr,
      playerDeck,
      cpuDeck,
      stack,
      gameStarted,
      sum
    );
    console.log("Player Deck: " + playerDeck);
  }

  //Blackjack Stay
  else if (command === "s" && gameStarted === true) {
    gameStarted = BJStay.execute(
      msg,
      cpuSum,
      cpuDeck,
      sum,
      stack,
      playerDeck,
      curr,
      gameStarted
    );
  }

  //Translate
  else if (command === "translate") {
    Translate.execute(msg);
  }
});

client.login(process.env.DISCORD_KEY);
