const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized." });
    }
    req.user = { name: decoded.name };
    next();
  });
};

module.exports = authenticationMiddleware;
