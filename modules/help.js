export function setupHelp(bot) {
  bot.command("help", (ctx) => {
    ctx.reply(`
🆘 Help & Commands

/start — Start the bot
/help — Show help menu
/earn — Start earning resources
/learn — Learning platforms
/projects — View projects
/links — Join communities

Stay consistent. Small steps = big results 🚀
    `);
  });
}
