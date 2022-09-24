const discord = require("discord.js");
const db = require("nrc.db")
const config = require("../config.json")


module.exports.run = async (client, message, args) => {



    let kayıt_ytk        = db.fetch(`kayıt_yetkili_${message.guild.id}`)
    let kayıt_üye    = db.fetch(`kayıt_üye_rol_${message.guild.id}`)
    let kayıt_erkek      = db.fetch(`kayıt_erkek_rol_${message.guild.id}`)
    let kayıt_kız        = db.fetch(`kayıt_kız_rol_${message.guild.id}`)
    let kayıtsız         = db.fetch(`kayıt_kayıtsız_rol_${message.guild.id}`)
    let kayıt_log        = db.fetch(`kayıt_kayıt_log_${message.guild.id}`)
    let kayıt_kanal      = db.fetch(`kayıt_kayıt_kanal_${message.guild.id}`)

    if(!kayıt_ytk) return message.channel.send(`**Kayit yetkilisi** rolü ayarlanmamiş`)
    if(!message.member.roles.cache.has(kayıt_ytk)) return message.channel.send(`Bu komutu sadece **Register staff** yetkisi olanlar kulllanabilir`)
    if(!kayıt_üye) return message.channel.send(`**Ögrenci** rolü ayarlanmamış`)
    if(!kayıt_erkek) return message.channel.send(`**Erkek** rolü ayarlanmamış`)
    if(!kayıt_kız) return message.channel.send(`**Kız** rolü ayarlanmamış`)
    if(!kayıtsız) return message.channel.send(`**Kayıtsız** rolü ayarlanmamış`)
    if(!kayıt_log) return message.channel.send(`**Kayıt log** kanalı ayarlanmamış`)
    if(!kayıt_kanal) return message.channel.send(`**Kayıt kanal** kanalı ayarlanmamış`)


    var member = message.mentions.users.first() || message.author.id
    let kayit = db.fetch(`kayıt_yetkilisi_${message.guild.id}_${member}`)

    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
        Yaptıği kayıt sayısı: **${kayit ? kayit : "0"}**

        `)
    message.channel.send({ embeds: [botEmbed] })


},

module.exports.help = {
    name: "kayıt-stat",
    category: "general",
    description: "Kayıt-stat açar"
}