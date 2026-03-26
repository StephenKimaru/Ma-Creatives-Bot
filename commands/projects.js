const { projectsMenu } = require('../utils/keyboard')
const { projectsMessage } = require('../utils/messages')

module.exports = (ctx) => {
  ctx.replyWithMarkdown(projectsMessage, projectsMenu())
}
