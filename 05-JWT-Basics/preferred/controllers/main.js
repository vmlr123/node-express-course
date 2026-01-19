const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;

  jwt.sign(
    { name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.LIFETIME,
    },
    (err, token) => {
      res.status(200).json({ token: token });
    },
  );
};

const hello = async (req, res) => {
  console.log(req.user);
  res.status(200).json({ message: `Hello, ${req.user.name}` });
};

module.exports = { logon, hello };
