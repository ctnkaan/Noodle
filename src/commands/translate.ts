import { MessageType } from "../types/message";

const { translate } = require("bing-translate-api");

export = {
  name: "Translate",
  desc: "Translate a message to English",
  async execute(message: MessageType) {
    if (message.author.bot) return;

    let args = message.content.replace("-translate ", "");

    translate(args, null, "en", true)
      .then((res: { translation: string }) => {
        if (res.translation == "-translate")
          message.channel.send("Please provide the text to translate");
        else if (res.translation == args)
          message.channel.send(
            "The text is either already in English or I can't understand what language it is\nNote: I can't Understand languages such as Hindi or Japanese in Latin Alphabet."
          );
        else message.channel.send(res.translation);
      })
      .catch((err: any) => {
        message.channel.send("Sorry, I had an error :(");
        console.error(err);
      });
  },
};
