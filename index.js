
    const Discord = require("discord.js");
    const client = new Discord.Client();
    var express = require("express");
    var app = express();
    var port = process.env.PORT || 3000;
    var MP = false;
    app.get("/", function (req, res) {

        res.send("selftbot lancer2");
    });

    app.listen(port);

    const request = require("request");
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
        if (!msg.guild && msg.author.id !== "317375697700126720") {
            MP = true; {
                msg.reply("Je te réponds quand je peut (message automatique)")
            }
            MP = false; {
                msg.delete(3000);
            }
        } const request = require("request");

        if (msg.content.startsWith("<@317375697700126720>" && msg.author.id !== "317375697700126720")) {
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
        if (!message.guild) return;

        if (message.content === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        message.reply('Channel rejoins avec succes !');
                        connection.playArbitraryInput('https://www.youtube.com/watch?v=H1wcRSPIhvk');
                    })
                    .catch(console.log);
            } else {
                message.reply('Va dans le channel vocal avant !');
            }
        }
    });
    client.login("MzE3Mzc1Njk3NzAwMTI2NzIw.DRsYJw.VW7FV1-uymvMdTIuErGvSsLcrSA");


