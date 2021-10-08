module.exports = {
    name: 'Russian Rulatte',
    description: 'Russian rulatte game with 6 bullets',
    execute(msg :any, bullets :number) {

        let a = Math.floor(Math.random() * bullets) + 1;

        if (a !== 1) {
          msg.channel.send("You Survived");
          bullets--;
          console.log(bullets);
          return bullets;
        } else if (a === 1) {
          msg.channel.send("You Died!\nhttps://art.pixilart.com/123602c91f84bfa.gif");
          bullets = 6;
          return bullets;
        }

    },
   };