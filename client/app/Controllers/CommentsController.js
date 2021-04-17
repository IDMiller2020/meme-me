/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// // Private
// function _draw() {
//   const comments = ProxyState.comments
//   console.log(comments)
// }
function _drawComments() {
  console.log('drawing comments')
  const comments = ProxyState.activeComments
  let template = ''
  comments.forEach(c => template += c.Template)
  document.getElementById('allComments').innerHTML =
    "<div class='card-header'>Captions</div>" + template +
    `
  <form onsubmit="app.commentsController.addComment()">
    <div class="form-group d-flex">
      <input type="text" class="form-control" id="top" placeholder="Top Text...">
      <input type="text" class="form-control" id="bottom" placeholder="Bottom Text...">
      <button type="submit" class="btn btn-success">+</button>
    </div>
  </form>`
}

// Public
export default class CommentsController {
  constructor() {
    // ProxyState.on('comments', _draw)
    ProxyState.on('activeComments', _drawComments)
    ProxyState.on('comments', _drawComments)
    this.getComments()
    // this.getLikes()
  }

  async addComment() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      // @ts-ignore
      const newComment = {
        topComment: form.top.value,
        bottomComment: form.bottom.value,
        postId: ProxyState.activePost.id,
        likes: 0
      }
      await commentsService.addComment(newComment)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async like(id) {
    try {
      await commentsService.like(id)
    } catch (error) {
      console.error(error)
    }
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }

  // async getLikes() {
  //   try {
  //     await commentsService.getLikes()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
}
