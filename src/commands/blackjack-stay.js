module.exports = {
    name: 'Blackjack-Stay',
    description: 'stay command for blackjack',
    execute(msg, cpuSum, cpuDeck, sum, stack, playerDeck, curr, gameStarted) {
        msg.channel.send("CPU has "+ cpuDeck[0] + " and "+ cpuDeck[1]);

        if (cpuSum > sum) {
          console.log(cpuSum);
          console.log(sum);
          msg.channel.send("CPU wins !");
          stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
          gameStarted = false;
        }
    
        while(gameStarted == true) {
          curr = stack.pop();
          console.log(curr);
          cpuDeck.push(curr);
    
          cpuSum=0;
          for (let i = 0; i < cpuDeck.length; i++) 
            cpuSum+= cpuDeck[i];
          
            
          msg.channel.send("CPU draws "+curr+"\nCurrent CPU sum is "+cpuSum);
    
          if (cpuSum > 21) {
            msg.channel.send("CPU Bust !");
            stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
            gameStarted = false;
            break;
    
          } else if (cpuSum > sum) {
            console.log(cpuSum);
            console.log(sum);
            msg.channel.send("CPU wins !");
            stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
            gameStarted = false;
            break;
    
          } else {
            msg.channel.send("Stalemate !");
            stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
            gameStarted = false;
          }
        }
    },
   };