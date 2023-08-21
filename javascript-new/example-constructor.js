function ExampleConstructor() {}
console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

const constructor = new ExampleConstructor();
console.log('value of constructor:', constructor);
const instanceConstructor = constructor instanceof ExampleConstructor;
console.log('instanceof instanceConstructor:', instanceConstructor);
