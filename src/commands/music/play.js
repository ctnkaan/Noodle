

module.exports = {
    name: 'play',
    description: 'display a gif img',
    async execute(client, msg, args) {

        let song = await client.player.play(msg, args.join(' '));
        if(song)
          console.log(`Playing ${song.name}`);
        return;
    },
   };