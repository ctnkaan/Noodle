import { MessageType } from "../types/message";

export = {
  name: "Countdown",
  description: "Countdown from user args",
  execute(message: MessageType, args: string) {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    }

    //make args an number
    let argsInt = parseInt(args);

    if (argsInt < 0) {
      return message.channel.send(`Countdown must be above 0, ${message.author}!`);
    }

    message.channel.send("Countdown started " + argsInt + " secs ");

    const counter = setInterval(() => {
      if (argsInt > 0) {
        console.log(argsInt);
        argsInt--;
      } else {
        message.channel.send("Countdown is over");
        clearInterval(counter);
      }
    }, 1000);
  },
};
