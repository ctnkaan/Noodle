import { MessageEmbed } from "discord.js";
import { meme } from "memejs";
import { MessageType } from "../types/message";
import { MemeType } from "../types/meme";

export = {
  name: "Reddit",
  description: "Display post from given subreddit",
  execute(message: MessageType, args: string) {
    meme(args)
    .then((data: MemeType) => {
        const msg = new MessageEmbed()
            .setColor("#c7651a")
            .setTitle(data.title)
            .setImage(data.url)
            .setTimestamp();

        message.channel.send({ embeds: [msg] });
    }) // Get the JSON output
    .catch((e) => {
        console.log(e);
        meme(args)
            .then((data) => {
                const msg = new MessageEmbed()
                    .setColor("#c7651a")
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setTimestamp();

                message.channel.send({ embeds: [msg] });
            })
            .catch((e) =>
                message.channel.send(
                    "Sorry I could not find any memes. Would you like to try again?"
                )
            );
    }); // Handle any errors
  },
};
