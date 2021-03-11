const {meme} = require('memejs');

module.exports = {
    name: 'Reddit',
    description: 'Display post from given subreddit',
    execute(msg, args) {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
          } else {
            meme(''+args, function(err, data) {
              if (err) return msg.channel.send("Unknown subreddit");
              msg.channel.send(data.title);
              msg.channel.send(data.url);
            });
          }
    },
   };