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
