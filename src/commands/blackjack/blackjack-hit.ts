module.exports = {
    name: 'blackjack-hit',
    description: 'hit',
    execute(msg: any, curr: any, playerDeck: number[], cpuDeck: number[], stack: number[], gameStarted: boolean, sum: number) {
        curr = stack.pop();
        console.log(curr);
        playerDeck.push(curr);
    
        sum=0;
        for (let i = 0; i < playerDeck.length; i++)
          sum += playerDeck[i];
    
        msg.channel.send("You draw "+curr+"\nYour current sum is "+sum);
    
        if (sum > 21) {
          msg.channel.send("Bust!");
          stack = [], playerDeck = [], cpuDeck = [], curr, sum = 0;
          return false;
        } else {
          return true;
        }
    },
   };