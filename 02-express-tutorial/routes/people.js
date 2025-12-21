const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  findPerson,
  replacePerson,
  deletePerson,
} = require("../controllers/people.js");

router.route("/").get(getPeople).post(addPerson);
router.route("/:id").get(findPerson).put(replacePerson).delete(deletePerson);

module.exports = router;
