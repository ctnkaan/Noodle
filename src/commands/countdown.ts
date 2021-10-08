module.exports = {
    name: 'Countdown',
    description: 'Countdown from user input',
    execute(msg :any, input :any) {

        if (!input.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        }
        if (input < 0) {
          return msg.channel.send(`Countdown must be above 0, ${msg.author}!`);
        }
      
          msg.channel.send("Countdown started " + input + " secs ")
          
          const counter = setInterval(() => {
            if (input > 0) {
              console.log(input)
              input--
            } else {
              msg.channel.send("Countdown is over")
              clearInterval(counter)
            }
          }, 1000)
    },
   };