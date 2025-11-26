const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Some text 2", { flag: "a" })
  .then(() => {
    return writeFile("temp.txt", "Some text 2", { flag: "a" });
  })
  .then(() => {
    return writeFile("temp.txt", "Some text 2", { flag: "a" });
  })
  .then(() => {
    return readFile("temp.txt", "utf8");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("There was an error:", err);
  });
