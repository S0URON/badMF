const Discord = require('discord.js');
//const { includes, charAt } = require('ffmpeg-static');
const config = require('./config.json');
// create a new Discord client
const client = new Discord.Client();
const exampleEmbed = new Discord.MessageEmbed();

const sounds = ['./sounds/say-what.mp3', './sounds/see-it-negro.mp3', './sounds/smart-mf.mp3', './sounds/stfu.mp3', './sounds/does-he-look-like-a-bitch.mp3', './sounds/had-say.mp3', './sounds/get-the-fuck-out-my-face.mp3', './sounds/fuck-you.mp3', './sounds/hang-in-there-baby.mp3', './sounds/blessed.mp3', './sounds/english-in-what.mp3', './sounds/mother-fucker-do-that-shit-to-me.mp3', './sounds/bad-mother-fucker.mp3', './sounds/ha-ha-ha.mp3', './sounds/english-mother-fucker-do-you-speak-it.mp3'];

const aspectServChannels = {

    valorant1: '766315783269646406',
    valorant2: '773259140998889511',
    amongus: '759516683965562881',
    general: '705191879972618373',
    dj: '714913613315309690'


}

const testServerChannels = {

    general: '775074767606644759',
    voice1: '776120931629924373'

}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('bad motherfucker Ready!');
});

//function that plays sounds
async function play(sound, voiceChannel) {

    const connection = await voiceChannel.join();
    if (sound == 'random')
        connection.play(sounds[random(sounds.length)]);
    else
        connection.play(sound);


}

let channel;

//where the magic happens
client.on('message', message => {

    if (message.content.includes('./') && message.content.indexOf('./') == 0) {
        console.log(message.content + ' - ' + message.guild.name + ' - ' + message.channel.name);

        if (message.content.includes('-c')) {
            
                if (message.content.includes('valorant1'))
                    channel = client.channels.cache.get(aspectServChannels.valorant1);
                   
               else if (message.content.includes('valorant2'))
                    channel = client.channels.cache.get(aspectServChannels.valorant2);
                  
               else if (message.content.includes('general'))
                    channel = client.channels.cache.get(aspectServChannels.general);
                   
               else if (message.content.includes('dj'))
                    channel = client.channels.cache.get(aspectServChannels.dj);
                    
                else if (message.content.includes('amongus'))
                    channel = client.channels.cache.get(aspectServChannels.amongus);
                    
               else if (message.content.includes('voice1'))
                    channel = client.channels.cache.get(testServerChannels.voice1);
                    
                else if (message.content.includes('gnrl'))
                    channel = client.channels.cache.get(testServerChannels.general);
        } else {
            channel = message.member.voice.channel;
        }




        if (message.content.includes("say hi")) {

            message.channel.send('hello wassup');

        } else if (message.content.includes("send meme")) {

            exampleEmbed.setTitle('here u go negro');

            message.channel.send(exampleEmbed.setImage('https://memegenerator.net/img/instances/65026448.jpg'));

        } else if (channel) {
            if (message.content.includes('mf') || message.content == "say mother fucker") {
                play('random',channel);

            } else if (message.content.includes('haha') || message.content.includes('ha ha'))

                play('./sounds/ha-ha-ha.mp3',channel);
            else if (message.content.includes('swa'))
                play('./sounds/english-in-what.mp3',channel);
            else if (message.content.includes('bad'))
                play('./sounds/mother-fucker-do-that-shit-to-me.mp3',channel);
            else if (message.content.includes('blessed'))
                play('./sounds/blessed.mp3',channel);
            else if (message.content.includes('dw'))
                play('./sounds/hang-in-there-baby.mp3',channel);
            else if (message.content.includes('foot')) {
                play('./sounds/foot-massages-pt1.mp3',channel);
               //play('./sounds/foot-massages-pt2.mp3',channel);
            }
            else if (message.content.includes('fuck you') || message.content.includes('f u'))
                play('./sounds/fuck-you.mp3',channel);
            else if (message.content.includes('weak'))
                play('./sounds/had-say.mp3',channel);
            else if (message.content.includes('gtfo'))
                play('./sounds/get-the-fuck-out-my-face.mp3',channel);
            else if (message.content.includes('wut'))
                play('./sounds/say-what.mp3',channel);
            else if (message.content.includes('stfu'))
                play('./sounds/stfu.mp3',channel);
            else if (message.content.includes('smart'))
                play('./sounds/smart-mf.mp3',channel);
            else if (message.content.includes('seeit'))
                play('./sounds/see-it-negro.mp3',channel);
            else if (message.content.includes('urmomgay'))
                play('./sounds/your-mom-gay.mp3',channel);
            else if (message.content.includes('eng'))
                play('./sounds/english-mother-fucker-do-you-speak-it.mp3',channel);
            else if (message.content.includes('bch'))
                play('./sounds/does-he-look-like-a-bitch.mp3',channel);

            else if (message.content.includes('dc')) {
                if(message.guild.voice.channel){
                    message.guild.voice.channel.leave();
                    message.channel.send('Bad mutherfuker out');
                }else
                message.channel.send('motherfucker i m already out');
             
            }

        } else if (message.content.includes('dc')) {
            if(message.guild.voice.channel){
                message.guild.voice.channel.leave();
                message.channel.send('Bad mutherfuker out');
            }else
            message.channel.send('motherfucker i m already out');
        } else {
            message.channel.send('it s either u re not in a voice channel, and didn t specify one or sth must have went wrong');
        }
    }

});



function random(array) {

    return Math.floor(Math.random() * Math.floor(array));
}





// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);

