module.exports = {
    name: 'Help',
    description: 'displays all the commands',
    execute(msg) {
        msg.channel.send("Website: https://ctnkaan.github.io/noodle-site/"+
        "\n\n----------------------------COMMANDS----------------------------\n\n"+

        "!!meme -->Displays a dank meme\n\n"+
        "!!reddit <name> -->   Displays a img and comment from the subreddit <subreddit name> \n\n"+
        "!!stats -->   Displays the stats of the bot\n\n"+
        "!!bless -->   RNG Gods blesses you\n\n"+
        "!!roll <number> -->   Random number between 1 and <number>\n\n"+
        "!!rps -->   Rock Paper Scissors\n\n"+
        "!!rr -->   Russian Roulette\n\n"+
        "!!case -->   Open a weapon case\n\n"+
        "!!bj -->   Start a Blackjack game\n\n"+
        "!!countdown <number> -->   Sets a countdown from <number>\n\n"+
        "!!kick <username> -->Kicks the user from server\n\n"+
        "!!ban <username> -->   Slams the banhammer to that user\n\n"+
        "!!weather <city> -->   Display the weather information of given city\n\n"+

        "-----------------------------------------------------------------------");
    },
   };