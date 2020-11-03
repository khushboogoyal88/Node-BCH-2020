"use strict";

const persons = require("./persons.json");

exports.search = (key, value) => {
  if (key && value) {
    const found = [];
    for (let person of persons) {
      if (person[key] == value) {
        found.push(person);
      }
    }
    return found;
  } else {
    return persons;
  }
};
