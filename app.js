const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!!abdest') {
    msg.channel.send('A B D E S T L E N D İ N');
    msg.channel.send("https://i.pinimg.com/originals/c4/27/7d/c4277d9d382493ff8c55e975d438ed1c.gif");
  }
});

client.login('NzMxNTE0MzM0NjIxOTkxMDI1.XwnjCQ.GyBLDAidTTpQr28ywMobPB7W2ZY');
