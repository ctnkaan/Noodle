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
          })
        } catch (err) {
          msg.channel.send(err);
        }
    },
   };