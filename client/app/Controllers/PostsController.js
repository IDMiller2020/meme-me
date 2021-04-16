/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

// Private
function _draw() {
  const posts = ProxyState.posts
  console.log(posts)
}

function _drawActive() {
  const activePost = ProxyState.activePost
}

// Public
export default class PostsController {
  constructor() {
    ProxyState.on('posts', _draw)
  }

  async addPost() {
    window.event.preventDefault()
    const form = window.event.target
    const newPost = { imgUrl: form.img.value }
    try {
      await postsService.addPost(newPost)
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  async getPosts() {
    try {
      await postsService.getPosts()
    } catch (error) {
      console.error(error)
    }
  }

  async deletePost(id) {
    try {
      await postsService.deletePost(id)
    } catch (error) {
      console.error(error)
    }
  }

  async setActivePost(id) {
    try {
      await postsService.setActivePost(id)
    } catch (error) {
      console.error(error)
    }
  }
}
