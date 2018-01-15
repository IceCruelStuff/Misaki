const Social = require(`${process.cwd()}/base/Social.js`);

class Owo extends Social {
  constructor(client) {
    super(client, {
      name: "owo",
      description: "OwO, what's this?",
      usage: "owo",
      category: "Fun",
      cost: 5,
      aliases: ["uwu", "UwU", "OwO"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
      if (message.settings.socialSystem === "true") {
        if (!(await this.cmdPay(message, message.author.id, this.help.cost))) return;
      }
      const msg = await message.channel.send(`<a:typing:397490442469376001> OwO whats this? **${message.member.displayName}**...`);
      const owo = await this.cmdMoe("owo");
      message.buildEmbed()
        .setColor(message.guild.member(this.client.user.id).highestRole.color || 0)
        .setImage(`https://cdn.ram.moe/${owo}`)
        .setTimestamp()
        .send();

      await msg.delete();
    } catch (e) {
      console.log(e);
    }

  }
}

module.exports = Owo;
