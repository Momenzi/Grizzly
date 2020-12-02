const citatiFacts = require("../../data/citati.json");

module.exports = {
    name: "citati",
    description: "jebo te allah dragi mali od kilu",
    execute(msg, args) 
    {
        msg.channel.send(
        `> ${citatiFacts[Math.floor(Math.random() * [citatiFacts.length])]}`);
    },
};