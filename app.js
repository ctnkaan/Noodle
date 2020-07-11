const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!!ping') {
    msg.reply('pong');
  }
});

client.login('NzMxNTE0MzM0NjIxOTkxMDI1.XwnP2g.Hb1vCMqZ0Vto32-fu8X1kzFHN-o');
test
