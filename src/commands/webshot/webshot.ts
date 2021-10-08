var webshot = require('webshot-node');
const WSS = require("./webshot-send");

module.exports = {
    name: 'webshot',
    description: 'display img of a website',
    execute(args :any, msg :any) {
      msg.channel.send("Capturing your Image...");
        args = args.toString()
        try {
          webshot(args, 'img.png', (err: any) => {
            if (err) throw err;
            console.log('Captured');
         }, () => {
           WSS.execute(msg);
         })
        } catch (err) {
          console.log(err);
        }
    },
  };