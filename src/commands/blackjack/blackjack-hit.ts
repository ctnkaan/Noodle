export = {
  name: "blackjack-hit",
  description: "hit",
  execute(
    msg: any, args: string, curr: number, stack: number[] , playerDeck: number[], cpuDeck: number[], cpuSum: number, sum: number, gameStarted: boolean
  ) {

    if (stack.pop() != undefined) {
      curr = stack.pop() as number;
    }

    playerDeck.push(curr);

    sum = 0;
    for (let i = 0; i < playerDeck.length; i++) sum += playerDeck[i];

    msg.channel.send("You draw " + curr + "\nYour current sum is " + sum);

    if (sum > 21) {
      msg.channel.send("Bust!");
      (stack = []), (playerDeck = []), (cpuDeck = []), curr, (sum = 0);
      return false;
    } else {
      return true;
    }
  },
};
