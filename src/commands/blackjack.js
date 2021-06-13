//Functions
const Shuffle = require('../functions/shuffle');

module.exports = {
    name: 'Blackjack',
    description: 'Start a game of Blackjack',
    execute(msg, gameStarted, stack, curr, playerDeck, cpuDeck) {
        gameStarted = true;

        for (let i = 0; i < 13; i++) {
            for (let j = 1; j <= 13; j++) {
                if (j > 10) 
                  stack.push(10);
                else 
                  stack.push(j);
            }
        }
    
        Shuffle.execute(stack)
    
        console.log(stack);
    
        //setting up players hand
        for (let i = 0; i < 2; i++) {
            curr = stack.pop()
            playerDeck[i] = curr;
        }
    
        //setting up cpu hand
        for (let i = 0; i < 2; i++) {
            curr = stack.pop()
            cpuDeck[i] = curr;
        }
    
        console.log(cpuDeck);
    
        msg.channel.send("Cpu has "+ cpuDeck[0]+ " and a hidden card\n\nYou have "+playerDeck[0]+" and "+playerDeck[1]+"\n\nType !!h for Hit\nType !!s for Stay");
    },
   };