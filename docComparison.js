function dockCompare(doc1, doc2) {
    const difference = {}
    const keys = new Set([...Object.keys(doc1), ...Object.keys(doc2)])
    
    const compare = (key, obj1, obj2, parent) => {

        if(!(key in obj1)){
            parent[key] = {to: obj2[key], from: 'Empty'}
        }else if(!(key in obj2)){
            parent[key] = {from: obj1[key], to: 'Empty'}
        }else if(typeof obj1[key] == 'object' && obj1[key] != null && typeof obj2[key] &&  obj2[key] != null){
            parent[key] = dockCompare(obj1[key], obj2[key])
        }else if(obj1[key] !== obj2[key]){
            parent[key] = {from: obj1[key], to: obj2[key]}
        }
    }
    keys.forEach((key) => compare(key, doc1, doc2, difference))
    return difference
}


const doc1 = {
    name: "John",
    age: 12,
    address: {
        city: "Boston",
        zip: "10001",
        country: "USA",
    },
    phone: "987-654-3210",
    friends: {
        friend1: { name: "Alice", age: 30 },
        friend2: { name: "Bob", age: 25 }
    },
    hobbies: ["table tennis"]
};

const doc2 = {
    name: "John",
    age: 14,
    address: {
        city: "New York",
        zip: "10001",
        country: "Canada",
    },
    phone: "123-456-7890",
    friends: {
        friend1: { name: "Alice", age: 30 },
        friend2: { name: "Bob", age: 26 }
    },
    country: "India"
};

console.log(dockCompare(doc1, doc2))