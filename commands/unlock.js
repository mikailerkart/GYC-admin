module.exports.run = async (bot, message, args) => {

    if(!message.member.permissions.has('BAN_MEMBERS')) /*lock yetkili rol */ return message.reply("Unlock atmak için yetkin yok.")

    await message.channel.permissionOverwrites.set([

        {
            id: message.guild.roles.cache.find(r => r.name === "@everyone").id,
            allow: ["SEND_MESSAGES"]
        }

    ]);

    return message.channel.send("Kanal açildi.");
}

module.exports.help = {
    name: "unlock",
    category: "general",
    description: "Kanali kilitleme kapatma"
    }