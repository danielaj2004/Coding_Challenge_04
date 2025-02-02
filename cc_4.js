//Task 1
let purchaseAmount = 150; // output: the amount of purchase
let finalAmount = purchaseAmount;  // output: final amount after discount

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.60; // 40% discount
    console.log("Discount Applied")
}
console.log(`Total amount after discount: $${finalAmount}`);