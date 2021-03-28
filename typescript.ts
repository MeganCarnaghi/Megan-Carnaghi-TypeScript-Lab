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
  // If the array is empty, return "". Else, return the name of the tallest mountain.
  if (mountainsArray.length === 0) {
    return "";
  } else {
    return tallest?.name;
  }
}

// Call function and pass in mountains array as argument. Store result in variable and console.log it.
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

// Call function and pass in products array as argument. Store result in variable and console.log it.
const productsAverage: number = calcAverageProductPrice(products);
console.log(productsAverage);

// INVENTORY
// Create a new interface called InventoryItem
interface InventoryItem {
  product: Product;
  quantity: number;
}

// Declare an array called inventory which is an array of type InventoryItem
const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

// Declare a function that takes in an array of InventoryItem objects and returns the
// total value of all products in the inventory
function calcInventoryValue(inventoryItemsArray: InventoryItem[]): number {
  // Declare a variable for the itemPrice (item in array * its quantity)
  let itemPrice: number = 0;
  // Declare a variable for the totalPrice of all the items in the cart
  let totalPrice: number = 0;

  // Loop through the array and, for each item, calculate the itemPrice and add it to the totalPrice
  for (let item of inventoryItemsArray) {
    itemPrice = item.product.price * item.quantity;
    totalPrice += itemPrice;
  }

  // If the array is empty, return 0. Else, return the totalPrice.
  if (inventoryItemsArray.length === 0) {
    return 0;
  } else {
    return totalPrice;
  }
}

// Call function and pass in inventory array as argument. Store result in variable and console.log it.
const totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);
