import Task from "./Models/Task.js";

let _state = {
  activeValue: new Task({ title: "Task" }),
  /** @type {Task[]} */
  tasks: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
