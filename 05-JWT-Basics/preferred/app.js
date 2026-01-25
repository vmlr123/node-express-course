require("dotenv").config();

const express = require("express");
const app = express();

const mainRouter = require("./routes/main");

// middleware
app.use(express.json());

app.use("/api/v1", mainRouter);

app.use((req, res) =>
  res.status(404).json({ message: "Route does not exist" }),
);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
