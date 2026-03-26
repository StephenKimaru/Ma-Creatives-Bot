import cron from "node-cron";

export function setupPosts(bot) {

  cron.schedule("0 */3 * * *", async () => {

    const message =
`💡 Daily Tip

Consistency beats talent.

Learn something today.`;

    console.log("Daily post executed");

  });
}
