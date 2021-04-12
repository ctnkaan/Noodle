const bitcoinex = require('bitcoinex');

module.exports = {
    name: 'btc',
    description: 'display current btc price',
    execute(msg) {
        bitcoinex.getPriceWith('bitstamp', 'usd', function(err, priceObject) {
            if (err)
                msg.channel.send("There was a Error");
            else 
                msg.channel.send("Bitcoin is currently "+priceObject.last+" $");
        });
    },
   };