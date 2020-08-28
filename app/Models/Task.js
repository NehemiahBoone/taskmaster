import { generateId } from "../utils.js"

export default class Task {
  constructor({ taskName, color }) {
    this.taskName = taskName
    this.color = color
    this.id = generateId()
  }

  get Template() {
    return `
        <div class="col-4 card text-white bg-${this.color} mb-3 mx-3 custom-card">
          <div class="card-header">${this.taskName}</div>
          <div class="card-body d-flex flex-column">
            <form onsubmit="app.tasksContoller.createItem" class="m-1 mt-auto">
              <div class="form-group p-1">
                <input type="text" name="addTask" id="addTask" class="form-control" placeholder="Add task...">
                <button type="submit" class="btn btn-light my-1">Create</button>
              </div>
            </form>
          </div>
        </div>
    `
  }
}
