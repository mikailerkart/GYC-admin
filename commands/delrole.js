const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

   if(!message.member.roles.cache.has("1021393319210799114")) return message.reply("Rolleri yönet yetkin yok.")

   let user = message.mentions.users.first() || await message.guild.members.cache.get(args[0]);
   let role = message.mentions.roles.first();

   if(!user) return message.reply("Lütfen rol alınacak kişiyi belirtiniz.")
   if(!role) return message.reply("Lütfen alınacak rolü belirtiniz.")

    message.guild.members.cache.get(user.id).roles.remove(role)

    const embed = new discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`${user}, Nickli kişiyi ${role} isimli rol alındı.`)


    message.reply({ embeds: [embed]});

}

module.exports.help = {
    name: "delrole",
    category: "general",
    description: "rol alır"
}