// TALLEST MOUNTAIN
// Creating a new interface, called Mountain
interface Mountain {
  name: string;
  height: number;
}

// Declare an array of mountains
const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

// Declare a function to return a string with the name of the tallest mountain
function findNameOfTallestMountain(mountainsArray: Mountain[]) {
  let tallest = null;

  // Loop through all of the mountains
  for (let mountain of mountainsArray) {
    // If no tallest has been found one, then the first one is the tallest
    if (!tallest) {
      tallest = mountain;
    }
    // Then compare the current tallest to the height of the next one in the loop, if it's taller, make it the new tallest moutain
    if (mountain.height > tallest.height) {
      tallest = mountain;
    }
  }
  // Return the name of the tallest mountain
  return tallest?.name;
}

const tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

// PRODUCTS
// Creating a new interface, called Product
interface Product {
  name: string;
  price: number;
}

// Declare an array of products
const products: Product[] = [
  {
    name: "milk",
    price: 2,
  },
  {
    name: "bread",
    price: 3,
  },
  {
    name: "cheese",
    price: 4,
  },
  {
    name: "cereal",
    price: 3,
  },
  {
    name: "cookies",
    price: 2,
  },
];

// Declare a function that takes in an array of products and returns the average price of all products
function calcAverageProductPrice(productsArray: Product[]): number {
  // Declare a variable for the total cost of all the items in the products array
  let productPriceTotal: number = 0;

  // Loop through the array of products and add the price of each product to the productPriceTotal
  for (let product of productsArray) {
    productPriceTotal += product.price;
  }

  // Create a variable to calculate the average cost of all the products
  const average: number = productPriceTotal / productsArray.length;

  // If the array is empty, return 0. Else, return the average.
  if (productsArray.length === 0) {
    return 0;
  } else {
    return average;
  }
}

const productsAverage: number = calcAverageProductPrice(products);
console.log(productsAverage);
