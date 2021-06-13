var webshot = require('webshot-node');
const WSS = require("./webshot-send");

module.exports = {
    name: 'covid',
    description: 'display img of a website',
    execute(msg) {
      msg.channel.send("Getting data...");
        try {
          webshot("https://covid19asi.saglik.gov.tr/", 'img.png', (err) => {
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