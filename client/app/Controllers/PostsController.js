/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { commentsService } from '../Services/CommentsService.js'
import { postsService } from '../Services/PostsService.js'

// Private
function _drawPosts() {
  let template = ''
  const posts = ProxyState.posts

  posts.forEach(p => template += p.Template)
  document.getElementById('sideImgs').innerHTML = template
}

function _drawActive() {
  const post = ProxyState.activePost
  document.getElementById('active').innerHTML = post.Active
}

// Public
export default class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    ProxyState.on('activePost', _drawActive)
    this.getPosts()
  }

  async addPost() {
    window.event.preventDefault()
    const form = window.event.target
    // @ts-ignore
    const newPost = { imgUrl: form.img.value }
    await postsService.addPost(newPost)
    // @ts-ignore
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
      await commentsService.setActiveComment(id)
    } catch (error) {
      console.error(error)
    }
  }
}
