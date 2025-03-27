
const retryPromise = (fn, limit, delay) => {
    let retry = limit
    return new Promise((resolve, reject)=>{
        let attempt = (retry) => {
            fn()
            .then((val)=> resolve(val))
            .catch((error) => 
                {   
                    if(retry){
                        setTimeout(() => {
                            attempt(retry)
                        }, delay)
                        retry--
                    }else{
                        reject(error)
                    }       
                }
            )
        }
        attempt(retry)

    })
}


const fetchdata = () => {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5
        console.log("success", success)
        if(success){
            resolve("data fetched successfully")
        }else{
            reject("failed!!!")
        }
    })
}

retryPromise(fetchdata, 3, 1000).then(
    (result) => console.log("result", result),
    (error) => console.log("error", error)
)

