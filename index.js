const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();

const token ='NzI2NzAzMjM4NzU3MjIwNDMz.XvhZyg.PXb99_Rgy4_RrTDBEpqL78Zgwb4';

const PREFIX = '!';


bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    var url='https://forestapp.cc/join-room?token=';
    var embedList=[];
    
    if(args[1]===""){
        message.channel.send("Hey buddy, if you want some help, ask for it. \n `!forest help`");
    }
    else if(args[1] === 'help'){
        message.channel.send(
            "\n **USAGE** \n \n`!forest dur tts rcode tree` \n \n `dur` : `duration (mins)` \n `tts` : `Time to start (mins)` \
            \n `rcode` : `Room_Code` \n `tree` : `Tree_Type` \
            \n \n **Default Usage**\
            \n `!forest default rcode` \
            \n \n  Create default session for 25 minutes that starts in 5 minutes"
            );
    }
    else if(args[1] === 'default'){
        message.channel.send("Starting Default");
            const embed = new Discord.MessageEmbed()
            .setTitle('New Forest Room')
            .addField('Room Owner', message.author.username,)
            .setColor(0xF1C40F)
            .addField('Tree Type','Wisteria')
            .addField('Duration',25+' mins',true)
            .addField('Time to Start',5+' mins',true)
            .addField('Join URL',url+args[2])
            .setThumbnail("https://forestapp.cc/img/icon.png");
            message.channel.send(embed);
            message.channel.send(`<@&726748170545004576> A new tree was planted. Join Now!!`);


            var d = new Date();
            setTimeout(function(){
                var d = new Date();
                message.channel.send("The Forest Session has Started at "+d.toLocaleTimeString());
            },ms(5+'m'));

            //setTimeout(function())
            endAt= +25 + +5;

            setTimeout(function(){
                var d = new Date();
                message.channel.send(`<@&726748170545004576> The current session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
            },ms(endAt+'m'));

    }
    else{

    switch(args[0]){

        case 'forest':
            const embed = new Discord.MessageEmbed()
            .setTitle('New Forest Room')
            .addField('Room Owner', message.author.username,)
            .setColor(0xF1C40F)
            .addField('Tree Type',args[4])
            .addField('Duration',args[1]+' mins',true)
            .addField('Time to Start',args[2]+' mins',true)
            .addField('Join URL',url+args[3])
            .setThumbnail("https://forestapp.cc/img/icon.png");
            message.channel.send(embed);
            message.channel.send(`<@&726748170545004576> A new tree was planted. Join Now!!`);


            var d = new Date();
            setTimeout(function(){
                var d = new Date();
                message.channel.send("The Forest Session has Started at "+d.toLocaleTimeString());
            },ms(args[2]+'m'));

            //setTimeout(function())
            endAt= +args[1] + +args[2];

            setTimeout(function(){
                var d = new Date();
                message.channel.send(`<@&726748170545004576> The current session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
            },ms(endAt+'m'));

            break;
    }
    }
});
bot.login(token);
