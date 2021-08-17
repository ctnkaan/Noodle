module.exports = {
    name: 'queue',
    description: 'see the queue',
    execute (client, msg) {
        let isDone = client.player.clearQueue(msg);
        if(isDone)
            msg.channel.send('Queue was cleared!');
    },
};