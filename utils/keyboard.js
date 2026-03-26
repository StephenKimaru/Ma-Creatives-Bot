const { Markup } = require('telegraf')
const config = require('../config/config')

const mainMenu = () => {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Projects', 'projects')],
    [Markup.button.callback('🌍 Community', 'community')],
    [Markup.button.callback('📚 Help', 'help')]
  ])
}

const projectsMenu = () => {
  return Markup.inlineKeyboard([
    [Markup.button.url('💻 Portfolio', config.links.portfolio)],
    [Markup.button.url('🚀 Studio', config.links.studio)],
    [Markup.button.url('🍩 Cyber Donuts', config.links.cyberDonuts)],
    [Markup.button.url('🏭 Larkspur', config.links.larkspur)],
    [Markup.button.callback('⬅️ Back', 'main_menu')]
  ])
}

module.exports = {
  mainMenu,
  projectsMenu
}
