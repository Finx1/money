const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("57961659450168324")
setInterval(function() {
channel.send(` لعيون حسين بنصير مليونيرات`);
}, 30)
})
client.login(process.env.BOT_TOKEN);
