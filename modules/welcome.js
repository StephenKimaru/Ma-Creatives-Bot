import { mainMenu } from "../utils/links.js";

export function setupWelcome(bot) {
  bot.on("new_chat_members", async (ctx) => {
    const user = ctx.message.new_chat_member;

    await ctx.reply(
      `🎉 Welcome ${user.first_name}!

You are now part of the Ma Creatives Community.

Learn
Earn
Build
Connect

Choose an option below 👇`,

      mainMenu
    );
  });
}
