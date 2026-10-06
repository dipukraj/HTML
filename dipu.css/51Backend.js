// Synchronous or blocking
// -line by line execution

// Asynchronous or non-blocking
// -line by line execution not guaranteed
// callbacks will fire

const fs = require("fs");
let text = fs.readFile("Backend.js", "utf-8");
console.log("The content of the file is");