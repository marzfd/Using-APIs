// !# STORY
// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife
// and 3 children. As a day job he's a construction worker, that makes
// houses. He likes to eat dates and smoke water pipe.
// Abdulkareem has a horse, named Adel. The horse is 15 years old and
// has the color brown. Usually the horse eats grass or helps transport
// materials for Abdulkareem. And they lived happily ever after!


// TODO turn the characters in it into classes and instantiate the class into the characters
class Person {
  constructor(name, age, location, children, job, eat, hobby) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.children = children;
    this.job = job;
    this.eat = eat;
    this.hobby = hobby;

  }
}

class Animal {
  constructor(name, age, species, color, job, eat) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.color = color;
    this.job = job;
    this.eat = eat;
  }
}

const person = new Person('Abdulkareem', 35, 'Riyadh', 3, 'construction worker', 'eat dates', 'smoke water pipe');

const animal = new Animal('Adel', 15, 'horse', 'brown', 'transport materials', 'grass');

