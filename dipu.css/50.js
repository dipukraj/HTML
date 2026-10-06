const fs = require("fs");
let text = fs.readFileSync("Dipu.css/50.js", "utf-8");
text = text.replace("content", "Hello World");
console.log("The content of the file is:");
console.log(text);

fs.writeFileSync("Dipu.text", text);