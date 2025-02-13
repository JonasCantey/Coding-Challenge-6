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
    if (performanceRating === "Excellent")  {bonus = salary * 0.2} //Declared that if the performance rating is Excellent, the formula for bonus will be bonus = salary * 0.2
        
     else if (performanceRating === "Good")  {bonus = salary * 0.1} //Declared that if the performance rating is good, the formula for bonus will be bonus = salary * 0.1
     else if (performanceRating === "Average") {bonus = salary * 0.05}  //Declared that if the performance rating is average, the formula for bonus will be bonus = salary * 0.05
     else { bonus = 0}
     return `Bonus: $${bonus.toFixed(2)}`  //The function will now return the bonus to a rounded hundreths decimal place
    }

console.log(calculateBonus(5000, "Excellent"))
console.log(calculateBonus(7000, "Good"))

//Task 4
console.log("Task 4")

function calculateSubscriptionCost(plan, months, discount) {
    let bonus; 
    if (plan === "Enterprise")  {cost = (50 * months) - discount } //declared that if the plan is Enterprise, the formula for cost will be cost = (50 * months) - discount
        
     else if (plan === "Premium")  {cost = (20 * months) - discount} //declared that if the plan is Premium, the formula for cost will be cost = (20 * months) - discount
     else if (plan === "Basic") {cost = (10 * months) - discount} //declared that if the plan is Basic, the formula for cost will be cost = (10 * months) - discount
     else { cost = 0}
     return `Total cost: $${cost.toFixed(2)}` //This will now return cost rounded to the hundreths place
    }

console.log(calculateSubscriptionCost("Basic", 6, 10))
console.log(calculateSubscriptionCost("Premium", 12, 0))

//Task 5
console.log("Task 5")

function convertCurrency(amount, conversionRate) {  //created a function that takes inputs amount and conversionRate
    return (amount * conversionRate).toFixed(2)     //and multiplies them together. Then rounds to the nearest hundreths place
}

console.log(`Converted amount: $${convertCurrency(100, 1.1)}`)
console.log(`Converted amount: $${convertCurrency(250, .85)}`)

//Task 6
console.log("Task 6")

let orders = [200, 600, 1200, 450, 800];        //Declared the orders array with values
const applyBulkDiscount = (orders, discountFunction) => {   //This function makes it so that the next function will apply to each value in the orders array
    return orders.map((amount) => discountFunction(amount));
};

const discountFunction = (amount) => {      //This function says that if the order is above 500, apply a 10% discount
    return amount > 500 ? amount * 0.9 : amount;
}

const discountedOrders = applyBulkDiscount(orders, discountFunction); //declared a discountedOrders variable for logging purposes
console.log(`Discounted orders: ${discountedOrders}`)

//Task 7
console.log("Task 7")

const createExpenseTracker = () => {    //created a function createExpenseTracker and declared
let totalExpense = 0                    //the starting total expense as 0. Then made an addExpense
const addExpense = (amount) => {        //function that took the total expense and added the amount
    totalExpense += amount;             //I then had the updated total expense returned.
    return `Total Expenses: $${totalExpense}`
};
    return addExpense;      //Returned the inner function
};
let tracker = createExpenseTracker();
console.log(tracker(200));
console.log(tracker(150));

//Task 8
console.log("Task 8")

function calculateYearsToPromotion (employeeLevel) {    //created a function calculateYearsToPromotion
    return (10 - employeeLevel) * 2                     //which takes desired level (level 10) and subtracts current level
}                                                       //and then multiplies the difference by 2 because each level takes 2 years

console.log(`Years till level 10: ${calculateYearsToPromotion(7)}`)
console.log(`Years till level 10: ${calculateYearsToPromotion(5)}`)

