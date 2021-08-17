module.exports = {
    name: 'clear',
    description: 'clear the current queue',
    execute(client, msg) {
        let isDone = client.player.clearQueue(msg);
        if(isDone)
            msg.channel.send('Queue was cleared!');
    },
};