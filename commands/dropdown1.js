const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('1019297995235278928')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Koç",
        value: "971547846417461308",
        emoji: "♈"
        },
    {

        label: "Boğa",
        value: "971548260789522483",
        emoji: "♉"
    },
    {

        label: "İkizler",
        value: "971549214305841172",
        emoji: "♊"
    },
    {

        label: "Yengeç",
        value: "971549475967496294",
        emoji: "♋"
    },
    {

        label: "Aslan",
        value: "971549735645249556",
        emoji: "♌"
    },
    {
        label: "Başak",
        value: "971550049110732861",
        emoji: "♍"
    },
    {
        label: "Terazi",
        value: "971550298273378365",
        emoji: "♎"
    },
    {
        label: "Akrep",
        value: "971550905973473320",
        emoji: "♏"
    },
    {
        label: "Yay",
        value: "971551195116216360",
        emoji: "♐"
    },
    {
        label: "Oğlak",
        value: "971551642786885672",
        emoji: "♑"
    },
    {
        label: "Kova",
        value: "971552028008525865",
        emoji: "♒"
    },
    {
        label: "Balık",
        value: "971552552091025458",
        emoji: "♓"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(1)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki burç rollerden kendi burç rolünüzü alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown1",
    category: "general",
    description: "Anket"
}