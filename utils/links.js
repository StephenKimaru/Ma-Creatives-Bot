export const mainMenu = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "💻 Learn Skills", callback_data: "learn" }],
      [{ text: "💰 Start Earning", callback_data: "earn" }],
      [{ text: "🌍 Join Community", callback_data: "links" }],
      [{ text: "🚀 Explore Projects", callback_data: "projects" }]
    ]
  }
};

export const projectButtons = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "💻 Portfolio", url: "https://stephenkimaru.github.io" }],
      [{ text: "🚀 Ma Creatives Studio", url: "https://macreativesstudio.github.io" }],
      [{ text: "🍩 Cyber Donuts", url: "https://cyber-donuts.github.io" }],
      [{ text: "🏭 Larkspur Fabricators", url: "https://larkspurfabricators.github.io" }]
    ]
  }
};

export const linkButtons = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "📢 Telegram Channel", url: "https://t.me/macreativesstudio" }],
      [{ text: "👥 Telegram Community", url: "https://t.me/manetworld" }],
      [{ text: "💬 WhatsApp Community", url: "https://chat.whatsapp.com/LUDQOuntWwQ7sQGZRwIyNn" }],
      [{ text: "📸 Instagram", url: "https://www.instagram.com/macreatives.studio" }],
      [{ text: "▶️ YouTube", url: "https://youtube.com/@macreativesstudio" }]
    ]
  }
};
