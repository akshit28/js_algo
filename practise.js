

Array.prototype.myMap = function(cb){
    let tempArray = [...this]
    let tempArrayLen = tempArray.length
    let temp = []

    for(let i=0;i<tempArrayLen;i++){
        temp.push(cb(tempArrayLen[i], i , tempArray))
    }

    return temp
}


Array.prototype.myFilter = function(cb){
    let tempArray = [...this]
    let tempArrayLen = tempArray.length
    let temp = []

    for(let i=0;i<tempArrayLen;i++){
        if(cb(tempArrayLen[i], i , tempArray)) temp.push(tempArrayLen[i])
    }

    return temp

}


Array.prototype.myReduce = function(cb, initialValue){
    let tempArray = [...this]
    let tempArrayLen = tempArray.length
    let accumulator = initialValue
    for(let i=0;i<tempArrayLen;i++){
        accumulator = accumulator ? cb(accumulator, tempArray[index], index) : tempArray[index]
    }   

    return accumulator
}

Function.prototype.myCall = function(obj, args){
    obj(...args)
}

function rangeOfNumbers(startNum, endNum){
    if(startNum > endNum){
        return []
    }else{
        return [startNum, ...rangeOfNumbers(startNum+1, endNum)]
    }

}

// console.log(rangeOfNumbers(0,5))

const fib = function(n){
    let arr = [0,1]
    for(let i=2;i<=n;i++){
        arr.push(arr[i-2]+ arr[i-1])
    }

    return arr[n]
}

const fibRecursion = (n) => {
    if(n<=1) return n;
    return fibRecursion(n-1) + fibRecursion(n-2)
}

// console.log(fib(5))
console.log(fibRecursion(15))

const reverseString = (str) => {
    if(str== ''){
        return ""
    }else{
        return reverseString(str.substr(1))+str.charAt(0)
    }
}

console.log(reverseString('hello'))

function subSets(nums){
    let result = []
    let temp = []

    function recursiveSubset(nums, i){
        if(i === nums.length){
            return result.push([...temp])
        }

        temp.push(nums[i])
        recursiveSubset(nums, i+1)
        temp.pop()
        recursiveSubset(nums, i+1)
    }
    recursiveSubset(nums,0)
    return result
}

console.log(subSets([1,2,3]))