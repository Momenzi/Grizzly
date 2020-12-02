const Discord = require("discord.js");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config();
}

const PREFIX = "+gr";

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands/index");
const puzFacts = require("./data/facts.json");
const citatiFacts = require("./data/citati.json");

Object.keys(botCommands).map((key) => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on("ready", () =>{
    console.info(`Logged in as ${bot.user.tag}`);
    setInterval ( // zanimljivosti
    function () 
    {
        const embed = new Discord.MessageEmbed()
        .setColor(0xef735b)
        .setAuthor('Da li ste znali ?', 'http://hungsenghuat.com/images/9a0f77c930b656450e05d806b41a2377-2.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/777717834683514880/779821832051228722/BRX.gif')
        .addField(puzFacts[Math.floor(Math.random() * [puzFacts.length])], '\u200B')
            bot.channels.cache.get(`781588187582562368`).send(embed);
    }, 10 * 360000);
    setInterval (
        function () 
        {
            const embed = new Discord.MessageEmbed()
            .setColor(0x1ccfea)
            .setAuthor('ʙʟᴀᴄᴋ ʀᴏꜱᴇ 🌹', 'http://www.clipartbest.com/cliparts/dc7/L4n/dc7L4ndoi.png')
            .setThumbnail('https://i.ibb.co/VqnzQW2/b58e9bec588a860e49b2a1eb9222b65e-blooming-rose-stem-flat-icon-by-vexels.png')
            .addField(citatiFacts[Math.floor(Math.random() * [citatiFacts.length])], '\u200B')
                bot.channels.cache.get(`781588187582562368`).send(embed);
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
            msg.reply("+gr help");
        }
    }
});
bot.login("NzgxNTg2MDI1MzIyOTA1NjEw.X7_ytQ.fsLKOwlKfZIY37Bbd9CCCs3_vqI");
