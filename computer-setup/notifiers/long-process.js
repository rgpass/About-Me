var notifier = require("node-notifier");

notifier.notify({
  message: "The long-running process has finished.",
  timeout: 1,
  title: "Process Done",
});
