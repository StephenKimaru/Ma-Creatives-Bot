const { Telegraf } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

// Start command
bot.start((ctx) => {
  ctx.reply(`
🚀 Welcome to Ma Creatives Community!

We help you:
💻 Learn tech & build projects
📈 Grow in crypto & digital skills
🌍 Connect with opportunities

🔗 Join our platforms:
Telegram: https://t.me/MaNetw0rld
Community: https://t.me/Mav1en

Type /help to explore more.
  `);
});

// Help command
bot.help((ctx) => {
  ctx.reply(`
📌 Commands:
/start - Start bot
/help - Show this menu
/links - Get all links
/earn - Earning apps
  `);
});

// Links
bot.command('links', (ctx) => {
  ctx.reply(`
🌐 Ma Creatives Links:

📢 Main Channel: https://t.me/MaNetw0rld
👥 Community: https://t.me/Mav1en

📸 Instagram: (add later)
🐦 Twitter: (add later)
💻 GitHub: https://github.com/stephenkimaru
  `);
});

// Earning apps
bot.command('earn', (ctx) => {
  ctx.reply(`
💰 Start Earning:

🔥 Sweatcoin:
https://w2.swcapp.com/i/macreatives

💧 Sweat Wallet:
https://swe.at/r/40mmQNQ50v

⚡ MEC App:
https://i.mec.me/?c=xu6us1z1

🟣 Pi Network:
https://minepi.com/macreatives
Code: macreatives
  `);
});

// Auto reply
bot.on('text', (ctx) => {
  const text = ctx.message.text.toLowerCase();

  if (text.includes('hi') || text.includes('hello')) {
    ctx.reply('Hey 👋 Welcome to Ma Creatives!');
  } else if (text.includes('money') || text.includes('earn')) {
    ctx.reply('Check /earn to start earning 💰');
  } else {
    ctx.reply('Type /help to see what I can do 🚀');
  }
});

// Launch
bot.launch();
console.log("🤖 Ma Bot is running...");
