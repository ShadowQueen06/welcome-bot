const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = 'PUT_CHANNEL_ID_HERE';

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
  if (!channel) return;

  const avatar = member.user.displayAvatarURL({
    extension: 'png',
    size: 1024
  });

  const embed = new EmbedBuilder()
    .setColor('#2ecc71')
    .setTitle('أهلاً وسهلاً')
    .setDescription(`نورت السيرفر يا ${member}`)
    .setThumbnail(avatar)
    .setImage(avatar)
    .setFooter({ text: `أنت العضو رقم ${member.guild.memberCount}` });

  await channel.send({
    content: `هلا والله ${member}`,
    embeds: [embed]
  });
});

client.login(process.env.TOKEN);
