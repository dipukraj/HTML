const fs = require("fs");
let text = fs.readFileSync("Dipu.css/50.js", "utf-8");
text = text.replace("content", "Hello World");
console.log("The content of the file is:");
console.log(text);

console.log("creating a new file ...");
fs.writeFileSync("Dipu.text", text);