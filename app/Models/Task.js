import { generateId } from "../utils.js"

export default class Task {
  constructor({ listName, listItem, addItem, id }) {
    this.listName = listName
    this.listItem = listItem
    this.id = id || generateId()
    this.addItem = addItem || []
  }

  get Template() {
    return `
    <div class="col-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">${this.listName}</div>
          <div class="card-body">
            <ul class="list-group list-group-flush bg-success">
             ${this.listItemTemplate}
            </ul>
          </div>
        </div>
      </div>
    `
  }

  get listItemTemplate() {
    let template = ""
    this.listItem.forEach(l => {
      template += `
        <li class="list-group-item">${this.listItem}</li>
      `
    })
    return template
  }
}
