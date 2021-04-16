export default class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.userId = data.userId
    this.id = data.id || data._id
  }

  get Template() {
    return /* html */ `
    <img class="side-img p-2 w-100" src="${this.imgUrl}" onclick="app.postsController.setActivePost(${this.id})" alt="">
  `
  }

  get Active() {
    return /* html */ `
    <img class="active p-2 w-100" src="${this.imgUrl}" alt="">
  `
  }
}
