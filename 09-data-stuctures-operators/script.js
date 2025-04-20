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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Sporting Lisbon',
  starterIndex: 2,
});

///// DESTRUCTURING ARRAYS
// const numbers = [1, 2, 3];
// // const a = numbers[0];
// // console.log(a);

// const [x, y, z] = numbers; // will not affect the original array
// console.log({ x, y, z });
// console.log(numbers);

// // skip some value from array
// const [main, _, secondary] = restaurant.categories;
// console.log({ main, secondary });

// // destructuring array from function expression
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log({ starter, mainCourse });

// // nested destructuring array
// const nestedNumbers = [[1, 2], [3, 4], 5, 6];
// const [[i, k], j] = nestedNumbers;
// console.log({ i, k, j });

// // default values
// const [p, q, r, s = 100] = numbers;
// console.log({ p, q, r, s });

///// DESTRUCTURING OBJECT
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
