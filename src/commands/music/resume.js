module.exports = {
    name: 'Resume',
    description: 'Resume the paused song',
    execute(client, msg) {
        let song = client.player.resume(msg);
        if(song)
            msg.channel.send(`${song.name} was resumed!`);
    },
   };