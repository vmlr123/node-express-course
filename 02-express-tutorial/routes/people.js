const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  findPerson,
  replacePerson,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", (req, res) => {
  getPeople(req, res);
});

router.get("/:id", (req, res) => {
  findPerson(req, res);
});
router.post("/", (req, res) => {
  addPerson(req, res);
});

router.put("/:id", (req, res) => {
  replacePerson(req, res);
});

router.delete("/:id", (req, res) => {
  deletePerson(req, res);
});

module.exports = router;
