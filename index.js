
const Discord = require("discord.js");
const client = new Discord.Client();
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {

    res.send("selftbot lancer " + "https://blog.artstorefronts.com/wp-content/uploads/2016/03/ASF-Artists-Website-09.gif");
});

app.listen(port);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.guild && msg.author.id !== "317375697700126720") {
        msg.reply("Je te réponds quand je peut (message automatique)")
        msg.delete(1000);
    }
    if (msg.content.startsWith("<@317375697700126720>")) {
        msg.reply('Je te réponds quand je peut (message automatique)');
    }
    else if (msg.content.startsWith("#kikoo")) {
        if (msg.content.replace("#kikoo ", "") === "") {
            msg.reply("`kikoo <Query>`");
        }
        request(
            "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" +
            msg.content.replace("#kikoo ", "") +
            "&type=video&videoDefinition=high&key=AIzaSyDs1NJ5wF-pvykTHh_9_CP4tIrkQzuFRqw",
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
client.login("MzE3Mzc1Njk3NzAwMTI2NzIw.DRsYJw.VW7FV1-uymvMdTIuErGvSsLcrSA");
    
