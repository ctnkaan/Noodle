//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
var ffmpeg = require('ffmpeg');

const Rr = require("./commands/rr");
const Stats = require("./commands/stats");
const Bless = require("./commands/bless");
const Help = require("./commands/help");
const Rps = require("./commands/rps");
const Countdown = require("./commands/countdown");
const Roll = require('./commands/roll');
const Reddit = require('./commands/reddit');
const Meme = require('./commands/meme');



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("!!help");
});




client.on('message', msg => {

  //Russian Rulatte
  let bullets = 6;

  if (msg.content === "!!rr") {
    bullets = Rr.execute(msg, bullets);
  }



  //Stats
  else if (msg.content === "!!stats") {
    Stats.execute(msg, client);
  }



  //Bless
  else if (msg.content === '!!bless') {
    Bless.execute(msg);
  }



  //Displays all commands
  else if (msg.content === '!!help') {
    Help.execute(msg);
  }



  //Rock paper scissors
  else if (msg.content === '!!rps') {
    Rps.execute(msg);
  }



  //Countdown
  if (!msg.content.startsWith("!!") || msg.author.bot) return;
  let counta = msg.content.slice("!!".length).split(' ');
  const commanda = counta.shift().toLowerCase();

  if (commanda === "countdown") {
    Countdown.execute(msg, counta);
  }

  

  //Roll
  if (!msg.content.startsWith("!!") || msg.author.bot) return;
  const args = msg.content.slice("!!".length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'roll') {
    Roll.execute(msg, args);
  }



  //Reddit
  if (command === 'reddit') {
    Reddit.execute(msg, args);
  }



  //Meme
  if (msg.content === "!!meme") {
    Meme.execute(msg);
  }

});



client.on('message', msg => {


  let args = msg.content.substring("!!".length).split(" ");



  //------------------moderation----------------------
  //kick
  switch (args[0]) {
    case 'kick':

      const user = msg.mentions.users.first();

      if (user) {
        const member = msg.guild.member(user);

        if (member) {
          member.kick('kicking').then(() => {
            msg.reply('This user kicked from the server');
          }).catch(err => {
            msg.reply('I am not able to kick that member')
            console.log(err);
          });
        } else
          msg.reply("This member is not kickable")
      } else {
        msg.reply("That user is not member of this server ")

      }
      break;
  }


  //ban
  switch (args[0]) {
    case 'ban':
      const user = msg.mentions.users.first();

      if (user) {
        const member = msg.guild.member(user);

        if (member) {
          member.ban({
            ression: 'se ya'
          }).then(() => {
            msg.reply('This user banned from the server!');
          }).catch(err => {
            msg.reply('I am not able to ban this member');
          });
        } else {
          msg.reply("This member is not banable")
        }

      } else {
        msg.reply("That user is not member of this server ")

      }
      break;
  }

});


// playing music

const queue = new Map();

client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!!')) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${'!!'}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${'!!'}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${'!!'}stop`)) {
    stop(message, serverQueue);
    return;
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
    quality: 'highestaudio'
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url, song.quality))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Started playing: **${song.title}**`);
}




client.login(process.env.DISCORD_KEY);
