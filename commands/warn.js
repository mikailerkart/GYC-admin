const fs = require("fs");
const discord = require("discord.js")

module.exports.run = async (client, message, args) => {


    if(!message.member.roles.cache.has('1019303833870028921')) return message.reply("Warn atmak için yetkin yok.")

    if(!args[0]) return message.reply("Bir kişiyi etiket atman gerekiyor.");

    if(!args[1]) return message.reply("Bir sebep berirtmen gerekiyor.")

    var warnUser = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);

    var reason = args.slice(1).join(" ");

    if(!warnUser) return message.reply("kullancı bulunamiyor");

    const warns = JSON.parse(fs.readFileSync("./warnings.json", "UTF8"));

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    }

    warns[warnUser.id].warns++;


    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Warned:** ${warnUser.user.username} (${warnUser.id})
            **Warned by:** ${message.author}
            **Reason: ** ${reason}`)
        .addField("Warnings", warns[warnUser.id].warns.toString());

    const channel = message.member.guild.channels.cache.get("1019312760347181156") // uyari embed gelecek olan yer

    if(!channel) return;

    channel.send({embeds: [embed]}) && warnUser.send({embeds: [embed]}) && message.channel.send(`uyarı atılmıştır.`)

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);

    });



}

module.exports.help = {
    name: "warn",
    category: "general",
    description: "Warn atmak"
}