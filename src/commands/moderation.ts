module.exports = {
    name: 'Moderation',
    description: 'Ban and Kick commands for discord server',
    execute(msg: any, command: any) {

        let user, member;
        switch (command) {
          //kick
          case 'kick':
            user = msg.mentions.users.first();
      
            if (user) {
               member = msg.guild.member(user);
      
              if (member) {
                member.kick('kicking').then(() => {
                  msg.reply('This user kicked from the server');
                }).catch((err: any) => {
                  msg.reply('I am not able to kick that member')
                  console.log(err);
                });
              } else
                msg.reply("This member is not kickable")
            } else {
              msg.reply("That user is not member of this server ")
      
            }
            break;
      
            //ban
          case 'ban':
            user = msg.mentions.users.first();
        
              if (user) {
                member = msg.guild.member(user);
        
                if (member) {
                  member.ban({
                    ression: 'se ya'
                  }).then(() => {
                    msg.reply('This user banned from the server!');
                  }).catch(() => {
                    msg.reply('I am not able to ban this member');
                  });
                } else {
                  msg.reply("This member is not banable")
                }
        
              } else {
                msg.reply("That user is not member of this server ")
        
              }
              break;

            default: break;
        }
    },
   };