const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'h';

client.once('ready', () => {
    console.log('your bot name is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ellothere'){
        message.channel.send('general kenobi');
    }
});

client.login('NzQyNTA5MjkyMzQ2NjcxMjI1.XzHJqg.7ZQnYLi0IlEHhkNMWGGZ-VuhO6E');