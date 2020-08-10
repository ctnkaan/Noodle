//<> with ❤️ by Çetin Kaan Taşkıngenç & Mehmetcan Polat

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
var ffmpeg = require('ffmpeg');
const {meme} = require('memejs');

var servers = {};

let bullets = 6;



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("!!help");
});




client.on('message', msg => {

  // russian rulet game
  if (msg.content === "!!rr") {
    let a = Math.floor(Math.random() * bullets) + 1;

    if (a !== 1) {
      msg.channel.send("You Survived");
      bullets--;
    } else if (a === 1) {
      msg.channel.send("You Died!\nhttps://art.pixilart.com/123602c91f84bfa.gif");
      bullets = 6;
    }

  }


  //showing how many servers and users are using the bot bot
  if (msg.content === "!!stats") {
    var scount =  client.guilds.cache.size;
    var usercount = client.users.cache.size;

    msg.reply(`${client.user.username} is on ${scount} server with ${usercount} users`);
  }

  msg.reply



  //displays a giff img

  if (msg.content === '!!bless') {
    msg.channel.send('B L E S S E D');
    msg.channel.send("https://i.pinimg.com/originals/c4/27/7d/c4277d9d382493ff8c55e975d438ed1c.gif");
  }



  //displays all commands

  if (msg.content === '!!help') {
    msg.channel.send("Website: https://maviyboct.github.io/noodle-site/\n\n----------------------------COMMANDS----------------------------\n\n!!meme -->   Displays a dank meme\n!!reddit <name> -->   Displays a img and comment from the subreddit <subreddit name> \n!!stats --> Displays the stats of the bot\n!!bless -->   RNG Gods blesses you.\n!!roll <number> -->   Random number between 1 and <number>\n!!rps -->   Rock Paper Scissors\n!!rr -->   Russian Roulette \n!!play <link> -->   Plays a music in your voice channel\n!!skip -->   skips the music\n!!stop -->   stops the music\n!!countdown <number> -->   Sets a countdown from <number>\n!!kick <username> -->   Kicks the user from server\n!!ban <username> -->   Slams the banhammer to that user.\n\n-----------------------------------------------------------------------");

  }



  //rock paper scissors
  if (msg.content === '!!rps') {
    r = 7;
    msg.channel.send("Write R:rock or P:paper or S:scissors after 7 secs when you see 0 press enter.")
    msg.channel.send("https://www.vampiretools.com/wp-content/uploads/2018/09/psr.jpg")
    msg.channel.send("!!! Write R:rock, P:paper or S:scissors after 7 secs when you see 0 press enter.")
    const counter = setInterval(() => {
      if (r > -1) {
        msg.channel.send(r)
        r--
      } else {
        clearInterval(counter)
      }
    }, 1000)
  }



  //Countdown

  if (!msg.content.startsWith("!!") || msg.author.bot) return;

  let counta = msg.content.slice("!!".length).split(' ');
  const commanda = counta.shift().toLowerCase();

  if (commanda === "countdown") {

    if (!counta.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    }
    if (counta < 0) {
      return msg.channel.send(`Countdown must be above 0, ${msg.author}!`);
    }

    msg.channel.send("Countdown started " + counta + " secs ")
    const counter = setInterval(() => {
      if (counta > 0) {
        console.log(counta)
        counta--
      } else {
        msg.channel.send("Countdown is over")
        clearInterval(counter)
      }
    }, 1000)
  }
  //gets input and rolls between 1 and user input

  if (!msg.content.startsWith("!!") || msg.author.bot) return;

  const args = msg.content.slice("!!".length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'roll') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    }

    var a = Math.floor(Math.random() * args) + 1;

    if (a <= 0) {
      return msg.channel.send(`Please enter a number above 0 , ${msg.author}!`);
    }
    if ((a - 1) !== (a - 1)) { //Checks if input is a number or not
      return msg.channel.send(`Please enter a number , ${msg.author}!`);
    }

    msg.channel.send(`${msg.author}: ` + a);
  }


  //displays a img and title from a reddit community

  if (command === 'reddit') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    } else {
      meme(''+args, function(err, data) {
        if (err) return msg.channel.send(err);
        msg.channel.send(data.title);
        msg.channel.send(data.url);
      });
    }


  }

  //displays a img from r/dankmemes

  if (msg.content === "!!meme") {
    meme('dankmemes', function(err, data) {
      if (err) return msg.channel.send(err);
      msg.channel.send(data.title);
      msg.channel.send(data.url);
    });
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
