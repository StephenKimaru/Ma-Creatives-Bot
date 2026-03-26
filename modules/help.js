export default function help(bot) {
  bot.command("help", (ctx) => {
    ctx.reply(
      `🤖 Ma Creatives Bot Help

Commands:

/help - Show help
/start - Start bot
/rules - Group rules

Need assistance?
Contact admin.`
    );
  });
}
