export = {
  name: "Resume",
  description: "Resume the paused song",
  execute(client: any, msg: any) {
    let song = client.player.resume(msg);
    if (song) msg.channel.send(`${song.name} was resumed!`);
  },
};
