import { MessageType } from "../types/message";

export = {
  name: "case",
  description: "csgo case opening",
  execute(msg: MessageType) {
    let luck = Math.floor(Math.random() * 300) + 1;
    console.log(luck);

    if (luck <= 250) {
      let item = Math.floor(Math.random() * 24) + 1;
      msg.channel.send("You got a blue item!\n ");
      msg.channel.send(
        "https://raw.githubusercontent.com/ctnkaan/Noodle/master/images/items/blue/" +
          item +
          ".png"
      );
    } else if (luck <= 260) {
      let item = Math.floor(Math.random() * 10) + 1;
      msg.channel.send("You got a purple item!");
      msg.channel.send(
        "https://raw.githubusercontent.com/ctnkaan/Noodle/master/images/items/purple/" +
          item +
          ".png"
      );
    } else if (luck <= 270) {
      let item = Math.floor(Math.random() * 5) + 1;
      msg.channel.send("You got a red item!");
      msg.channel.send(
        "https://raw.githubusercontent.com/ctnkaan/Noodle/master/images/items/red/" +
          item +
          ".png"
      );
    } else if (luck > 270) {
      let item = Math.floor(Math.random() * 7) + 1;
      msg.channel.send("You got a ultra rare special item!");
      msg.channel.send(
        "https://raw.githubusercontent.com/ctnkaan/Noodle/master/images/items/yellow/" +
          item +
          ".png"
      );
    }
  },
};
