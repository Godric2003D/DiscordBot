require("dotenv").config();
const Discord = require('discord.js');
const math = require('mathjs');


const bot = new Discord.Client();
const { Player } = require("discord-player");
const player = new Player(bot);
bot.player = player;

const prefix = '-';
const ytdl = require("ytdl-core");
const fs = require('fs');


bot.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var servers = {};
for (const file of commandFiles) {

  const command = require(`./commands/${file}`);

  bot.command.set(command.name, command);

}

bot.once('ready', () => {
  console.log('GodricBot at your service!');
});




bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    bot.command.get('ping').execute(bot, message, args,Discord);
  }
  if (command === 'samadrita') {
    message.channel.send('essshhhhhhhh!');
  }
  if (command === 'samudra') {
    message.channel.send('constipated funny face');
  }
  if (command === 'nabarun') {
    message.channel.send('daante poka');
  }
  if (command === 'prita') {
    message.channel.send('chagollll');
  }
  if (command === 'debayan') {
    message.channel.send('GAAR MERE DEBOOO');
  }
  if (command === 'hi') {
     
    message.reply(`Hello !`);
  }
  if (command === 'bye') {
    message.reply('Until next time!');
  }
  if (command === 'help') {
    bot.command.get('help').execute(message, args, Discord);
  }
  if (command === 'avatar') {
    // Send the user's avatar URL
    bot.command.get('avatar').execute( bot,message, args,Discord);
  }
  
  



});
bot.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");


  switch (args[0]) {
    case 'kick':
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don\'t have required permissions")
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);

        if (member) {
          member.kick('Besh korechi bar korechi').then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            message.reply(`I was unable to kick ${user.tag}`);
            console.log(err);

          });

        } else {
          message.reply("That user isn\'t in this server")
        }


      } else {
        message.reply('You need to specify a person in this server')
      }
      break;
  }
});
bot.on('message', message => {

  if(!message.content.startsWith(prefix)) return;


  const args = message.content.split(/[\ ]/g);
  const cmd = args[0].slice(1).toLowerCase();

  switch (cmd) {
    
    case 'calc':
      if(!args[1]) return message.reply('Please input a calculation.');

      let resp;
      try {
        resp = math.evaluate(args.slice(1).join(''));
      } catch (e) {
        console.log(e);
      }

      const membed = new Discord.MessageEmbed()
        .setColor('#ffaa00')
        .setTitle('Prime')
        .setImage('https://wallpapercave.com/wp/wp2497493.jpg')
        .addField('Input', `\`\`\`css\n${args.slice(1).join(' ')}\`\`\``)
        .addField('Output', `\`\`\`css\n${resp}\`\`\``)
        .setFooter('Calculator')

      message.channel.send(membed);
      break;
  }
});
bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'clear') {
    bot.command.get('clear').execute(bot, message, args);
  }
});

bot.login(process.env.token);



