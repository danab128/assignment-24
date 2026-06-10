const getMessage = require("./index");

if (getMessage() === "Hello World") {
  console.log("Test passed: Hello World is displayed.");
  process.exit(0);
} else {
  console.error("Test failed: Hello World is not displayed.");
  process.exit(1);
}
