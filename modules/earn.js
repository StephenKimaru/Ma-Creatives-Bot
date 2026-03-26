const earningProjects = [
  {
    name: "🔥 Sweatcoin",
    link: "https://w2.swcapp.com/i/macreatives"
  },
  {
    name: "⚡ MEC App",
    link: "https://i.mec.me/?c=xu6us1z1"
  },
  {
    name: "🟣 Pi Network",
    link: "https://minepi.com/macreatives",
    extra: "Code: macreatives"
  }
];

export default (ctx) => {

  let message = "💰 Start Earning Today\n\n";

  earningProjects.forEach(project => {

    message += `${project.name}\n`;
    message += `${project.link}\n`;

    if (project.extra) {
      message += `${project.extra}\n`;
    }

    message += "\n";

  });

  message += "Stay consistent.\nSmall steps = big results 🚀";

  ctx.reply(message);

};
