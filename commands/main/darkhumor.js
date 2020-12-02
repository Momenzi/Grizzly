const Discord = require("discord.js");

const darkCapt = require("../../data/darkCapt.json");
const darkHumorPic = require("../../data/darkpic.json");
const { description } = require("./quiz");

module.exports = 
{
    name: "darkhumor",
    description: "Sekcija za darkhumor",
    execute(msg, args) 
    {
        const darkEmbed = new Discord.MessageEmbed()
        .setColor("#ef7962")
        .setTitle(
            darkCapt[Math.floor(Math.random() * [darkCapt.length])]
        )
        .setImage(
            darkHumorPic[Math.floor(Math.random() * [darkCapt.length])]
        );
        msg.channel.send(darkEmbed);    
    },
}