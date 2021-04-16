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

  addPost() {
    postsService.addPost()
  }

  getPosts() {

  }
}
