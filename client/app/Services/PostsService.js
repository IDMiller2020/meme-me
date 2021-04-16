import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { api } from '../Services/AxiosService.js'

class PostsService {
  async addPost(newPost) {
    try {
      console.log(newPost.imgUrl);
      let res = await api.post('/api/posts', newPost)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  // async getPosts() {
  //   try {
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // async deletePost(id) {
  //   try {
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // async setActivePost(id) {
  //   try {
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
}


export const postsService = new PostsService()
