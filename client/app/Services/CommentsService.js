import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'

class CommentsService {
  async getComments() {
    const res = await api.get('api/posts/:id/comments')
  }

  addComment() {
    ProxyState.comments = [...ProxyState.comments, new Comment({ title: Math.random() })]
  }
}

export const commentsService = new CommentsService()
