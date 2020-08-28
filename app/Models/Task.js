export default class Task {
  constructor(data) {
    this.title = data.title
  }

  get Template() {
    return this.title
  }
}