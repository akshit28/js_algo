let obj_O = 
{ id: 7373, 
data: [ 
  { type: "1", id: 73 }, 
  { name: "xyz", type: "23", vas_id: 73, x_data: [
    { id: 72, 
        data: { 
            xx_data: { 
                id: 673, a: ["id"] } } }, "id"], 
            },
         "abc",
          "id",
           123, 
         { id: { data: 123, id: ["a", "b"] } }, 
        ], 
        };

function addSuffix(obj, suffix){
  if(Array.isArray(obj)){
    return obj.map(item => addSuffix(item, suffix))
  }else if(obj && typeof obj == 'object'){
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key+suffix
      acc[newKey] = addSuffix(obj[key], suffix)
      return acc
    }, {})
  }

  return obj
}

// function addSuffix(obj, suffix){
//    if(Array.isArray(obj)){
//     return obj.map(item => addSuffix(item, suffix))
//    }else if(obj && typeof obj === 'object'){
//     return Object.keys(obj).reduce((acc, key) => {
//         const newKey = key + suffix;
//         acc[newKey] = addSuffix(obj[key], suffix);
//         return acc;
//     }, {})
//    }

//    return obj
// }

console.log(JSON.stringify(addSuffix(obj_O, '_new')))