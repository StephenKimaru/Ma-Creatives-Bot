const warnings = new Map();

export function setupModeration(bot) {

  bot.on("message", async (ctx) => {

    if (!ctx.message.text) return;

    const text = ctx.message.text.toLowerCase();

    const badWords = [
      "porn",
      "sex",
      "scam",
      "fraud"
    ];

    const containsBadWord = badWords.some(word =>
      text.includes(word)
    );

    if (containsBadWord) {

      await ctx.deleteMessage();

      const userId = ctx.from.id;

      const userWarnings = warnings.get(userId) || 0;

      const newWarnings = userWarnings + 1;

      warnings.set(userId, newWarnings);

      await ctx.reply(
        `⚠️ Warning ${newWarnings}/3

Please follow community rules.`
      );

      if (newWarnings >= 3) {

        await ctx.telegram.restrictChatMember(
          ctx.chat.id,
          userId,
          {
            permissions: {
              can_send_messages: false
            }
          }
        );

        await ctx.reply(
          "User muted for violations."
        );
      }
    }
  });
}
