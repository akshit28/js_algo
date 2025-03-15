// const findSum = (arr, target) => {
//     let isFound = false;

//     arr.sort()
//     let low = 0;
//     let high = arr.length - 1

//     while(low < high){
//         if(arr[low] + arr[high]  === target){
//             isFound = true;
//             break;
//         }

//         if(arr[low] + arr[high] < target){
//             low++;
//         }else{
//             high--;
//         }
//     }

//     return isFound;
// }

const findSum = (arr, target) => {
    let isFound = false;
    let hasMap = new Set()

    for(let i=0;i<arr.length;i++){

        if(hasMap.has(target - arr[i])){
            isFound = true;
            break;
        }

        hasMap.add(arr[i])
    }

    return isFound;
}


console.log(findSum([15,4,9,3,2,12,11,14,21,24,1,10], 25))
console.log(findSum([15,4,9,3,2,12,11,14,21,24,1,10], 100))