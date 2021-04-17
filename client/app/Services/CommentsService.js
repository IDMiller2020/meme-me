import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from '../Services/AxiosService.js'

class CommentsService {
  async setActiveComment(id) {
    try {
      const comment = ProxyState.comments.filter(p => p.postId === id)
      ProxyState.activeComments = comment
    } catch (error) {
      console.error(error)
    }
  }

  async getComments() {
    const res = await api.get('api/comments')
    ProxyState.comments = res.data.map(c => new Comment(c))
    console.log(res.data)
  }

  async addComment(newComment) {
    const res = await api.post('api/comments', newComment)
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
    ProxyState.activeComments = [...ProxyState.activeComments, new Comment(res.data)]
  }

  async like(id) {
    const comment = ProxyState.comments.find(c => c.id === id)
    comment.likes += 1
    await api.put('api/comments/' + id, { likes: comment.likes })
    ProxyState.comments = ProxyState.comments
  }
}

export const commentsService = new CommentsService()
