var webshot = require('webshot-node');
const WSS = require("./webshot-send");

module.exports = {
    name: 'webshot',
    description: 'display img of a website',
    execute(args, msg) {
      msg.channel.send("Capturing your Image...");
        args = args.toString()
        try {
          webshot(args, 'img.png', (err) => {
            if (err) throw err;
            console.log('Captured');
         }, (sus) => {
           WSS.execute(msg);
         })
        } catch (err) {
          msg.channel.send("There is already a caputed img. Please do !!s");
          console.log(err);
        }
    },
  };