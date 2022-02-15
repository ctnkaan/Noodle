export = {
  name: "clear",
  description: "clear the current queue",
  execute(client: any, msg: any) {
    let isDone = client.player.clearQueue(msg);
    if (isDone) msg.channel.send("Queue was cleared!");
  },
};
