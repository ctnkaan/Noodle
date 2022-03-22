//<> with ❤️ by Çetin Kaan Taşkıngenç

//Third Party
import dotenv from "dotenv";
dotenv.config();
import { Client } from "discord.js";

//Commands
import commandMap from "./commandMap";

const prefix = "!p";

const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILDS",
  ],
});

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

//When the bot is connected
client.on("ready", () => {
  if (!client.user) return; // to appease typescript. In reality, this will never happen

  console.log(`I am ready! Logged in as ${client.user.tag}`);
  client.user.setActivity(`${prefix} help`);
});

client.on("message", (msg: ) => {
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
