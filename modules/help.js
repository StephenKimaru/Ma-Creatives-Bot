import { mainMenu } from "../utils/links.js";

export function setupHelp(bot) {

  //
  // HELP COMMAND
  //
  bot.command("help", (ctx) => {

    ctx.reply(
`🆘 Help & Commands

/start — Open the main menu
/help — Show this help message
/earn — Start earning resources
/learn — Access learning platforms
/projects — View Ma Creatives projects
/links — Join our communities

Stay consistent.
Small steps = big results 🚀`,
      mainMenu
    );

  });

  //
  // PROJECTS COMMAND
  //
  bot.command("projects", (ctx) => {

    ctx.reply(
`🚀 Ma Creatives Projects

Explore our work and services:

🌐 Website
https://macreativesstudio.github.io/

More projects coming soon.`
    );

  });

  //
  // LINKS COMMAND
  //
  bot.command("links", (ctx) => {

    ctx.reply(
`🌍 Join the Ma Creatives Community

Telegram Community:
https://t.me/+EwXtD5ZVSgk1NzBk

Stay connected and grow with us 🚀`
    );

  });

}
