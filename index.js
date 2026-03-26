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

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Welcome to Ma Creatives Bot 🚀",
    mainMenu
  );
});

bot.action("earn", earn);
bot.action("learn", learn);

setupWelcome(bot);
setupModeration(bot);
setupHelp(bot);
setupPosts(bot);
setupPromotions(bot);

bot.launch();

console.log("Bot running...");
