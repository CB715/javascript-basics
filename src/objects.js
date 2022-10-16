const createPerson = (name, age) => {
  const person = {
    name,
    age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const newArray = people.map(names => names.age);
  return newArray;
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const ages = people.map(names => names.age);
  const initialValue = 0;
  const sumWithInitial = ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name: name,
    age: age,
    introduce: sayHello => {
      return `Hi ${sayHello}, my name is ${name} and I am ${age}!`;
    }
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
