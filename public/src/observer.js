export class Observer {
  constructor() {
    this.events = {};
  }

  subscribe(event, fn) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(fn);
  }

  notify(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach((fn) => fn(data));
  }
}
