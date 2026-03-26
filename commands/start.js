const { mainMenu } = require('../utils/keyboard')
const { welcomeMessage } = require('../utils/messages')

module.exports = (ctx) => {
  ctx.reply(welcomeMessage, mainMenu())
}
