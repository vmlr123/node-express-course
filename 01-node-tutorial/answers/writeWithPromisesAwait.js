const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Some text", { flag: "a" });
    await writeFile("temp.txt", "Some text", { flag: "a" });
    await writeFile("temp.txt", "Some text", { flag: "a" });
  } catch {
    console.log("There was an error writing the file");
  }
}

async function reader() {
  try {
    const result = await readFile("temp.txt", "utf8");
    console.log(result);
  } catch {
    console.log("There was an error reading the file");
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
