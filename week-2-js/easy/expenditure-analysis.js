/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = new Map();

  transactions.forEach((transaction) => {
    let category = transaction.category;
    let price = transaction.price;
    if (categoryTotals.has(category)) {
      categoryTotals.set(category, categoryTotals.get(category) + price);
    } else {
      // If the category doesn't exist, set the initial total to the current price
      categoryTotals.set(category, price);
    }
  });

  // Convert the map into an array of objects
  const result = Array.from(categoryTotals, ([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
