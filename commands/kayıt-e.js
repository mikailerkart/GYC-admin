const discord = require("discord.js");
const db = require("nrc.db");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

   let kayıt_ytk        = db.fetch(`kayıt_yetkili_${message.guild.id}`)
   let kayıt_üye    = db.fetch(`kayıt_üye_rol_${message.guild.id}`)
   let kayıt_erkek      = db.fetch(`kayıt_erkek_rol_${message.guild.id}`)
   let kayıt_kiz        = db.fetch(`kayıt_kız_rol_${message.guild.id}`)
   let kayıtsız         = db.fetch(`kayıt_kayıtsız_rol_${message.guild.id}`)
   let kayıt_log        = db.fetch(`kayıt_kayıt_log_${message.guild.id}`)
   let kayıt_kanal      = db.fetch(`kayıt_kayıt_kanal_${message.guild.id}`)


    if(!kayıt_ytk) return message.channel.send(`**Kayıt yetkilisi** rolü ayarlanmamış`)
    if(!message.member.roles.cache.has(kayıt_ytk)) return message.channel.send(`Bu komutu sadece **Register staff** yetkisi olanlar kulllanabilir`)
    if(!kayıt_üye) return message.channel.send(`**Üye** rolü ayarlanmamış`)
    if(!kayıt_erkek) return message.channel.send(`**Erkek** rolü ayarlanmamış`)
    if(!kayıt_kiz) return message.channel.send(`**Kız** rolü ayarlanmamış`)
    if(!kayıtsız) return message.channel.send(`**Kayıtsız** rolü ayarlanmamış`)
    if(!kayıt_log) return message.channel.send(`**Kayıt log** kanalı ayarlanmamış`)
    if(!kayıt_kanal) return message.channel.send(`**Kayit kanal** kanalı ayarlanmamış`)

    var member = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    var isim = args[1]
    var yaş = args [2]

    if(!member) return message.channel.send(`Lütfen kayıt edilecek kişiyi etiketleyiniz.`)
    if(!isim) return message.channel.send(`Lütfen isim belirtiniz.`)
    if(!yaş) return message.channel.send(`Lütfen yaş belirtiniz.`)

    let kayıtcı = db.fetch(`kayıt_yetkilisi_${message.guild.id}_${message.author.id}`)
    if(!kayıtcı) db.set(`kayıt_yetkilisi_${message.guild.id}_${message.author.id}`, 0)
    db.add(`kayıt_yetkilisi_${message.guild.id}_${message.author.id}`, 1)


    let üye = message.guild.members.cache.get(member.id)

    üye.roles.add(kayıt_erkek)
    üye.roles.add(kayıt_üye)
    üye.roles.remove(kayıtsız)

    await üye.setNickname(`ᴳʸᶜ ${isim} | ${yaş}`)

    let kayıtları = db.fetch(`kayıt_yetkilisi_${message.guild.id}_${message.author.id}`)
    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
        Kayıt olan üye: ${member}
        
        Kayıt yetkilisinin bilgileri:
        Kayıt yapan kişi : ${message.author}
        Yaptıği kayıtlar : **${kayıtları}** 
        
        `)

    message.channel.send({ embeds: [botEmbed] })
    client.channels.cache.get(kayıt_log).send({ embeds: [botEmbed] })

}


module.exports.help = {
    name: "e",
    category: "general",
    description: "Erkek kayıt etme komutu"
}