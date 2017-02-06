const Discord = require("discord.js");
exports.run = (client, msg) => {
  function translateDate(date) {
      const Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const Days = ["Sat", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return Days[date.getUTCDay()] + ", " + date.getUTCDate() + " " + Months[date.getUTCMonth()] + " " + date.getUTCFullYear() + " at " + date.getUTCHours() + ":" + zeros(date.getUTCMinutes(), 2) + ":" + zeros(date.getUTCSeconds(), 2) + "." + zeros(date.getUTCMilliseconds(), 3);
  }

  function zeros(val, num) {
      while (val.toString().length < num) {
          val = "0" + val;
      }
      return val;
  }

  function checkDays(date) {
      var now = new Date();
      var diff = now.getTime() - date.getTime();
      var days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  };
  var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
          var region = {
              "brazil": "Brazil",
              "eu-central": "Central Europe",
              "singapore": "Singapore",
              "us-central": "U.S. Central",
              "sydney": "Sydney",
              "us-east": "U.S. East",
              "us-south": "U.S. South",
              "us-west": "U.S. West",
              "eu-west": "Western Europe",
              "vip-us-east": "VIP U.S. East",
              "london": "London",
              "amsterdam": "Amsterdam",
              "hongkong": "Hong Kong"
          };
var embed = new Discord.RichEmbed();
    message.channel.sendMessage({embed:{
      color: 3447003,
      author: {
        name: `${message.guild.name} | ${message.guild.id}`,
        icon_url: message.guild.iconURL
      },
      fields: [
{
        name: 'Created',
        value: `${message.guild.createdAt.toString().substr(0, 15)}, ${checkDays(message.guild.createdAt)}`
},
{
  name: "Owner",
  value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
},
{
  name: "Region",
  value: region[message.guild.region]
},
{
  name: "Members",
  value: message.guild.memberCount
},
{
  name: "Roles",
  value: message.guild.roles.size
},
{
  name: "Channels",
  value: message.guild.channels.size
},
{
  name: "Verification Level",
  value: verifLevels[message.guild.verificationLevel]
},
{
  name: "Default Channel",
  value: message.guild.defaultChannel
}
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: '© ViiRal'
  }
}})}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["serverinfo", "sinfo"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "Sinfo",
  description: "displays server info",
  usage: "",
  usageDelim: ""
};
