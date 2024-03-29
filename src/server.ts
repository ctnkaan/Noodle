//<> with ❤️ by Çetin Kaan Taşkıngenç

//Third Party
import dotenv from "dotenv";
dotenv.config();
import { Client } from "discord.js";
import { MessageType } from "./types/message";


//Commands
import commandMap from "./commandMap";

const prefix = "!";

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
  curr: number = 0,
  cpuSum: number = 0,
  sum: number = 0,
  gameStarted: boolean = false;

//Russian Roulette variables
let bullets: number = 6;



//When the bot is connected
client.on("ready", () => {
  if (!client.user) return; // to appease typescript. In reality, this will never happen

  console.log(`I am ready! Logged in as ${client.user.tag}`);
  client.user.setActivity(`${prefix} help`);
});

client.on("message", (message: MessageType) => {

    // ignore bots
    if (message.author.bot) return;

    //If the message does not start with the prefix return
    if (!message.content.startsWith(prefix)) return;

    const args: string[] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

    const command: string = args.shift()!.toLowerCase();


    //Check if the command exists in the hashmap. It returns undefined if it doesn't exist
    const currCommand = commandMap.get(command);

      
    //Blackjack Start
    if (currCommand === "blackjack")
      gameStarted = currCommand.execute(message, gameStarted, stack, curr, playerDeck, cpuDeck);

    //Blackjack Hit
    else if (currCommand === "h" && gameStarted === true)
      gameStarted = currCommand.execute(message, curr, playerDeck, cpuDeck, stack, gameStarted, sum);

    //Blackjack Stay
    else if (currCommand === "s" && gameStarted === true)
      gameStarted = currCommand.execute(message, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted);

    else if (currCommand == "rr")
      currCommand.execute(message, bullets);

    //If the currCommand is not undefined
    else if (currCommand)
      currCommand.execute(message, args);
    else
      message.channel.send(`Command not found! Type ${prefix} help to see all commands`);
  
});

client.login(process.env.DISCORD_KEY);
