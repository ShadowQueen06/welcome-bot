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

  const embed = new EmbedBuilder()
    .setColor('#00b0f4')
    .setTitle('🎉 مرحباً بك')
    .setDescription(
`أهلاً وسهلاً ${member}

نورت السيرفر ❤️

نتمنى لك وقتاً ممتعاً معنا.

أنت العضو رقم: ${member.guild.memberCount}`
    )
    .setThumbnail(member.user.displayAvatarURL({ size: 1024 }))
    .setImage(member.user.displayAvatarURL({ size: 1024 }))
    .setTimestamp();

  await channel.send({
    content: `${member}`,
    embeds: [embed]
  });
});

client.login(process.env.TOKEN);
