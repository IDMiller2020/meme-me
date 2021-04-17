export default class Comment {
  constructor(data) {
    this.topComment = data.topComment
    this.bottomComment = data.bottomComment
    this.postId = data.postId
    this.creatorId = data.creatorId
    this.likes = data.likes || 0
    this.id = data.id
  }

  get Template() {
    return `
    <div>
    <li class="list-group-item">${this.topComment}/${this.bottomComment}  </li>
    <p><button type="button" class="btn btn-success p-2" onclick="app.commentsController.like('${this.id}')">Like</button> Likes: ${this.likes}</p>
  </div>
    `
  }
}
