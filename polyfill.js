Array.prototype.myMap = function(cb){
    var arr = [...this]

    let temp = []

    for (let i = 0; i < arr.length; i++) {
        temp.push(cb(arr[i], i, arr))
    }

    return temp
}

Array.prototype.myFilter = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) temp.push(this[i])
    }

    return temp;
}


const nums = [1,2,3,4]

// const multiplyNums = nums.myFilter((num, i, arr) => num > 2)

// console.log(multiplyNums)


// arr.reduce((acc, curr, index,array) => {}, intialValue)

Array.prototype.myReduce = function(cb, initialValue){
    let accumulator = initialValue
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator, this[index], index, this) : this[index]
    }

    return accumulator
}

const sum = nums.myReduce((acc, curr, i, arr) => acc+curr, 0)

// console.log(sum)

Function.prototype.myCall = function(obj, ...args){
    // return this.apply(obj, [...args])
    obj.fn = this
    obj.fn(...args)
}

let car1 = {
    color: 'red',
    company: 'Ferrari'
}

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} ${this.company} for ${currency} ${price}`)
}



Function.prototype.myApply = function(obj, argArray){
    obj.fn = this
    obj.fn(...argArray)
}



Function.prototype.myBind = function(obj, ...args){
    obj.fn = this
    return function(...newArgs){
        return obj.fn(...args, ...newArgs)
    }
}

let ak = purchaseCar.myBind(car1)

ak('USD', 100000)

let once = function(fn, context){
    let ran;

    return function(){
        if(fn){
            ran = fn.apply(context || this, arguments)
            fn = null
        }

        return ran
    }
}

const hello = once((a, b)=> console.log("Hello", a,b))

hello(1,2)
hello(1,2)
hello(1,2)
hello(1,2)
hello(1,2)

function myMemoize(fn) {
    let cache = {}

    return function(...args) {
        let key = JSON.stringify(...args)
        if(cache[key]){
            console.log("From cache")
            return cache[key]
        }else{
            let result = fn(...args)
            cache[key] = result
            return result
        }
    }
}

const clumsySquare = function(num1, num2){
    for (let index = 0; index <= 10000 ; index++) {
        
    }

    return num1 * num2
}


// let squ = myMemoize(clumsySquare)
// console.log(squ(1,2))
// console.log(squ(2,2))
// console.log(squ(1,2))


function promisePolyfill(executor){
  let onResolve, onReject,
    isFulfilled = false,
    isCalled = false,
    value;

    function resolve(val){
        isFulfilled = true
        value = val
        if(typeof onResolve === 'function'){
            isCalled = true
            queueMicrotask(()=> onResolve(value))
        }
    }

    function reject(val){
        isFulfilled = true
        value = val
        if(typeof onReject === 'function'){
            isCalled = true
            queueMicrotask(()=> onReject(value))
        }
    }

    this.then = function(callback){
        return new promisePolyfill((resolve, reject) => {
            onResolve = (val) => {
                try {
                    let result = callback(val)
                    if(result instanceof promisePolyfill){
                        result.then(resolve).catch(reject)
                    }else{
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(() => onResolve(value))
            }

        })
    }

    this.catch = function(callback){
        return new promisePolyfill((resolve, reject) => {
            onReject = (val) => {
                try {
                    let result = callback(val)
                    if(result instanceof promisePolyfill){
                        result.then(resolve).catch(reject)
                    }else{
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(() => onReject(value))
            }

        })
    }

    // this.all = function(promiseList){
    //     let result = []
    //     let count = 0
    //     return new promisePolyfill((resolve, reject) => {
    //         promiseList.forEach((promise, index) => {
    //             promise.then((val) => {
    //                 result[index] = val
    //                 count++
    //                 if(count == promiseList.length){
    //                     resolve(result)
    //                 }
    //             }).catch((error) => reject(error))
    //         });
    //     })
    // }

    executor(resolve, reject)
}

promisePolyfill.all = function(promiseList){
    let result = []
    let count = 0
    return new promisePolyfill((resolve, reject) => {
        promiseList.forEach((promise, index) => {
            promise.then((val) => {
                result[index] = val
                count++
                if(count == promiseList.length){
                    resolve(result)
                }
            }).catch((error) => reject(error))
        });
    })
}

const example = new promisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved 1")
    }, 1000);
})

example.then((val) => {
    console.log("first then", val)
    return 2
}).then((val)=> {
    console.log("2 then",val)
}).catch((err) => {
    console.log(err)
})

function task(time){
    return new promisePolyfill((resolve, reject)=>{
        setTimeout(() => {
            // if(time > 4000){
            //     reject('Rejected')
            // }else{
                resolve(time)
            // }
        }, time);
    })
}


const taskList = [
    task(1000),
    task(5000),
    task(3000)
]

promisePolyfill.all(taskList).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})




function myPromisePolyfill(executor){
    let onResolve, onReject, isFulfilled = false, isCalled = false, value;

    function resolve(val){
        isFulfilled = true
        value = val
        if(typeof onResolve == 'function'){
            isCalled = true
            queueMicrotask(()=> onResolve(value))
            onResolve(value)
        }
    }

    function reject(val){
        isFulfilled = true
        value = val
        if(typeof onReject == 'function'){
            isCalled = true
            queueMicrotask(()=> onReject(value))
            
        }
    }

    this.then = function(callback){
        return new myPromisePolyfill((resolve, reject)=> {
            onResolve = (val) => {
                try {
                    let result = callback(val)
                    if(result instanceof myPromisePolyfill){
                        result.then(resolve).catch(reject)
                    }else{
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(() => onResolve(val))
            }
        })
    }

    this.catch = function(callback){
        return new myPromisePolyfill((resolve, reject) => {
            onReject = (val) => {
                try{
                    let result = callback(val)
                    if(result instanceof myPromisePolyfill){
                        result.then(resolve).catch(reject)   
                    }
                }catch(error){
                    reject(error)
                }
            }

            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(() => onReject(val))
            }
        })
    }

    executor(resolve, reject)
}