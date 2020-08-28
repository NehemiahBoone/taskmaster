import TasksService from "../Services/TasksService.js"
import STORE from "../store.js"

//Private
function _drawList() {
  let template = ""
  STORE.State.Tasks.forEach(l => template += l.Template)
  document.getElementById("tasks").innerHTML = template
}




//Public
export default class TasksController {
  constructor() {
    _drawList()
  }

  createTask(event) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      taskName: form.taskName.value,
      color: form.color.value
    }
    TasksService.createTask(rawTask)
    _drawList()
  }
}
