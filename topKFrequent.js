var topKFrequent = function(nums, k) {
    let hashMap = new Map()
    // let len = nums.length
    // let mostFrequent = 0;
    // let mostFrequentNum = 0

    for(let num of nums){
        hashMap.set(num, (hashMap.get(num) || 0) + 1)
    }

    let minHeap = []

    for(let [num, freq] of hashMap){
        minHeap.push([freq, num])
        minHeap.sort((a, b) => a[0] - b[0])

        if(minHeap.length > k){
            minHeap.shift()
        }
    }

    // for(let i=0;i<len;i++){
    //     if(hashMap.has(nums[i])){
    //         hashMap.set(nums[i],hashMap.get(nums[i])+1)
    //     }else{
    //         hashMap.set(nums[i],1)
    //     }
    // }

    // for(let [key, value] of hashMap){
    //     if(value > mostFrequent){
    //         mostFrequent = value
    //         mostFrequentNum = key   
    //     }
    // }
    return minHeap.map(([freq, num]) => num)
};

console.log(topKFrequent([1,1,1,2,2,3], 2))