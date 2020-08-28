import Task from "../Models/Task.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class TasksService {
  constructor() {
  }

  createTask(rawTask) {
    let newTask = new Task(rawTask)
    STORE.State.tasks.push(newTask)
  }

  createItem(newItem, itemId) {
    let item = STORE.State.tasks.find(i => i.id == itemId)
    item.items.push(newItem)
  }

  removeItem(itemId, itemName) {
    let task = STORE.State.tasks.find(i => i.id == itemId)
    let itemIndex = task.items.findIndex(i => i == itemName)
    task.items.splice(itemIndex, 1)
  }

  removeTask(id) {
    STORE.State.tasks = STORE.State.tasks.filter(t => t.id != id)
  }
}

const SERVICE = new TasksService();
export default SERVICE;
