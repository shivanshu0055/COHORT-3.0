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
  let ans=[]
  for(let i=0;i<transactions.length;i++){
    let obj=transactions[i]
    let cate=obj.category
    let pri=obj.price
    let flag=0;
    let foundObject = ans.find((obj) => (obj.category == cate));
    if(foundObject){
      foundObject.totalSpent+=pri
    }
    else{
    ans.push({
      category:cate,
      totalSpent:pri
    })
  }
    } 
return ans;
}


module.exports = calculateTotalSpentByCategory;
