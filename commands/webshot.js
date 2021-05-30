var webshot = require('webshot-node');
module.exports = {
    name: 'webshot',
    description: 'display img of a website',
    execute(args) {
        args = args.toString()
          webshot(args, 'img.png', function(err) {
            console.log(err);
         });
    },
   };