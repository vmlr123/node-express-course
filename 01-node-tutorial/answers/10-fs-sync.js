const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "Hello, world!", { flag: "a" });
writeFileSync("./temporary/fileA.txt", "Hello, world 2!", { flag: "a" });
writeFileSync("./temporary/fileA.txt", "Hello, world 3!", { flag: "a" });

const readFirst = readFileSync("./temporary/fileA.txt", "utf8");

console.log(readFirst);
