module.exports = {
    name: 'Rock Paper Scissors',
    description: 'A badly written game',
    execute(msg) {
        r = 7;
        msg.channel.send("Write R:rock or P:paper or S:scissors after 7 secs when you see 0 press enter.");
        msg.channel.send("https://www.vampiretools.com/wp-content/uploads/2018/09/psr.jpg");
        msg.channel.send("!!! Write R:rock, P:paper or S:scissors after 7 secs when you see 0 press enter.");
        const counter = setInterval(() => {
          if (r > -1) {
            msg.channel.send(r);
            r--;
          } else {
            clearInterval(counter);
          }
        }, 1000);
    },
   };