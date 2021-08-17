module.exports = {
    name: 'pause',
    description: 'pause the music',
    execute (client, msg) {
        let song = client.player.pause(msg);
        if(song) 
            msg.channel.send(`${song.name} was paused!`);
    },
};