import dotenv from "dotenv";
import { Telegraf } from "telegraf";

import { setupWelcome } from "./modules/welcome.js";
import { setupModeration } from "./modules/moderation.js";
import { setupHelp } from "./modules/help.js";
import { setupPosts } from "./modules/posts.js";
import { setupPromotions } from "./modules/promotions.js";

import earn from "./modules/earn.js";
import learn from "./modules/learn.js";

import { mainMenu } from "./utils/links.js";

dotenv.config();

// Validate token
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing in .env");
}

const bot = new Telegraf(process.env.BOT_TOKEN);

//
// START COMMAND
//
bot.start((ctx) => {
  ctx.reply(
    "Welcome to Ma Creatives Bot 🚀",
    mainMenu
  );
});

//
// BUTTON ACTIONS
//
bot.action("earn", earn);

bot.action("learn", learn);

bot.action("community", (ctx) => {
  ctx.reply(
    "🌍 Join the Ma Creatives Community:\n\nhttps://t.me/+EwXtD5ZVSgk1NzBk"
  );
});

bot.action("projects", (ctx) => {
  ctx.reply(
    "🚀 Explore Ma Creatives Projects:\n\nhttps://macreativesstudio.github.io/"
  );
});

//
// MODULE SETUP
//
setupWelcome(bot);

setupModeration(bot);

setupHelp(bot);

setupPosts(bot);

setupPromotions(bot);

//
// ERROR HANDLING
//
bot.catch((err) => {
  console.error("Bot error:", err);
});

//
// SAFE SHUTDOWN
//
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

//
// LAUNCH BOT
//
bot.launch();

console.log("Bot running...");
