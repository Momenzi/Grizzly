const zanimljivostiPitanja = require("../../data/questions");
const Discord = require("discord.js");

function convertReactionToBoolean(reactionEmoji) {
    if (reactionEmoji === "✅") return true;
    else if (reactionEmoji === "❎") return false;
    return undefined;
}

module.exports = {
    name: "quiz",
    description: "Asks a true/false question",
    execute(msg, args) {
        const originalAuthor = msg.author.id;
        const quizQuestion = zanimljivostiPitanja[Math.floor(Math.random() * [zanimljivostiPitanja.length])];
        const reactionEmojis = ["✅", "❎"];

        const filter = (reaction, user) => {
            return (!user.bot && user.id === originalAuthor && reactionEmojis.includes(reaction.emoji.name));
        };

        const quizEmbed = new Discord.MessageEmbed()
            .setColor("#66e23d")
            .setTitle("🤔 Tacno ili netacno ?")
            .setDescription(quizQuestion.question)
            .addFields(
                { name: "\u200B", value: "Tacno: ✅", inline: true },
                { name: "\u200B", value: "Netacno: ❎", inline: true }
            );

        const tacticalEmbed = new Discord.MessageEmbed()
            .setColor("#66e23d")
            .setTitle("💚")
            .setImage(
                "https://i.ibb.co/hdywkvh/16260069.jpg"
            );

        msg.channel

            .send(quizEmbed)
            .then((msgQuestion) => {
                msgQuestion.react("✅");
                msgQuestion.react("❎");
                msgQuestion
                    .awaitReactions(filter, {
                        max: 1,
                        time: 7500,
                        errors: ["time"],
                    })
                    .then((collected) => {

                        answer = convertReactionToBoolean(collected.firstKey());
                        if (answer === quizQuestion.answer) 
                        {
                            msg.reply(`Cestitke! Vas odgovor je **${quizQuestion.answer}** `);
                        } 
                        else 
                        {
                            msg.reply(`Zao nam je! Vas odgovor je ${answer}. Tacan odgovor je **${quizQuestion.answer}**`);
                        }
                    })
                    .catch((collected) => {
                        msg.reply(`Zao nam je! Vase vrijeme da odgovorite na pitanje je isteklo. Tacan odgovor je **${quizQuestion.answer}**`);
                    });
            })
            .catch(() => console.error("ERROR: 004 > dodavanje react. u poruku"));
    },
};