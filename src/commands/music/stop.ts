module.exports = {
    name: 'stop',
    description: 'stop the music',
    execute (client: any, msg: any) {
        let isDone = client.player.stop(msg);
        if(isDone)
            msg.channel.send('Music stopped, the Queue was cleared!');
    },
};