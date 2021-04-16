export default class Comment {
  constructor(data) {
    this.topText = data.topText
    this.bottomText = data.bottomText
  }

  get Template() {
    return `
    <p>${this.topText}</p>
    `
  }
}
