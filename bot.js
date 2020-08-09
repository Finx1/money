const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("741953758614913075")
setInterval(function() {
channel.send(` لعيون ماجيكو بنصير مليونيرات`);
}, 30)
})

const Discord = require('discord.js');
const client2 = new Discord.Client();
console.log("Scrpit By Dream");


client2.on("ready", () => {
let channel =     client2.channels.get("741953758614913075")
setInterval(function() {
channel.send(` لعيون ماجيكو بنصير مليونيرات`);
}, 30)
})
client2.login(process.env.BOT_TOKEN2);
