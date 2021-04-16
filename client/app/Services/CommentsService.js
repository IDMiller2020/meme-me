import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'

class CommentsService {
  addComment() {
    ProxyState.comments = [...ProxyState.comments, new Comment({ title: Math.random() })]
  }
}

export const commentsService = new CommentsService()
