const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() {
  return `Hello, I'm ${this.name}!`;
}
console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
update.call(madeline, 1942, "actress");

console.log(madeline);
