const Discord = require("discord.js");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config();
}

const PREFIX = "momenzi!";

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands/index");
const puzFacts = require("./data/facts.json");

Object.keys(botCommands).map((key) => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on("ready", () =>{
    console.info(`Logged in as ${bot.user.tag}`);
    setInterval (
    function () 
    {
        const embed = new Discord.MessageEmbed()
        .setColor(0xef735b)
        .setAuthor('Da li ste znali ?', 'http://hungsenghuat.com/images/9a0f77c930b656450e05d806b41a2377-2.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/777717834683514880/779821832051228722/BRX.gif')
        .addField(puzFacts[Math.floor(Math.random() * [puzFacts.length])], '\u200B')
            bot.channels.cache.get(`779719004817719339`).send(embed);
    }, 10 * 360000);
});


bot.on("guildCreate", (guild) =>{
    console.info(`Add to new server! ${guild.name}`)
});
bot.on("message", (msg) => {
    if (msg.author.bot) return;

    const args = msg.content.split(/ +/);
    const firstWord = args.shift().toLowerCase();
    if (firstWord == PREFIX) {
        const command = args.length > 0 ? args.shift().toLowerCase() : "fact";

        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            msg.reply("Myau koristi help.");
        }
    }
});
bot.login("NTY4OTMzMTIzODc5MDc1ODU4.XLpSQg.Y910RASOscPbqU4JQ8-vNZlJxaM");
