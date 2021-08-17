module.exports = {
    name: 'stop',
    description: 'stop the music',
    execute (client, msg) {
        let isDone = client.player.stop(msg);
        if(isDone)
            msg.channel.send('Music stopped, the Queue was cleared!');
    },
};