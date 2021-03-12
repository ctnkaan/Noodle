module.exports = {
    name: 'Countdown',
    description: 'Countdown from user input',
    execute(msg, counta) {

        if (!counta.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        }
        if (counta < 0) {
          return msg.channel.send(`Countdown must be above 0, ${msg.author}!`);
        }
      
          msg.channel.send("Countdown started " + counta + " secs ")
          
          const counter = setInterval(() => {
            if (counta > 0) {
              console.log(counta)
              counta--
            } else {
              msg.channel.send("Countdown is over")
              clearInterval(counter)
            }
          }, 1000)
    },
   };