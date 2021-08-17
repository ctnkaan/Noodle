module.exports = {
    name: 'skip',
    description: 'skip the current song',
    execute(client, msg) {

        let song = client.player.skip(msg);
        if(song)
            msg.channel.send(`${song.name} was skipped!`);
    },
   };