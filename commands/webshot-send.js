const fs = require('fs');

module.exports = {
    name: 'webshot-send',
    description: 'send captured img',
    execute(msg) {
        try {
            msg.channel.send({
            files: [{
              attachment: "img.png",
              name: "img.png"
            }]
          }).then( () => {
            fs.unlink('./img.png', (err) => {
              if (err) throw err;
              console.log('deleted');
            });
          })
        } catch (err) {
          msg.channel.send(err);
        }
    },
   };