var fs = require("fs")
let data = fs.readFileSync("input.txt","utf-8")
console.log(data)

fs.writeFileSync("input.txt","Hello Team")
fs.appendFileSync("main.txt","Hello 10X")
// fs.unlinkSync("main.txt")