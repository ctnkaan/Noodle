module.exports = {
    name: 'Stats',
    description: 'displays some stats about the bot',
    execute(msg, client) {

        let scount =  client.guilds.cache.size;
        let usercount = client.users.cache.size;
    
        msg.reply(`${client.user.username} is on ${scount} server with ${usercount} users`);

    },
   };