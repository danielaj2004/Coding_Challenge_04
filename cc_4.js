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
