// Represents a hero in a game with age-based class and attack type
class Hero {
  static MIN_AGE = 14; // Minimum allowed age
  static MAX_AGE = 60; // Maximum allowed age

  // Available classes, mapped to age limits and attack types
  static CLASSES = [
    { limit: 20, type: 'monk', attack: 'martial arts' },
    { limit: 30, type: 'ninja', attack: 'shuriken' },
    { limit: 40, type: 'warrior', attack: 'swords' },
    { limit: 60, type: 'mage', attack: 'magic' }
  ];

  constructor(name, age) {
    // Capitalize each word in the hero's name
    this.name = name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    this.age = age;

    // Validate age; if invalid, no class or attack is assigned
    if (!this.#isValidAge()) { 
      this.type = null;
      this.attackType = null;
      return;
    }
    // Assign class and attack type based on age
    ({ type: this.type, attack: this.attackType } = this.#defineClassAndAttack());  
  }

  // Checks if age is within allowed range
  #isValidAge() {
    return this.age >= Hero.MIN_AGE && this.age <= Hero.MAX_AGE;
  }

  // Finds the matching class for the hero's age
  #defineClassAndAttack() {
    return Hero.CLASSES.find(c => this.age <= c.limit) || { type: null, attack: null };
  }

  // Returns a message describing the hero's attack or age restriction
  attack() {
    // Case 1: Too young
    if (this.age < Hero.MIN_AGE) {
      return `${this.name}, calm down, child. Your time will come! You must be between ${Hero.MIN_AGE} and ${Hero.MAX_AGE}. (Your current age is: ${this.age}).`;
    }
    // Case 2: Too old
    if (this.age > Hero.MAX_AGE) {
      return `${this.name}, you don't need to fight anymore, there are others who will protect you!`
    }
    // Case 3: Within allowed range
    return `The ${this.type} ${this.name} attacked with ${this.attackType}.`;
  }
}

// Test data: sample players with names and ages
const players = [
  ["Sonic Youth", 13],
  ["Benkei", 20],
  ["Hattori Hanzo", 30],
  ["Ragnar Lothbrok", 40],
  ["Merlin", 60],
  ["Matinta Pereira", 70],
];
// Running tests: simulate attacks for each player
console.log("--- Initiating hero simulations ---");
// Iterate through players and log the attack message for each
for (const [name, age] of players) {
  console.log(new Hero(name, age).attack());
}