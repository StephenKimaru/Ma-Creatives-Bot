require('dotenv').config()
const { Telegraf } = require('telegraf')

const startCommand = require('./commands/start')
const projectsCommand = require('./commands/projects')
const helpCommand = require('./commands/help')

const { mainMenu } = require('./utils/keyboard')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Commands
bot.start(startCommand)
bot.command('projects', projectsCommand)
bot.command('help', helpCommand)

// Button Actions
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

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing. Set it in environment variables.")
}

bot.catch((err) => {
  console.error("Bot error:", err)
})
// Launch bot
bot.launch()

console.log("🤖 Ma Creatives Bot is running...")
