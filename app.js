const Discord = require("discord.js");
const request = require("request");
const client = new Discord.Client();
var pre = "$";
client.on("ready", () => {
    // log bot bien lancer
    console.log(`Se connecter comme ${client.user.tag}!`);
    // activiter du bot
    client.user.setGame("\"" + pre + "help\" pour afficher les commandes", 'https://www.twitch.tv/$')
    // message de mise en route du bot
    client.channels.get("413027512122081280").sendMessage({
        embed: {
            title: "Bot ON,prêt a être utiliser !",
            color: 0x58D68D
        }
    });
});

client.on("message", msg => {
    
    // commande afficher l'image de profile
    if (msg.content === "$pp") {
        msg.channel.send({
            embed: {
                color: 0xE74C3C,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "**Votre Photo de profil**",
                url: msg.author.avatarURL,
                image: {
                    url: msg.author.avatarURL
                },

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "©" + client.user.username + "™"
                }
            }
        });
    }

    // commande inviter le bot
    if (msg.content === "$add") {
        msg.channel.send({
            embed: {
                color: 0xFAA61A,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Clique ici pour ajouter " + client.user.username + " a ton serveur",
                url: "https://discordapp.com/oauth2/authorize?client_id=401375124093141013&scope=bot&permissions=8",

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "©" + client.user.username + "™"
                }
            }
        });
    }
    

    // commande info serv
    if (msg.content === '$serv') {
        msg.channel.send({
            embed: {
                color: 0x566573,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Informations du serveur **" + msg.guild.name + "**",
                color: 0x0FFF00,
                fields: [
                    {
                        name: "Nombres de salont dans le serveur **" + msg.guild.name + "**.",
                        value: "Il y a actuellement " + "**" + msg.guild.channels.size + "** " + "channels dans **" + msg.guild.name + "**."
                    },
                    {
                        name: "Nombres de Membres dans le Serveur **" + msg.guild.name + "**.",
                        value: "Il y a exactement " + "**" + msg.guild.members.size + "** " + "membres dans ce serveur."
                    },
                    {
                        name: "Date de créations du serveur **" + msg.guild.name + "**.",
                        value: "Le serveur **" + msg.guild.name + "** " + "a été crée le: " + "**" + msg.guild.createdAt + "**."
                    },
                    {
                        name: "Nombres de serveur où-es " + client.user.username,
                        value: "Je suis present dans "  + "**"  + client.guilds.size +  "**"  + " serveurs."
                    },
                    {
                        name: "L'administrateur du serveur **" + msg.guild.name + "**" + " ès " + "**" + msg.guild.owner.user.username + "#" + msg.guild.owner.user.discriminator + "**.",
                        value: "**" + msg.guild.owner.user.username + "#" + msg.guild.owner.user.discriminator + "** ès une personne trop puissante respecter la."
                    },
                    //{
                       // name: "Nombres de messages envoyez par " + client.user.username,
                        //value: "**" + "%s message" + "** messages envoyez par le bot"
                    //},
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: client.user.username
                }
            }
        });
    }else if (msg.content.startsWith("$y")) {
    if (msg.content.replace("$y ", "") === "") {
      msg.reply("`kikoo <Query>`");
    }
    request(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" +
        msg.content.replace("$y ", "") +
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


    // commande help
    if (msg.content === "$help") {
        msg.channel.send({
            embed: {
                color: 0x566573,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Rejoindre le serveur officiel du BOT",
                url: "https://discord.gg/CBCN5S9",
                description: "les commande du bot",
                fields: [
                    {
                        name: "commande",
                        value: pre + "add," + pre + "serv," + pre + "help," + pre + "pp"
                    },
                    {
                        name: "PS",
                        value: "Rejoignez le serveur Officiel du BOT pour plus d'aide."
                    },
                    {
                        name: "Merci",
                        value: "Bonne journée"
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: client.user.username
                }
            }
        });
    }
    
    // fin du code message
});
// Membre qui rejoins le serveur
client.on("guildMemberAdd", member => {
    var role = member.guild.roles.find("name", "Visiteurs");
    client.channels.get("402120240516825092"]).send({
        embed: {
            title: "Un nouveaux Visiteurs sont nom, @" + member.user.username + ".",
            color: 0x0FFF00
        }
    });
    member.addRole(role);
});

// Membre qui quite le Serveur
client.on("guildMemberRemove", member => {
    client.channels.get("402120240516825092").send({
        embed: {
            title: member.user.username + ", A quitter le Serveur.",
            color: 0xFF0000
        }
    });
});
// token du bot
client.login(process.env.TOKEN);
