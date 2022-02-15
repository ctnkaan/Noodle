export = {
  name: "pause",
  description: "pause the music",
  execute(client: any, msg: any) {
    let song = client.player.pause(msg);
    if (song) msg.channel.send(`${song.name} was paused!`);
  },
};
