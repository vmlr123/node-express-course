const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  console.log(chunk);
  chunkCount++;
});
stream.on("end", (num) => {
  console.log("stream ended", chunkCount);
});
stream.on("error", (err) => {
  console.log("error", err);
});
