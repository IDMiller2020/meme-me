/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// // Private
// function _draw() {
//   const comments = ProxyState.comments
//   console.log(comments)
// }
function _drawComments() {
  console.log('drawing comments');
  const comments = ProxyState.activeComments
  let template = ''
  comments.forEach(c => template += c.Template)
  document.getElementById('allComments').innerHTML = "<div class='card-header'>Comments</div>" + template
}

// Public
export default class CommentsController {
  constructor() {
    // ProxyState.on('comments', _draw)
    ProxyState.on('activeComments', _drawComments)
    this.getComments()
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
