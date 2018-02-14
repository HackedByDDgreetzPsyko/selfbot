const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const client = new Discord.Client();
const Music = require('discord.js-musicbot-addon');
const settings = require('./settings.json');
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var MP = false;
app.get("/", function(req, res) {
  res.send("selftbot lancer2");
});

app.listen(port);

const request = require("request");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content === ";pp") {
        msg.channel.send({
            embed: {
                color: 2550255,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "**Votre Photo de profil**",
                url: msg.author.avatarURL,
                image: {
                    url: username.tag.avatarURL
                },

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Client"
                }
            }
        });
    }
   else if (msg.content.startsWith("#kikoo")) {
    if (msg.content.replace("#kikoo ", "") === "") {
      msg.reply("`kikoo <Query>`");
    }
    request(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" +
        msg.content.replace("#kikoo ", "") +
        "&type=video&videoDefinition=high&key=AIzaSyB-IuppTwP4EnCr_O6tN-4Unmz2eQWfakI",
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          msg.reply("L'API de Google ne fonctionne pas lol.");
        } else {
          body = JSON.parse(body);
          if (body.pageInfo.totalResults === 0) {
            msg.reply("Sans résultats lol."); // nice french
          } else {
            msg.reply(
              "La première vidéo: http://youtu.be/" + body.items[0].id.videoId
            );
          }
        }
      }
    );
  }
});
client.login(process.env.TOKEN);
