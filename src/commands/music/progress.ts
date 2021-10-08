module.exports = {
    name: 'progress',
    description: 'show the progress of the current track',
    execute (client: any, msg: any) {
        let progressBar = client.player.createProgressBar(msg, {
            size: 15,
            block: '=',
            arrow: '>'
        });
        if(progressBar)
            msg.channel.send(progressBar);
        // Example: [==>                  ][00:25/04:07]
    },
};