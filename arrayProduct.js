const arrayProduct = (nums) => {
    let output = []
    let len = nums.length
    let left = []
    let right = []

    left[0] = nums[0]
    right[len-1] = nums[len-1]

    for(let i=1;i<len;i++){
        left[i] = left[i-1]*nums[i]
    }

    for(let i=len-2;i>0;i--){
        right[i] = nums[i] * right[i+1]
    }

    output[0] = right[1]
    output[len-1] = left[len-2]

    for(let i=1;i<len-1;i++){
        output[i] = left[i-1] * right[i+1]
    }
    return output
}


console.log(arrayProduct([1,2,3,4]))
console.log(arrayProduct([-1,1,0,-3,3]))

// let output = []
    // let left = []
    // let right = []
    // let len = nums.length

    // left[0] = nums[0]
    // right[len-1] = nums[len-1]

    // for (let i=1; i<len;i++){
    //     left[i] = left[i-1] * nums[i]
    // }

    // for(let i=len-2;i>0;i--){
    //     right[i] = right[i+1] * nums[i]
    // }

    // output[0] = right[1]
    // output[len-1] = left[len-2]

    // for (let i=1;i <len-1;i++){
    //     output[i] = left[i-1] * right[i+1]
    // }

    // return output