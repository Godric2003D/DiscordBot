module.exports= {
    name: 'help',
    description: "This is an embed!",
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#98623C')
        .setTitle('Commands')
        .setDescription('This is Godric Bot help section. ')
        
        .addFields(
            {name: 'For Calculator', value:`-calc`, inline: true},
            {name: 'For deleting messages', value:'-clear'},
            {name: 'To check your ping', value:'-ping'},
            {name: 'To view your or somebody else\'s Avatar', value:'-avatar'}
        )
        
        .setImage('https://wallpaperaccess.com/full/1209274.jpg')
        .setAuthor('Debayan')
        .setFooter('Thanks for being a part of this aawesome bot')
        .setFooter('Cute cat i got here btw..lol..xDDDDDDDDDDDDDDD,Thanks for being a part of this awesome bot')
        
        message.channel.send(newEmbed);
    }

}