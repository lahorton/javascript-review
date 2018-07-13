// print string
let greeting = 'Greetings Human!';

// split into characters
greeting.split("");

// join into a string
let characters = ['H', 'e', 'l', 'l', 'o'];
characters.join('');

// generate a random number from an array
let randomArray = [1, 3, 5, 3, 6, 3, 7, 88, 35, 43];
let randomNum = randomArray[Math.floor(Math.random() * randomArray.length)];

// swap a two numbers from an array

function randomNumSwap(randomArray) {
  let ranOne = Math.floor(Math.random() * randomArray.length);
  let ranTwo = Math.floor(Math.random() * randomArray.length);
  let item2 = randomArray[ranTwo];
  let item1 = randomArray[ranOne];
  randomArray[ranTwo] = item1;
  randomArray[ranOne] = item2;

  // let temp = randomArray[ranOne];
  // randomArray[ranOne] = randomArray[ranTwo];
  // randomArray[ranTwo] = temp;
  return randomArray;
}

// create an empty map and assign it to the variable candy
const candy = new Map();

candy.set('Red', 'Strawberry');
candy.set('Yellow', 'Lemon');
candy.set('Blue', 'Blueberry');
candy.set('Orange', 'Orange');
candy.set('Green', 'Apple');

candy.forEach((color, flavor) => {
	console.log(`The ${flavor} flavor is colored ${color}.`);
});

function colorFlavors(color, candy) {
  if (candy.has(color)) {
      return candy.get(color);
  } else {
      return console.log('Sorry, that color has no flavor.');
  }
}

let colors = ["Purple" , "Pink", "Blue", "White", "Yellow"];

function colorFinder(colors) {
	let flavors = [];
	colors.forEach((color) => {
		if (candy.has(color)) {
			flavors.push(candy.get(color));
		} else {
			flavors.push(null);
		}
	});
	return flavors;
}