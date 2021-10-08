module.exports = {
    name: 'Help',
    description: 'displays all the commands',
    execute(msg :any) {
        msg.channel.send("Repo: https://github.com/ctnkaan/Noodle"+
        "\n\n----------------------------COMMANDS----------------------------\n\n"+

        "-meme -->   Displays a dank meme\n\n"+
        "-reddit <name> -->   Displays a image and comment from the subreddit <subreddit name> \n\n"+
        "-p <song> -->   play a song \n\n"+
        "-stop -->   stop the song \n\n"+
        "-skip -->   skip the song \n\n"+
        "-pause --> pause the song \n\n"+
        "-resume --> resume the song \n\n"+
        "-clear --> clear the queue \n\n"+
        "-q --> show the queue \n\n"+
        "-prog --> show the progress of the song \n\n"+
        "-loop --> loop the song \n\n"+
        "-stats -->   Displays the stats of the bot\n\n"+
        "-roll <number> -->   Random number between 1 and <number>\n\n"+
        "-rps -->   Rock Paper Scissors\n\n"+
        "-rr -->   Russian Roulette\n\n"+
        "-case -->   Open a weapon case\n\n"+
        "-bj -->   Start a Blackjack game\n\n"+
        "-countdown <number> -->   Sets a countdown from <number>\n\n"+
        "-kick <username> -->Kicks the user from server\n\n"+
        "-ban <username> -->   Slams the banhammer to that user\n\n"+
        "-weather <city> -->   Display the weather information of given city\n\n"+

        "-----------------------------------------------------------------------");
    },
   };