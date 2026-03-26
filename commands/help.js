const { helpMessage } = require('../utils/messages')

module.exports = (ctx) => {
  ctx.replyWithMarkdown(helpMessage)
}
