var webshot = require('webshot-node');
const Wss = require("./webshot/webshot-send");

module.exports = {
    name: 'covid',
    description: 'display img of a website',
    execute(msg :any) {
      msg.channel.send("Getting data...");
        try {
          webshot("https://covid19asi.saglik.gov.tr/", 'img.png', (err: any) => {
            if (err) throw err;
            console.log('Captured');
         }, () => {
           Wss.execute(msg);
         })
        } catch (err) {
          msg.channel.send("There is already a caputed img. Please do !!s");
          console.log(err);
        }
    },
  };