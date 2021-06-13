const {meme} = require('memejs');

module.exports = {
    name: 'Meme',
    description: 'Like reddit but for dankmemes and easier to write',
    execute(msg) {
        meme('dankmemes', function(err, data) {
            if (err) return msg.channel.send(err);
            msg.channel.send(data.title);
            msg.channel.send(data.url);
          });
    },
};