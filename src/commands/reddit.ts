const { meme } = require("memejs");

export = {
  name: "Reddit",
  description: "Display post from given subreddit",
  execute(msg: any, args: any) {
    if (!args.length) {
      return msg.channel.send(
        `You didn't provide any arguments, ${msg.author}!`
      );
    } else {
      meme("" + args, function (err: any, data: { title: any; url: any }) {
        if (err) return msg.channel.send("Unknown subreddit");
        msg.channel.send(data.title);
        msg.channel.send(data.url);
      });
    }
  },
};
