//Task 1
console.log("Task 1")

function calculateProfit(costPrice, sellingPrice, unitsSold) {  //Created function that takes selling price
    return (sellingPrice - costPrice) * unitsSold               //and subtracts cost price and then multiplies by units sold
}

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`)   //Console logged and input some values
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`)   //Console logged again with different values


//Task 2
console.log("Task 2")

function calculateSalesTax(amount, taxRate) {   //Created a function that takes an amount and multiplies by tax rate to find tax amount
    return (amount * taxRate).toFixed(2);       //added a .toFixed(2) to round to the nearest hundreths place. Did this because kept getting output 7.00001
}

console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`)
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`)

//Task 3
console.log("Task 3")

function calculateBonus(salary, performanceRating) {
    let bonus; 
    if (performanceRating === "Excellent")  {bonus = salary * 0.2}
        
     else if (performanceRating === "Good")  {bonus = salary * 0.1}
     else if (performanceRating === "Average") {bonus = salary * 0.05} 
     else { bonus = 0}
     return `Bonus: $${bonus.toFixed(2)}`
    }

console.log(calculateBonus(5000, "Excellent"))
console.log(calculateBonus(7000, "Good"))

