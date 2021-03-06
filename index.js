const Discord = require('discord.js');
const axios = require('axios');
const fs = require('fs');
const ms = require('ms');
const { clearInterval } = require('timers');
const client = new Discord.Client();


const PREFIX = '!';


client.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    if(message.content[0]==='!'){
    var url='https://forestapp.cc/join-room?token=';

    
    if(args[0]==='forest'){
    switch(args[1]){
        case 'help':
            // message.channel.send(
            //             "\n **USAGE** \n \n`!forest dur tts rcode tree` \n \n `dur` : `duration (mins)` \n `tts` : `Time to start (mins)` \
            //             \n `rcode` : `Room_Code` \n `tree` : `Tree_Type` \
            //             \n \n **Default Usage**\
            //             \n `!forest default rcode` \
            //             \n \n  Create default session for 25 minutes that starts in 5 minutes"
            //             );
            const embed1 = new Discord.MessageEmbed()
            .setTitle("Forest Bot Help")
            .setColor(0xF1C40F)
            .addField('Usage',`!forest dur tts rcode tree`)
            .addField('dur',`duration (mins)`)
            .addField(`tts` , `Time to start (mins)`)
            .addField(`rcode` , `Room_Code`)
            .addField(`tree` ,`Tree_Type`)
            .addField('Default Usage','!forest default rcode \n Create default session for 25 minutes that starts in 5 minutes')
            message.channel.send(embed1);
            break;
        
            case 'default':
                var st=5;
                var end=25;
                var tree='Wisteria'
                message.channel.send("Starting Default");
                console.log("Default Case Requested");
                const embed = new Discord.MessageEmbed()
                .setTitle('New Forest Room')
                .setAuthor(message.author.username,message.author.displayAvatarURL())
                .setColor(0xF1C40F)
                .addField('Tree Type',tree)
                .addField('Duration',end+' mins',true)
                .addField('Time to Start',st+' mins',true)
                .addField('Join URL',url+args[2])
                .setThumbnail("https://forestapp.cc/img/icon.png");
                message.channel.send(embed);


                ping_25=`748495378265014322`;
                message.channel.send(`<@&`+ping_25+`>`+` A new tree was planted. Join Now!!`);


                var d = new Date();
                setTimeout(function(){
                    console.log("New Default Session Start");
                    var d = new Date();
                    message.channel.send(`<@&`+ping_25+`>`+` <@`+message.author.id+`>`+"'s Forest Session has Started at "+d.toLocaleTimeString());
                },ms(st+'m'));

                //setTimeout(function())
                endAt= +end + +st;

                setTimeout(function(){
                    console.log("New custom Session End");
                    var d = new Date();
                    message.reply(`<@&`+ping_25+`>`+ ` <@`+message.author.id+`>`+`'s session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
                },ms(endAt+'m'));
                break;

            case 'new':
                const embed2 = new Discord.MessageEmbed()
                .setTitle('New Forest Room')
                .setAuthor(message.author.username,message.author.displayAvatarURL())
                .setColor(0xF1C40F)
                .addField('Tree Type',args[5])
                .addField('Duration',args[2]+' mins',true)
                .addField('Time to Start',args[3]+' mins',true)
                .addField('Join URL',url+args[4])
                .setThumbnail("https://forestapp.cc/img/icon.png");
                message.channel.send(embed2);

                if(args[2]<50){
                    pings=`748495378265014322`;
                }
                else if(args[2]<90){
                    pings=`748495452978151425`;
                }
                else{
                    pings=`748495494535315557`;
                }
                message.channel.send(`<@&`+pings+`>`+` A new tree was planted. Join Now!!`);
                console.log("Custom Case Requested");
    
    
                var d = new Date();
                setTimeout(function(){
                    console.log("New custom case started");
                    var d = new Date();
                    message.channel.send(`<@`+message.author.id+`>`+"'s Forest Session has Started at "+d.toLocaleTimeString());
                },ms(args[3]+'m'));
    
                //setTimeout(function())
                endAt= +args[2] + +args[3];
    
                setTimeout(function(){
                    console.log("New custom case ended");
                    var d = new Date();
                    message.channel.send(`<@&`+pings+`>`+ ` <@`+message.author.id+`>`+`'s session has ended at `+ d.toLocaleTimeString() + `. Create a new one`);
                },ms(endAt+'m'));
                break;
            
            // case 'water':
            // //var lock = fs.readFileSync('./vrb.txt',"utf8");
            //     //message.channel.send("LOCK Value "+lock);
            // //console.log(lock);
            // if(process.env.LOCK_VAL=='0'){
            //     console.log("Hurrah primary");
            //     console.log("Value inside primart"+process.env.LOCK_VAL);
            //             axios.get('https://api.giphy.com/v1/gifs/random?api_key=PjerkTLvieA1ETHxtACEL9IEYvgigXff&tag=drinking water&rating=G')
            //                 .then(function(response){
            //                 console.log(response.data.data.image_original_url);
            //                 message.channel.send(response.data.data.image_original_url);
            //                 }).catch(function(error){
            //                     console.log(error);
            //                     });
            //     //fs.writeFileSync('vrb.txt','1');
            //     process.env.LOCK_VAL='1';
            //     var ref = setInterval(function(){
            //         if(process.env.LOCK_VAL=='0'){
            //             console.log("Cleared");
            //             clearInterval(ref);
            //         }
            //         console.log("Hurrah");
            //         console.log("Value inside sec"+process.env.LOCK_VAL);    
            //             axios.get('https://api.giphy.com/v1/gifs/random?api_key=PjerkTLvieA1ETHxtACEL9IEYvgigXff&tag=drinking water&rating=G')
            //                 .then(function(response){
            //                 console.log(response.data.data.image_original_url);
            //                 message.channel.send(response.data.data.image_original_url);
            //                 }).catch(function(error){
            //                     console.log(error);
            //                     });
                        
            //             //fs.writeFileSync('vrb.txt','1');
            //             //process.env.LOCK_VAL='1'
            //     },ms('10m'));
            //     console.log("Value outside main loop"+process.env.LOCK_VAL);
            //     //process.env.LOCK_VAL='0';
            // }

            // else if(process.env.LOCK_VAL=='1'){
            //     console.log("One Instance running");
            //     message.channel.send("Woah! Don't drink too much. One Instance of the reminder service is already running");
            // }
            
            // break;

            // case 'water-off':
            //     var lock = fs.readFileSync('./vrb.txt',"utf8");
            //     if(process.env.LOCK_VAL=='1'){
            //         console.log('Found Bot running will stop');
            //         //fs.writeFileSync('vrb.txt','0');
            //         process.env.LOCK_VAL='0'
            //         message.channel.send('Water reminder deactivated');
            //     }
            //     else{
            //         message.channel.send("You can't kill something that is dead on the inside. Reminder not set up.");
            //     }
            // break;

            // case 'lockval':
            //     console.log("Current Value:"+process.env.LOCK_VAL);
            //     break;
            
        default:
            message.channel.send("Hey buddy, if you want some help, ask for it. \n `!forest help`");
    }
}
}
});
client.login(process.env.BOT_TOKEN);
