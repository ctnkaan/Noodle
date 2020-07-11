const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  //displays a giff img
  if (msg.content === '!!abdest') {
    msg.channel.send('A B D E S T L E N D İ N');
    msg.channel.send("https://i.pinimg.com/originals/c4/27/7d/c4277d9d382493ff8c55e975d438ed1c.gif");
  }

  //gives the user a number indicating their penis size between 0-45 and then comments on it
  if (msg.content === "!!penis") {
  var a = Math.floor(Math.random() * 45)+1;
  msg.reply(a+"cm");
  if (a <= 5) {
    msg.reply("Görünmüyor")
  } else if (a <= 15) {
    msg.reply("Ufacık");
  } else if (a > 15 && a<=30) {
    msg.reply("Nice dick bro");
  } else {
    msg.reply("ANASKMM CANAVAAAAR");
  }
}

 //connects to users room
 if (message.content === '!!join') {
   // Only try to join the sender's voice channel if they are in one themselves
   if (message.member.voice.channel) {
     const connection = await message.member.voice.channel.join();
   } else {
     message.reply('You need to join a voice channel first!');
   }
 }

 });

client.login('NzMxNTE0MzM0NjIxOTkxMDI1.XwnjCQ.GyBLDAidTTpQr28ywMobPB7W2ZY');
