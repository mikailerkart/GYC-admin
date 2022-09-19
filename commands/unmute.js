
module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('1021393319210799114')) /*mute yetkili rol */ return message.reply("Mute atmak için yetkin yok.")

    if(!args[0]) return message.reply("Bir kişiyi etiket atman gerekiyor.");

    var muteUser = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);

    if(!muteUser) return message.reply("kullanci bulunamiyor");

    let muteRole = message.guild.roles.cache.get("998229543062077530"); // muted rol

    if(!muteRole) return message.channel.send("Muted rol ayarlanmamıs, lütfen ayarlayınız.");

    if (muteUser.roles.cache.some(role => role.name === "muted")) {
        message.channel.send("Bu kişi de zaten muted rolü yok");
    }   else {
            muteUser.roles.remove(muteRole.id)
            message.channel.send(`${muteUser} susturulma bitti.`)

        }


}

module.exports.help = {
name: "unmute",
category: "general",
description: "Mute rolu geri almak"
}