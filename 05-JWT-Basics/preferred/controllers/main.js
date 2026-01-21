const jwt = require("jsonwebtoken");
const { BadRequestError, InternalError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const logon = async (req, res) => {
  if (!req.body) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide name and password." });
    throw new BadRequestError("Please provide name and password.");
  }
  const { name, password } = req.body;

  if (!name || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide name and password." });
    throw new BadRequestError("Please provide name and password.");
  }
  if (
    name.length <= 0 ||
    name.length > 30 ||
    password.length <= 0 ||
    password.length > 30
  ) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message:
        "Invalid name and/or password. Name and password must be between 1 and 30 characters each.",
    });
    throw new BadRequestError(
      "Invalid name and/or password. Name and password must be between 1 and 30 characters each.",
    );
  }
  jwt.sign(
    { name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.LIFETIME,
    },
    (err, token) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal server error." });
        throw new InternalError("Internal server error.");
      }
      res.status(200).json({ token: token });
    },
  );
};

const hello = async (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.name}.` });
};

module.exports = { logon, hello };
