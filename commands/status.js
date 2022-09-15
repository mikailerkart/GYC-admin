module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('942851209725870081')) /*status yetkili rol */ return message.reply("Status için yetkin yok.");


    var statusTxt = args.join(" ");

    client.user.setPresence({

        status: "online",
        activities: [
            {
                name: statusTxt
            }
        ]
    });

    return;

}

module.exports.help = {
    name: "status",
    category: "general",
    description: "Bot status degistirme"
}