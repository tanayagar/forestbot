const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();

const token ='NzI2NzAzMjM4NzU3MjIwNDMz.XviarA.w9DgsjN6w9gehcTKrnZQJd-o5RI';

const PREFIX = '!';


bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    if(message.content[0]==='!'){
    var url='https://forestapp.cc/join-room?token=';
    var embedList=[];
    
    if(args[0]==='forest'){
    switch(args[1]){
        case 'help':
            message.channel.send(
                        "\n **USAGE** \n \n`!forest dur tts rcode tree` \n \n `dur` : `duration (mins)` \n `tts` : `Time to start (mins)` \
                        \n `rcode` : `Room_Code` \n `tree` : `Tree_Type` \
                        \n \n **Default Usage**\
                        \n `!forest default rcode` \
                        \n \n  Create default session for 25 minutes that starts in 5 minutes"
                        );
            break;
        
            case 'default':
                var st=5;
                var end=25;
                var tree='Wisteria'
                message.channel.send("Starting Default");
                const embed = new Discord.MessageEmbed()
                .setTitle('New Forest Room')
                .addField('Room Owner', message.author.username,)
                .setColor(0xF1C40F)
                .addField('Tree Type',tree)
                .addField('Duration',end+' mins',true)
                .addField('Time to Start',st+' mins',true)
                .addField('Join URL',url+args[2])
                .setThumbnail("https://forestapp.cc/img/icon.png");
                message.channel.send(embed);
                message.channel.send(`<@&726748170545004576> A new tree was planted. Join Now!!`);


                var d = new Date();
                setTimeout(function(){
                    var d = new Date();
                    message.channel.send(message.author.username+"'s Forest Session has Started at "+d.toLocaleTimeString());
                },ms(5+'m'));

                //setTimeout(function())
                endAt= +end + +st;

                setTimeout(function(){
                    var d = new Date();
                    message.channel.send(`<@&726748170545004576>`+ message.author.username+`'s session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
                },ms(endAt+'m'));
                break;

            case 'new':
                const embed2 = new Discord.MessageEmbed()
                        .setTitle('New Forest Room')
                        .addField('Room Owner', message.author.username,)
                        .setColor(0xF1C40F)
                        .addField('Tree Type',args[5])
                        .addField('Duration',args[2]+' mins',true)
                        .addField('Time to Start',args[3]+' mins',true)
                        .addField('Join URL',url+args[4])
                        .setThumbnail("https://forestapp.cc/img/icon.png");
                        message.channel.send(embed2);
                        message.channel.send(`<@&726748170545004576> A new tree was planted. Join Now!!`);
            
            
                        var d = new Date();
                        setTimeout(function(){
                            var d = new Date();
                            message.channel.send(message.author.username+"'s Forest Session has Started at "+d.toLocaleTimeString());
                        },ms(args[3]+'m'));
            
                        //setTimeout(function())
                        endAt= +args[2] + +args[2];
            
                        setTimeout(function(){
                            var d = new Date();
                            message.channel.send(`<@&726748170545004576>`+ message.author.username+`'s session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
                        },ms(endAt+'m'));
                break;

        default:
            message.channel.send("Hey buddy, if you want some help, ask for it. \n `!forest help`");
    }
}
}
});
bot.login(token);
