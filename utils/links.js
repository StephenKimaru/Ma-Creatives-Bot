//
// MAIN MENU CONFIG
//
export const mainMenuItems = [
  { text: "💻 Learn Skills", action: "learn" },
  { text: "💰 Start Earning", action: "earn" },
  { text: "🌍 Join Community", action: "links" },
  { text: "🚀 Explore Projects", action: "projects" }
];

export const mainMenu = {
  reply_markup: {
    inline_keyboard: mainMenuItems.map(item => [
      {
        text: item.text,
        callback_data: item.action
      }
    ])
  }
};


//
// PROJECTS CONFIG
//
export const projectsList = [
  {
    name: "💻 Portfolio",
    url: "https://stephenkimaru.github.io"
  },
  {
    name: "🚀 Ma Creatives Studio",
    url: "https://macreativesstudio.github.io"
  },
  {
    name: "🍩 Cyber Donuts",
    url: "https://cyber-donuts.github.io"
  },
  {
    name: "🏭 Larkspur Fabricators",
    url: "https://larkspurfabricators.github.io"
  }
];

export const projectButtons = {
  reply_markup: {
    inline_keyboard: projectsList.map(project => [
      {
        text: project.name,
        url: project.url
      }
    ])
  }
};


//
// COMMUNITY LINKS CONFIG
//
export const communityLinks = [
  {
    name: "📢 Telegram Channel",
    url: "https://t.me/macreativesstudio"
  },
  {
    name: "👥 Telegram Community",
    url: "https://t.me/manetworld"
  },
  {
    name: "💬 WhatsApp Community",
    url: "https://chat.whatsapp.com/LUDQOuntWwQ7sQGZRwIyNn"
  },
  {
    name: "📸 Instagram",
    url: "https://www.instagram.com/macreatives.studio"
  },
  {
    name: "▶️ YouTube",
    url: "https://youtube.com/@macreativesstudio"
  }
];

export const linkButtons = {
  reply_markup: {
    inline_keyboard: communityLinks.map(link => [
      {
        text: link.name,
        url: link.url
      }
    ])
  }
};
