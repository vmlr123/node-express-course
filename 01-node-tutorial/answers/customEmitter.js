const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", (resp) => {
  console.log(resp);
});

customEmitter.emit("response", "Hey, what's up!");
customEmitter.emit("response", "Ain't nothing much.");
