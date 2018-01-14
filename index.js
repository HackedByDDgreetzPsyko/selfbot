const Discord = require("discord.js");
const client = new Discord.Client();
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("selftbot lancer");
});

app.listen(port);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith("<@317375697700126720>")) {
    msg.reply('Je te réponds quand je peut (message automatique)');
  }
    if (!msg.guild) msg.reply("Je te réponds quand je peut (message automatique)"); {
    
});

client.login("MzE3Mzc1Njk3NzAwMTI2NzIw.DRsYJw.VW7FV1-uymvMdTIuErGvSsLcrSA");
