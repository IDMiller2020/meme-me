export default class Comment {
  constructor(data) {
    this.topComment = data.topComment
    this.bottomComment = data.bottomComment
    this.userId = data.userId
    this.postId = data.postId
    this.creatorId = data.creatorId
    this.likes = 0
  }

  get TopTemplate() {
    return `
    <p>${this.topComment}</p>
    `
  }

  get BottomTemplate() {
    return `
    <p>${this.bottomComment}</p>
    `
  }
}
