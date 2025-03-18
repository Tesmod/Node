import path from "path"

// console.log(path.basename("c://nodejs//app.html"));
// console.log(path.basename("c://nodejs//index.js", ".js"));
// console.log(path.dirname("c://nodejs//index.js"))
// console.log(path.extname("c://nodejs//index.js"))

// console.log(path.join("c:", "tesmod", "development-team"))

// //Go up a levels
// console.log(path.join("c:", "tesmod", "development-team", "hit-go", "courses", "..", "..", ".."))

// //Normalize the path
// console.log(path.normalize("c://courses//hit-go//combined//teeth//wash//plate//"))

console.log(path.parse("c://nodejs//index.js"))
console.log(path.parse("c://nodejs//index.js").base)
console.log(path.parse("c://nodejs//index.js").ext)
console.log(path.parse("c://nodejs//index.js").name)