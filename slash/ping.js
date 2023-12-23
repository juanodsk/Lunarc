const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextInputBuilder,
  ModalBuilder,
  TextInputStyle,
  InteractionType,
  SlashCommandBuilder,
  SelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hello").setDescription("hola perro"),

  run: async ({client, interaction}) => {
    return interaction.reply("Pong!");
  },
};
