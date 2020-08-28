import Task from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  tasks: [
    new Task({ taskName: "Chores", color: "warning", items: ["Dishes", "Clean room"] }),
    new Task({ taskName: "Homework", color: "danger", items: ["Science", "Math"] })
  ]
};

function _loadState() {
  let saved = JSON.parse(localStorage.getItem("tasks"))
  if (saved) {
    saved.tasks = saved.tasks.map(t => new Task(t))
    _state = saved
  }
}
_loadState()

class Store {
  constructor() {

  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("tasks", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
