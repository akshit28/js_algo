const clone = (input) => {
    if(input === null || typeof input !== 'object') {
        return input;
    }

    let initialValue = Array.isArray(input) ? [] : {}


    return Object.entries(input).reduce((acc, key) => {
      acc[key] = clone(input[key]);
      return acc;
    }, initialValue);
}


var a = {
    // name: "prd",
    // language: "js",
    // frameworks: ["nextjs", "reactjs"]
    id: 7373, 
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
            ]
}

var b = clone(a)
console.log(b)    
console.log(a == b)





// function postCompletion(activeIndex, output){
//     responses[activeIndex] = output
//     completedTask += 1

//     if (completedTask === inputs.length){
//       callback(responses)
//       return;
//     }

//     if(index < inputs.length){
//       iterateeFn(inputs[index], postCompletion.bind(null, index))
//       index++
//     }
//   }

//   while(index < limit){
//     iterateeFn(inputs[index], postCompletion.bind(null, index))
//     index++;
//   }