const puzFacts = require("../../data/facts.json");

module.exports = {
    name: "fact",
    description: "jebo te allah dragi mali od kilu",
    execute(msg, args) 
    {
        msg.channel.send(
        `> **Da li ste znali?**\n${puzFacts[Math.floor(Math.random() * [puzFacts.length])]}`);
    },
};