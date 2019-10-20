class User {
  constructor(name, age, favourites) {
    this.name = name;
    this.age = age;
    this.favourites = favourites;
  }

  greet() {
    return `My name is ${this.name}.`;
  }
}

module.exports = User;
