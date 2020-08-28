import Task from "../Models/Task.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class TasksService {
  constructor() {
  }

  createTask(rawTask) {
    let newTask = new Task(rawTask)
    STORE.State.Tasks.push(newTask)
  }

  createItem(newItem, itemId) {
    let item = STORE.State.Tasks.find(i => i.id == itemId)
    item.items.push(newItem)
  }

}

const SERVICE = new TasksService();
export default SERVICE;
