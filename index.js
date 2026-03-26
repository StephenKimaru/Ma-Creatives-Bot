require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Import commands
const start = require('./commands/start');
const help = require('./commands/help');
const links = require('./commands/links');
const projects = require('./commands/projects');
const earn = require('./commands/earn');
const learn = require('./commands/learn');

// Register commands
bot.start(start);
bot.help(help);
bot.command('links', links);
bot.command('projects', projects);
bot.command('earn', earn);
bot.command('learn', learn);

// Simple AI-like replies
bot.on('text', (ctx) => {
  const text = ctx.message.text.toLowerCase();

  if (text.includes('hi') || text.includes('hello')) {
    return ctx.reply('👋 Hey! Ready to level up today? Type /start 🚀');
  }

  if (text.includes('money') || text.includes('earn')) {
    return ctx.reply('💰 Let’s get you earning → /earn');
  }

  ctx.reply('🤖 I’m Ma Creatives Bot. Type /help to explore 🚀');
});

bot.launch();
console.log("🚀 Ma Creatives Bot is running...");
