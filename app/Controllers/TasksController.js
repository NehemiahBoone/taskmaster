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

  createItem(event, itemId) {
    event.preventDefault()
    let form = event.target
    let newItem = form.item.value
    TasksService.createItem(newItem, itemId)
    _drawList()
  }

  removeItem(itemId, itemName) {
    TasksService.removeItem(itemId, itemName)
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

  removeTask(id) {
    TasksService.removeTask(id)
    _drawList()
  }
}
