/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// Private
function _draw() {
  const comments = ProxyState.comments
  console.log(comments)
}
function _drawComments() {
  const comments = ProxyState.comments
  console.log(comments)
}

// Public
export default class CommentsController {
  constructor() {
    ProxyState.on('comments', _draw)
    ProxyState.on('activePost', _drawComments)
  }

  addComment() {
    commentsService.addComment()
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }
}
