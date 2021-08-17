module.exports = {
    name: 'loop',
    description: 'loop the music',
    execute (client, msg) {
        let toggle = client.player.toggleLoop(msg);
    
        if(toggle === null)
            return;
        // Send a message with the toggle information
        else if (toggle)
            msg.channel.send('I will now repeat the current playing song. To stop the loop type -loop again.');
        else msg.channel.send('I will not longer repeat the current playing song.');
    },
};