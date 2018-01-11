const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Mzk4Mjc5MDE1Nzc5MTM5NTg3.DTkPJA.1PNb5ohT3T8bF0R9MAYZRXcarz8');