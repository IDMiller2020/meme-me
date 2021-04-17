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
    <div class="d-flex justify-content-between border border-primary align-items-center p-2">
    <p>${this.topComment}/${this.bottomComment}  </p>
    <p> Likes: ${this.likes} <button type="button" class="btn btn-success p-2 ml-auto" onclick="app.commentsController.like('${this.id}')"><i class="far fa-thumbs-up"></i>
    </button></p>
  </div>
    `
  }
}
