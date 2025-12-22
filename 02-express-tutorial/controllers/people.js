const { people } = require("../data");

function getPeople(req, res) {
  res.json({ success: true, data: people });
}

function addPerson(req, res) {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
}

function findPerson(req, res) {
  const id = req.params.id;
  const person = people.find((person) => person.id === Number(id));
  if (person) {
    res.status(200).json(person);
  } else {
    res
      .status(404)
      .json({ success: false, message: "Person could not be found." });
  }
}

function replacePerson(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (person && name) {
    people.splice(people.indexOf(person), 1, { ...person, name });
    res.status(200).json({ ...person, name });
  } else {
    res
      .status(404)
      .json({ success: false, message: "Person could not be found." });
  }
}

function deletePerson(req, res) {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (person) {
    people.splice(people.indexOf(person), 1);
    res.status(200).json({ success: true, message: "Person was deleted." });
  } else {
    res
      .status(404)
      .json({ success: false, message: "Person could not be found." });
  }
}

module.exports = {
  addPerson,
  getPeople,
  findPerson,
  replacePerson,
  deletePerson,
};
