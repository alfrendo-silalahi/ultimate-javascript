'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // immediately destructuring object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Sporting Lisbon',
//   starterIndex: 2,
// });

///// REST PATTERN AND PARAMETERS
/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, 3, 4, 5, 6];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// functions
const add = function (...numbers) {
  const sum = numbers.reduce((prev, currentValue) => prev + currentValue, 0);
  console.log(sum);
};
add(2, 5, 6, 7);
add(5, 4, 5, 6, 5, 3, 2, 2);

const numbers = [5, 6, 7, 8, 7];
add(...numbers);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

///// SPREAD OPERATOR
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// spread operator will not modifying original array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array with spread operator
const mainMenyCopy = [...restaurant.mainMenu];

// join two arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets. NOT objects
const str = 'Alfrendo';
console.log(...str, 'S.', 'S.');

const ingredients = [
  prompt("Let' make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// objects with spread operator
const newRestaurant = { ...restaurant, founder: 'Alfrendo Silalahi' };
console.log(newRestaurant);

// copy object using spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);
*/

///// DESTRUCTURING OBJECT
/*
const { name, categories, openingHours } = restaurant;
console.log({ name, categories, openingHours });

// rename properties after destructuring object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log({ restaurantName, hours, tags });

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log({ menu, starters });

// mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log({ a, b });

// nested destructuring object
const {
  fri: { open, close },
} = openingHours;
console.log({ open, close });
*/

///// DESTRUCTURING ARRAYS
/*
const numbers = [1, 2, 3];
const a = numbers[0];
console.log(a);

const [x, y, z] = numbers; // will not affect the original array
console.log({ x, y, z });
console.log(numbers);

// skip some value from array
const [main, _, secondary] = restaurant.categories;
console.log({ main, secondary });

// destructuring array from function expression
const [starter, mainCourse] = restaurant.order(2, 0);
console.log({ starter, mainCourse });

// nested destructuring array
const nestedNumbers = [[1, 2], [3, 4], 5, 6];
const [[i, k], j] = nestedNumbers;
console.log({ i, k, j });

// default values
const [p, q, r, s = 100] = numbers;
console.log({ p, q, r, s });
*/
