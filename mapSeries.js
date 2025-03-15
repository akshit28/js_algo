// const mapSeries = (arr, fn) => {
//     return new Promise((resolve, reject) => {
//         // const output = []

//         const final = arr.reduce((acc, current) => {
//             return acc.then((val) => {
//                 return new Promise((resolve, reject) => {
//                     fn(current, (error, result) => {
//                         if (error) {
//                             reject(error)
//                         }else{
//                             resolve([...val, result])
//                         }
//                     })
//                 })
//             })
//         }, Promise.resolve([]))

//         final.then((result) => {
//             resolve(result)
//         }).catch((error) => {
//             reject(error)
//         })
//     })
// }


const mapSeries = (arr, fn) => {
    return new Promise((resolve, reject) => {
        const final = arr.reduce((acc, current) => {
            return acc.then((val) => {
                return new Promise((resolve, reject) => {
                    fn(current, (error, result) => {
                        if(error){
                            reject(error)
                        }else{
                            resolve([...val, result])
                        }
                    })
                })
            })
        }, Promise.resolve([]))

        final.then((result) => {
            resolve(result)
        }).catch((error) => {
            reject(error)
        })
    })
}

let numPromise = mapSeries([1,2,3,4,5], function(num, callback){
    setTimeout(function () {
        num = num * 2
        console.log(num)

        if(num === 12){
            callback(true)
        }else{
            callback(null, num)
        }
    }, 1000);
})

numPromise.then((result) => {
    console.log("success" + result)
}).catch(() => console.log("no success"))