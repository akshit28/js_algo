const csv = `userId, name, item, quantity, price
1, John Doe, apple, 3, 1.50
2, Jane Smith, orange, 1, 0.99
1, John Doe, banana, 2, 0.75
2, Jane Smith, apple, 1, 1.50
3, Mark Turner, orange, 5, 0.99`;

const parseAndTransformCSV = (csv) => {
 const obj = {}

 const csvArray = csv.split('\n')
 const objKeys = csvArray[0].split(',')

 for(let i=1;i<csvArray.length;i++){
    const currentArray = csvArray[i].split(',').map(item => item.trim())
    let userId = currentArray[0]
    let name = currentArray[1]
    let item = currentArray[2]
    let totalQuantity = parseInt(currentArray[3])
    let totalPrice = (parseFloat(currentArray[4])  * totalQuantity).toFixed(2)

    if(!obj[userId]){
        obj[userId] = {
            userId,
            name,
            purchases: []
        }
    }

    obj[userId].purchases.push({
        item,
        totalQuantity,
        totalPrice
    })
    
 }

 return Object.values(obj)
}

console.log(parseAndTransformCSV(csv))
// [
//     {
//       userId: 1,
//       name: "John Doe",
//       purchases: [
//         { item: "apple", totalQuantity: 3, totalPrice: 4.50 },
//         { item: "banana", totalQuantity: 2, totalPrice: 1.50 }
//       ]
//     },
//     {
//       userId: 2,
//       name: "Jane Smith",
//       purchases: [
//         { item: "orange", totalQuantity: 1, totalPrice: 0.99 },
//         { item: "apple", totalQuantity: 1, totalPrice: 1.50 }
//       ]
//     },
//     {
//       userId: 3,
//       name: "Mark Turner",
//       purchases: [
//         { item: "orange", totalQuantity: 5, totalPrice: 4.95 }
//       ]
//     }
//   ]