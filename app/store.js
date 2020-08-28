import Task from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  Tasks: [
    new Task({ taskName: "Chores", color: "warning", items: ["Dishes", "Clean room"] }),
    new Task({ taskName: "Homework", color: "danger", items: ["Science", "Math"] })
  ]
};

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
