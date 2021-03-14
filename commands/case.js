module.exports = {
    name: 'case',
    description: 'csgo case opening',
    execute(msg) {

        let blue = new Array();

        blue[0] = "./images/items/blue/deserteagle-blaze"

        let luck = Math.floor(Math.random() * 100) + 1;
        console.log(luck);

        if (luck <= 60) {
            msg.channel.send('You got a blue item!');





        } else if (luck <= 80) {
            msg.channel.send('You got a purple item!');
        } else if (luck <= 90) {
            msg.channel.send('You got a red item!');
        } else if (luck > 90) {
            msg.channel.send('You got a ultra rare item!');
        }

    },
   };