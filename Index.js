const Discord = require('discord.js');

const client = new Discord.Client({ intents: Object.keys(Discord.Intents.FLAGS)});

const config = require("./config.json");

client.on("ready", () => {
    console.log(`לא משנה מה שבא לך`);

    client.user.setActivity(`סטטוס`);
});



client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
//message simple
    if (command === "hi") {
        message.reply("hi bro")
    }
///message embed
if (command === "embed") {
        const embed = new MessageEmbed()
            .setTitle("test")
            .setDescription("test")
            .setTimestamp()
        message.channel.send({ embeds: [embed] })
    }
});

client.login(config.token)
