export = {
  name: "skip",
  description: "skip the current song",
  execute(client: any, msg: any) {
    let song = client.player.skip(msg);
    if (song) msg.channel.send(`${song.name} was skipped!`);
  },
};
