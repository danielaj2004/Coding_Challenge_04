//Task 1
let purchaseAmount = 150; // output: the amount of purchase
let finalAmount = purchaseAmount;  // output: final amount after discount

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.60; // 40% discount
    console.log("Discount Applied")
}
console.log(`Total amount after discount: $${finalAmount}`);

// Task 2
let sales = [196, 208, 230, 147, 104]; // array of sales
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}
console.log(`Total Sales: $${totalSales}`); // Output: total sales

// Task 3
let stock = 10; // current stock available 
while (stock > 0) {
    console.log(`Stock remaining: $(stock)`);
    stock--; // decreases by 1
}
console.log("Stock decreased")

// Task 4
let responses = 0;
do {
    console.log(`Gathering responses: ${responses}`);
    responses++;
} while (responses < 3)

// Task 5
let employee = {
    name: "Martha",
    position: "HR",
    salary: 80000
}; // object employee
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6
let products = ["paper", "pen", "pencil"]; // output: names of the items
for (let product of products) {
    console.log(`Product: ${product}`);
}

//Task 7
let orders = [123, 321, 213]; // array of order IDs
orders.forEach(order => {
    console.log(`order ID: ${order}`)
}); // log for the order IDs

// Task 8
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let tax = calculateTax(800, 0.07); 
console.log(`Tax: $${tax}`);

//Task 9
const applyDiscount = function(price, discountPercentage){
    return price - (price * (discountPercentage / 50));
};
let discountedPrice = applyDiscount (50, 10)
console.log(`Discounted price: $${discountedPrice}`);

// Task 10
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
};
let points = calculatePoints(450);
console.log(`Rewards member points: ${points}`);