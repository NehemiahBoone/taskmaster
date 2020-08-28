import Task from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  Tasks: [
    new Task({ taskName: "Chores", color: "warning" }),
    new Task({ taskName: "Homework", color: "danger" })
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
}

const STORE = new Store();
export default STORE;
