export = {
  name: "Blackjack-Stay",
  description: "stay command for blackjack",
  execute(
    msg: any,
    cpuSum: string | number,
    cpuDeck: any[],
    sum: string | number,
    stack: any[],
    playerDeck: string | any[],
    curr: any,
    gameStarted: boolean
  ) {
    msg.channel.send("CPU has " + cpuDeck[0] + " and " + cpuDeck[1]);

    //CPU deck count
    for (let i = 0; i < cpuDeck.length; i++) cpuSum += cpuDeck[i];

    //player deck count
    for (let i = 0; i < playerDeck.length; i++) sum += playerDeck[i];

    console.log("sum: " + sum);

    if (cpuSum > sum) {
      console.log(cpuSum);
      console.log(sum);
      msg.channel.send("CPU wins !");
      (stack = []),
        (playerDeck = []),
        (cpuDeck = []),
        curr,
        (sum = 0),
        (cpuSum = 0);
      return false;
    }

    while (cpuSum < 21) {
      for (let i = 0; i < cpuDeck.length; i++) cpuSum += cpuDeck[i];

      curr = stack.pop();
      console.log(curr);
      cpuDeck.push(curr);

      msg.channel.send("CPU draws " + curr + "\nCurrent CPU sum is " + cpuSum);

      if (cpuSum > 21) {
        msg.channel.send("CPU Bust !");
        (stack = []),
          (playerDeck = []),
          (cpuDeck = []),
          curr,
          (sum = 0),
          (cpuSum = 0);
        break;
      } else if (cpuSum > sum) {
        console.log(cpuSum);
        console.log(sum);
        msg.channel.send("CPU wins !");
        (stack = []),
          (playerDeck = []),
          (cpuDeck = []),
          curr,
          (sum = 0),
          (cpuSum = 0);
        break;
      } else if (cpuSum === sum && sum === 21) {
        msg.channel.send("Stalemate !");
        (stack = []),
          (playerDeck = []),
          (cpuDeck = []),
          curr,
          (sum = 0),
          (cpuSum = 0);
        break;
      }
    }

    return false;
  },
};
