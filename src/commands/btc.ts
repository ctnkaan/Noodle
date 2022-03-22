import { MessageType } from "../types/message";

const bitcoinex = require("bitcoinex");

export = {
  name: "btc",
  description: "display current btc price",
  execute(message: MessageType) {
    bitcoinex.getPriceWith(
      "bitstamp",
      "usd",
      function (err: any, priceObject: { last: string }) {
        if (err) message.channel.send("There was a Error");
        else
          message.channel.send("Bitcoin is currently " + priceObject.last + " $");
      }
    );
  },
};
