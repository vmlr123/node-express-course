const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
    throw new UnauthenticatedError("Unauthorized.");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
      throw new UnauthenticatedError("Unauthorized.");
    }
    req.user = { name: decoded.name };
    next();
  });
};

module.exports = authenticationMiddleware;
