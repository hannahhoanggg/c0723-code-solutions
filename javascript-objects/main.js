const student = {
  firstName: 'Hannah',
  lastName: 'Hoang',
  age: 28,
};

const fullName =
  'value of fullName: ' + student.firstName + ' ' + student.lastName;
console.log(fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Behavior Interventionist';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

const vehicle = {
  make: 'Lamborghini',
  model: 'Aventador',
  year: 2023,
};

vehicle['color'] = 'pink';
vehicle['isConvertible'] = true;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'whiskers',
  type: 'cat',
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
