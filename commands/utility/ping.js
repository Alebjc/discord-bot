const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with random message'),
    async execute(interaction) {
        await interaction.reply('im finally working idek how but iam');
    },
};