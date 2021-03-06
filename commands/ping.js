module.exports = {
    name: "ping",
    category: "info",
  
    description: "Returns latency and API ping",
    timeout: 10000,
    execute: async (bot, message, args, Discord) => {
      message.channel.send(`🏓 Pinging....`).then((msg) => {
        const _ = new Discord.MessageEmbed()
          .setTitle("Pong!")
          .setDescription(
            `🏓 Pong!\nLatency is ${Math.floor(
              msg.createdTimestamp - message.createdTimestamp
            )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
          )
          .setColor("RANDOM");
        msg.edit(_);
        msg.edit("\u200B");
      });
    },
  };