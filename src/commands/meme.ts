const {meme :any} = require('memejs');

module.exports = {
    name: 'Meme',
    description: 'Like reddit but for dankmemes and easier to write',
    execute(msg :any) {
        meme('dankmemes', function(err: any, data: { title: any; url: any; }) {
            if (err) return msg.channel.send(err);
            msg.channel.send(data.title);
            msg.channel.send(data.url);
          });
    },
};