// Declare an array of mountains
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
// Declare a function to return a string with the name of the tallest mountain
function findNameOfTallestMountain(mountainsArray) {
    var tallest = null;
    // Loop through all of the mountains
    for (var _i = 0, mountainsArray_1 = mountainsArray; _i < mountainsArray_1.length; _i++) {
        var mountain = mountainsArray_1[_i];
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
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
// Declare an array of products
var products = [
    {
        name: "milk",
        price: 2
    },
    {
        name: "bread",
        price: 3
    },
    {
        name: "cheese",
        price: 4
    },
    {
        name: "cereal",
        price: 3
    },
    {
        name: "cookies",
        price: 2
    },
];
// Declare a function that takes in an array of products and returns the average price of all products
function calcAverageProductPrice(productsArray) {
    // Declare a variable for the total cost of all the items in the products array
    var productPriceTotal = 0;
    // Loop through the array of products and add the price of each product to the productPriceTotal
    for (var _i = 0, productsArray_1 = productsArray; _i < productsArray_1.length; _i++) {
        var product = productsArray_1[_i];
        productPriceTotal += product.price;
    }
    // Create a variable to calculate the average cost of all the products
    var average = productPriceTotal / productsArray.length;
    // If the array is empty, return 0. Else, return the average.
    if (productsArray.length === 0) {
        return 0;
    }
    else {
        return average;
    }
}
var productsAverage = calcAverageProductPrice(products);
console.log(productsAverage);
