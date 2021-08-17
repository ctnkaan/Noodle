module.exports = {
    name: 'play',
    description: 'play a song',
    async execute(client, message, args) {

      if(client.player.isPlaying(args)) {
        let song = await client.player.addToQueue(message, args.join(' '));

        // If there were no errors the Player#songAdd event will fire and the song will not be null.
        if(song)
            console.log(`Added ${song.name} to the queue`);
        return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            // If there were no errors the Player#songAdd event will fire and the song will not be null.
            if(song)
                console.log(`Started playing ${song.name}`);
            return;
        }
    },
   };