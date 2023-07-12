/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const initialsOfPerson =
    person.firstName.substring(0, 1) + person.lastName.substring(0, 1);
  return initialsOfPerson;
}
