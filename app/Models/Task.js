import { generateId } from "../utils.js"

export default class Task {
  constructor({ taskName, color, items }) {
    this.taskName = taskName
    this.color = color
    this.id = generateId()
    this.items = items || []
  }

  get Template() {
    return `
      <div class="col-4 my-2 d-flex justify-content-center">
        <div class="card text-white bg-${this.color} custom-card">
          <div class="card-header">${this.taskName}<i class="fas fa-times mx-2" onclick="app.tasksController.removeTask('${this.id}')"></i></div>
          <div class="card-body d-flex flex-column">
            <ul>
              ${this.ItemsTemplate}
            </ul>
            <form onsubmit="app.tasksController.createItem(event, '${this.id}')" class="m-1 mt-auto">
              <div class="form-group p-1">
                <input type="text" name="item" id="item" class="form-control" placeholder="Add Item...">
                <button type="submit" class="btn btn-light my-1">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `
  }

  get ItemsTemplate() {
    let template = ""
    this.items.forEach(i => {
      template += `<li><input type="checkbox" class="mr-1">${i}<i class="fas fa-times mx-2" onclick="app.tasksController.removeItem('${this.id}', '${i}')"></i></li>`
    })
    return template
  }

}
