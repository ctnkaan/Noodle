module.exports = {
    name: 'case',
    description: 'csgo case opening',
    execute(msg) {

        

        let luck = Math.floor(Math.random() * 100) + 1;
        console.log(luck);

        if (luck <= 60) {
            let item = Math.floor(Math.random() * 24) + 1;
            msg.channel.send('You got a blue item!');
            msg.channel.send('https://raw.githubusercontent.com/ctnkaan/Noodle/dev/images/items/blue/'+ item +'.png');

        } else if (luck <= 80) {
            let item = Math.floor(Math.random() * 10) + 1;
            msg.channel.send('You got a purple item!');
            msg.channel.send('https://raw.githubusercontent.com/ctnkaan/Noodle/dev/images/items/blue/'+ item +'.png');

        } else if (luck <= 90) {
            let item = Math.floor(Math.random() * 5) + 1;
            msg.channel.send('You got a red item!');
            msg.channel.send('https://raw.githubusercontent.com/ctnkaan/Noodle/dev/images/items/blue/'+ item +'.png');
        } else if (luck > 90) {
            let item = Math.floor(Math.random() * 7) + 1;
            msg.channel.send('You got a ultra rare item!');
            msg.channel.send('https://raw.githubusercontent.com/ctnkaan/Noodle/dev/images/items/blue/'+ item +'.png');
        }

    },
   };