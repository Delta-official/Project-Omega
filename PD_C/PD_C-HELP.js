const Discord = require("discord.js")

module.exports = {
    name: "PD_C-HELP",
    execute(message, args) {
        const H_EMD = new Discord.MessageEmbed()
        .setColor("#24556a")
        .setTitle("Commands")
        .setAuthor("Darkuss#9279")
        .addFields(
            { name: "loungepass", value: "Gives you Lounge Pass if you have any of the Patreon roles", inline: true}
        )
        message.channel.send(H_EMD)
    }
}