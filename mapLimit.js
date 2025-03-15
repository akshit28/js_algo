const chopped = (arr, limit) => {
    let i = 0;
    let output = []

    while(i < arr.length) {
        output.push(arr.slice(i, i+limit))
        i += limit
    }

    return output
}

let mapLimit = (arr, limit, fn) => {
    let chop = chopped(arr, limit)

    return new Promise((resolve, reject) => {
        let final = chop.reduce((a,b)=>{
            return a.then((val)=>{
                return new Promise((resolve, reject) => {
                    const result = []
                    let taskCompleted = 0

                    b.forEach((e)=>{
                        fn(e, (error, value) => {
                            if(error){
                                reject(error)
                            }else{
                                result.push(value)
                                taskCompleted++
                                if(taskCompleted >= b.length){
                                    resolve([...val, ...result])
                                }
                            }
                        })
                    })
                })
            })
        }, Promise.resolve([]))

        final.then((result) => resolve(result)).catch((e) => reject(e))
    })
}


let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
    // i am async iteratee function
    // do async operations here
    setTimeout(function () {
        num = num * 2;
        console.log(num);
        callback(null, num);
    }, 2000); });


  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));

    // let ak = [1,2,3,4,5]
    // console.log(ak.chop(3))