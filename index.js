// index.js
require('dotenv').config()   // Only needed for local .env testing
const { Telegraf } = require('telegraf')

// --- Check for BOT_TOKEN before doing anything ---
const BOT_TOKEN = process.env.BOT_TOKEN
if (!BOT_TOKEN) {
  throw new Error(
    "❌ BOT_TOKEN is missing. Set it in your .env file (local) or Railway environment variables (production)."
  )
}

// --- Create bot instance ---
const bot = new Telegraf(BOT_TOKEN)

// --- Import commands ---
const startCommand = require('./commands/start')
const projectsCommand = require('./commands/projects')
const helpCommand = require('./commands/help')

// --- Import keyboard utils ---
const { mainMenu } = require('./utils/keyboard')

// --- Register commands ---
bot.start(startCommand)
bot.command('projects', projectsCommand)
bot.command('help', helpCommand)

// --- Button Actions ---
bot.action('projects', (ctx) => {
  ctx.answerCbQuery()
  projectsCommand(ctx)
})

bot.action('help', (ctx) => {
  ctx.answerCbQuery()
  helpCommand(ctx)
})

bot.action('main_menu', (ctx) => {
  ctx.answerCbQuery()
  ctx.reply("🏠 Back to main menu", mainMenu())
})

// --- Global error handler ---
bot.catch((err) => {
  console.error("💥 Bot error:", err)
})

// --- Launch bot ---
bot.launch()
console.log("🤖 Ma Creatives Bot is running...")
