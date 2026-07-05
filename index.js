const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = '1523399598817673349';

client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

client.on('guildMemberAdd', async (member) => {
  const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);

  if (!channel) return;

  const avatar = member.user.displayAvatarURL({
    extension: 'png',
    size: 1024
  });

  const embed = new EmbedBuilder()
    .setColor('#C8A24A')
    .setTitle('🎉 أهلاً وسهلاً')
    .setDescription(
`**مرحباً بك ${member}**

نورت سيرفر **العراق العظيم** 🇮🇶

نتمنى لك وقتاً ممتعاً بين أعضاء السيرفر.`
    )
    .setThumbnail(avatar)
    .setImage(avatar)
    .setFooter({
      text: 'العراق العظيم',
      iconURL: client.user.displayAvatarURL()
    })
    .setTimestamp();

  await channel.send({
    content: `${member}`,
    embeds: [embed]
  });
});

client.login(process.env.TOKEN);
