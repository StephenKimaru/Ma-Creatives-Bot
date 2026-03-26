const warnings = new Map();

export function setupModeration(bot) {

  //
  // GET UPDATES COMMAND
  //
  bot.command("getupdates", async (ctx) => {
    try {
      await ctx.reply(`
📡 Bot Status Update

Moderation system: ACTIVE
Warnings tracking: ACTIVE
Mute system: ACTIVE

Environment: ${process.env.NODE_ENV}

Ma Creatives Bot running normally 🚀
      `);

      console.log("Updates requested from:", ctx.chat.id);

    } catch (error) {
      console.error("Error in /getupdates:", error);
    }
  });

  //
  // MESSAGE MODERATION
  //
  bot.on("message", async (ctx) => {

    try {

      if (!ctx.message.text) return;

      const text = ctx.message.text.toLowerCase();

      //
      // IGNORE ADMINS AND BOT
      //
      const member = await ctx.getChatMember(ctx.from.id);

      if (
        member.status === "administrator" ||
        member.status === "creator"
      ) {
        return;
      }

      //
      // BAD WORDS LIST
      //
      const badWords = [
        "porn",
        "sex",
        "scam",
        "fraud"
      ];

      const containsBadWord = badWords.some(word =>
        text.includes(word)
      );

      if (!containsBadWord) return;

      //
      // DELETE MESSAGE
      //
      await ctx.deleteMessage();

      const userId = ctx.from.id;

      const userWarnings = warnings.get(userId) || 0;

      const newWarnings = userWarnings + 1;

      warnings.set(userId, newWarnings);

      const limit =
        parseInt(process.env.WARNINGS_LIMIT) || 3;

      const muteHours =
        parseInt(process.env.MUTE_DURATION_HOURS) || 4;

      await ctx.reply(
        `⚠️ Warning ${newWarnings}/${limit}

Please follow community rules.`
      );

      console.log(
        `User ${userId} warning ${newWarnings}`
      );

      //
      // MUTE USER
      //
      if (newWarnings >= limit) {

        const muteUntil =
          Math.floor(Date.now() / 1000) +
          (muteHours * 60 * 60);

        await ctx.telegram.restrictChatMember(
          ctx.chat.id,
          userId,
          {
            permissions: {
              can_send_messages: false
            },
            until_date: muteUntil
          }
        );

        await ctx.reply(
          `User muted for ${muteHours} hours.`
        );

        console.log(
          `User ${userId} muted for ${muteHours} hours`
        );
      }

    } catch (error) {

      console.error(
        "Moderation error:",
        error
      );

    }

  });

    }
