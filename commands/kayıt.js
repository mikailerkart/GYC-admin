const discord = require("discord.js");
const db = require("nrc.db");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('1021393319210799114')) /*üst yönetim yetkili rol */ return message.reply("Owner yetkin yok.");

    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
            **${config.prefix}kayıt kayıt-yetkilisı** Kayit yetkilisi rolünü ayarlarsın.
            **${config.prefix}kayıt üye-rol**: üye rolünü ayarlarsın.
            **${config.prefix}kayıt erkek-rol**: Erkek üye rolünü ayarlarsın.
            **${config.prefix}kayıt kız-rol**: Kız üye rolünü ayarlarsın.
            **${config.prefix}kayıt kayıtsız-rol**: Kayıtsız rolünü ayarlarsın.
            **${config.prefix}kayıt kayıt-log**: kayıt log kanalını ayarlarsın.
            **${config.prefix}kayıt kayıt-kanal**: Kayıt kanalını ayarlarsın.
            `)

        if(!args[0]) return message.channel.send({embeds: [botEmbed]})

        if(args[0] === "kayıt-yetkilisi"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayıt yetkilisi** rolünü etiketleyiniz.`)
        db.set(`kayıt_yetkili_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayıt Yetkilisi** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "üye-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Üye** rolünü etiketleyiniz.`)
        db.set(`kayıt_üye_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **üye** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "erkek-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Erkek** rolünü etiketleyiniz.`)
        db.set(`kayıt_erkek_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Erkek** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kız-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kız** rolünü etiketleyiniz.`)
        db.set(`kayıt_kız_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kız** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kayıtsız-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayıtsız** rolünü etiketleyiniz.`)
        db.set(`kayıt_kayıtsız_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayıtsız** rolü ${rol} olarak ayarlandı.`)
        
        }
        
        if(args[0] === "kayıt-log"){
            let rol = message.mentions.channels.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayıt log** kanalı etiketleyiniz.`)
        db.set(`kayıt_kayıt_log_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayıt log** kanalı ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kayıt-kanal"){
            let rol = message.mentions.channels.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayıt kanal** rolünü etiketleyiniz.`)
        db.set(`kayıt_kayıt_kanal_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayıt kanal** kanalı ${rol} olarak ayarlandı.`)
        
        }
    
}

module.exports.help = {
    name: "kayıt",
    category: "general",
    description: "Kayıt ayarlama komutu"
    
}