module.exports = {
    name: 'Roll',
    description: 'roll between 1 and user input',
    execute(msg :any, args :any) {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        }
      
        let a = Math.floor(Math.random() * args) + 1;
      
        if (a <= 0) {
          return msg.channel.send(`Please enter a number above 0 , ${msg.author}!`);
        }
        if ((a - 1) !== (a - 1)) { //Checks if input is a number or not
          return msg.channel.send(`Please enter a number , ${msg.author}!`);
        }
      
        msg.channel.send(`${msg.author}: ` + a);
    },
   };