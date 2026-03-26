export async function logAction(bot, message) {
  try {
    const logGroup = process.env.LOG_GROUP_ID;

    if (!logGroup) return;

    await bot.telegram.sendMessage(
      logGroup,
      `📌 Moderation Log

${message}`
    );
  } catch (error) {
    console.error("Logging error:", error);
  }
}
