console.log("Hello World!");
// Arrays to store food data
let fruits = ["apple", "banana", "orange", "grape"];
let vegetables = ["carrot", "broccoli", "spinach"];
let desserts = ["cake", "ice cream", "cookies"];

// Friend's favorite foods
let friendFavorites = [
  "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho",
  "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant",
  "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas",
  "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas",
  "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket",
  "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales",
  "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// Loop through fruits
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop through vegetables
console.log("Vegetables:");
vegetables.forEach(function(veg) {
  console.log(veg);
});

// Loop through friend's favorite foods
console.log("Friend's Favorite Foods:");
for (let i = 0; i < friendFavorites.length; i++) {
  console.log(friendFavorites[i]);
}

// Print ranking of favorite foods
console.log("Food Rankings:");
for (let i = 0; i < friendFavorites.length; i++) {
  console.log("My #" + (i + 1) + " favorite food is " + friendFavorites[i]);
}

// Function with a parameter
function showFood(foodItem) {
  console.log("Today's food is: " + foodItem);
}

// Call the function
showFood("Pizza");
showFood("Tacos");

// Use conditionals to filter desserts
console.log("Checking desserts:");
for (let i = 0; i < desserts.length; i++) {
  if (desserts[i] === "cake") {
    console.log("We found cake!");
  } else {
    console.log("Not cake: " + desserts[i]);
  }
}

// Check if friend's favorites include a specific food
if (friendFavorites.includes("Ramen")) {
  console.log("Your friend loves Ramen!");
}

// Compare array lengths
if (friendFavorites.length > fruits.length) {
  console.log("Friend has more favorite foods than the fruit list.");
} else {
  console.log("Fruit list is longer or equal.");
}

// Find a specific value
let tacoIndex = friendFavorites.indexOf("Tacos");
if (tacoIndex !== -1) {
  console.log("Tacos found at position: " + tacoIndex);
}
