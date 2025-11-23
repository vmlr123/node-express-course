const { readFile, writeFile } = require("fs");

writeFile("./temporary/fileB.txt", "Hello, world!", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("step 1 completed");

  writeFile(
    "./temporary/fileB.txt",
    "Hello, world 2!",
    { flag: "a" },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("step 2 completed");
      writeFile(
        "./temporary/fileB.txt",
        "Hello, world 3!",
        { flag: "a" },
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("step 3 completed");
          readFile("./temporary/fileB.txt", "utf8", (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              const first = result;
              console.log(first);
              return;
            }
          });
        }
      );
    }
  );
});
