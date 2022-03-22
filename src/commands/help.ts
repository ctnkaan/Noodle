import { MessageType } from "../types/message";

export = {
  name: "Help",
  description: "displays all the commands",
  execute(msg: MessageType, args: string) {
    msg.channel.send(
      "Repo: https://github.com/ctnkaan/Noodle" +
        "\n\n----------------------------COMMANDS----------------------------\n\n" +
        "-meme -->   Displays a dank meme\n\n" +
        "-reddit <name> -->   Displays a image and comment from the subreddit <subreddit name> \n\n" +
        "-roll <number> -->   Random number between 1 and <number>\n\n" +
        "-rr -->   Russian Roulette\n\n" +
        "-case -->   Open a weapon case\n\n" +
        "-blackjack -->   Start a Blackjack game\n\n" +
        "-countdown <number> -->   Sets a countdown from <number>\n\n" +
        "-weather <city> -->   Display the weather information of given city\n\n" +
        "-----------------------------------------------------------------------"
    );
  },
};
