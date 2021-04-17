export default class Comment {
  constructor(data) {
    this.topComment = data.topComment
    this.bottomComment = data.bottomComment
    this.postId = data.postId
    this.creatorId = data.creatorId
    this.likes = 0
  }

  get Template() {
    return `
    <div>
    <li class="list-group-item">${this.topComment}</li>
    <li class="list-group-item">${this.bottomComment}</li>
  </div>
    `
  }
}
