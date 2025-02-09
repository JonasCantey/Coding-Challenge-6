//Task 1
console.log("Task 1")

function calculateProfit(costPrice, sellingPrice, unitsSold) {  //Created function that takes selling price
    return (sellingPrice - costPrice) * unitsSold               //and subtracts cost price and then multiplies by units sold
}

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`)   //Console logged and input some values
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`)   //Console logged again with different values
