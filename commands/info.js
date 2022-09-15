const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setAuthor("GYC admin", 'https://i.imgur.com/C0rnWy1.png')
        .setColor("#0099FF")
        .addFields(
            {name: "Version", value: "1.0.0"},
            {name: "Creator", value: "Edwins#1025"},
        )
        .setTimestamp();

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "Bot bilgilerini açar"
}