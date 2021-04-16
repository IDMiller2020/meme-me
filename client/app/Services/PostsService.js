import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { api } from '../Services/AxiosService.js'

class PostsService {
  async addPost(newPost) {
    try {
      let res = await api.post('/api/posts', newPost)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async getPosts() {
    try {
      const res = await api.get('api/posts')
      ProxyState.posts = res.data.map(p => new Post(p))
    } catch (error) {
      console.error(error)
    }
  }

  // async deletePost(id) {
  //   try {
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  async setActivePost(id) {
    try {
      const post = ProxyState.posts.find(p => p.id === id)
      ProxyState.activePost = post
    } catch (error) {
      console.error(error)
    }
  }
}


export const postsService = new PostsService()
