const Discord = require("discord.js");
exports.run = (client, msg) => {
  msg.channel.sendMessage("Ping?")
    .then((message) => {
	var embed = new Discord.RichEmbed();
      message.edit({ embed: {
color: 3447003,
author: {
	name: `Ping!`,
	icon_url: client.user.avatarURL
},
title: '',
url: '',
description: '',
	fields: [
{

name: `Ping?`,
value:`Pong! (took: ${message.createdTimestamp - msg.createdTimestamp}ms)`,
inline: true
}
],
timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: '© ViiRal'
}
}})
})};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "ping",
  description: "Ping/Pong command. I wonder what this does? /sarcasm",
  usage: "",
  usageDelim: "",
};
