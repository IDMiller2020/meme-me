import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import {api} from '../Services/AxiosService.js'

class PostsService {
  async addPost(newPost) {
    try {
      let res = await api.Post("", newPost)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async getPosts() {
    try {
      await 
    } catch (error) {
      console.error(error)
    }
  }

  async deletePost(id) {
    try {
      await 
    } catch (error) {
      console.error(error)
    }
  }

  async setActivePost(id) {
    try {
      await 
    } catch (error) {
      console.error(error)
    }
  }
}


export const postsService = new PostsService()
