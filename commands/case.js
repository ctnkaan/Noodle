module.exports = {
    name: 'case',
    description: 'csgo case opening',
    execute(msg) {

        

        let luck = Math.floor(Math.random() * 100) + 1;
        console.log(luck);

        if (luck <= 60) {
            let blue = Math.floor(Math.random() * 24) + 1;
            msg.channel.send('You got a blue item!');
            msg.channel.send('https://raw.githubusercontent.com/ctnkaan/Noodle/dev/images/items/blue/'+ blue +'.png');





        } else if (luck <= 80) {
            msg.channel.send('You got a purple item!');
        } else if (luck <= 90) {
            msg.channel.send('You got a red item!');
        } else if (luck > 90) {
            msg.channel.send('You got a ultra rare item!');
        }

    },
   };