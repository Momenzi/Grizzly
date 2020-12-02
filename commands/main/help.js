const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of the commands available",
    execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor("#fc3a3a")
            .setURL('https://github.com/Momenzi')
            .setTitle("All Grizzly available commands")
            .setThumbnail("https://i.ibb.co/h7LPZyK/download.png")
            .setAuthor('Grizzly', 'https://i.ibb.co/h7LPZyK/download.png', 'https://github.com/Momenzi')
            .addFields( 
                { 
                    name: "+gr help",value: "Shows all of the commands available", inline: true,
                },
                { 
                    name: "+gr quiz",value: "Start true/false quiz", inline: true,
                },
                { 
                    name: "+gr darkhumor", value: "Sends a random picture", inline: true,
                })
            .setFooter(
                "𝑮𝒓𝒊𝒛𝒛𝒍𝒚 created by Momenzi#9999 (github.com/Momenzi)",
                "https://avatars3.githubusercontent.com/u/16260069?s=460&u=54210fea320ac98d8fe315e41a239f4de886cf97&v=4"
            );

        msg.channel.send(helpEmbed);
    },
};
