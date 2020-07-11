const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!!ping') {
    msg.reply('pong');
  }

  if (msg.content === '!!abdest') {
    msg.reply('A B D E S T L E N D İ N');
  }
});

client.login('NzMxNTE0MzM0NjIxOTkxMDI1.XwnjCQ.GyBLDAidTTpQr28ywMobPB7W2ZY');
