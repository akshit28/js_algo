const printTriplets = function(arr, sum){
    arr = arr.sort((a,b) => a-b);

    for(let i=0;i<arr.length;i++){
        let k = sum - arr[i];

        let low = i + 1
        let high = arr.length - 1
        
        while(low < high){
            if(arr[low] + arr[high] < k){
                low++
            }else if(arr[low] + arr[high] > k){
                high--
            }else{
                console.log(arr[low], arr[high], arr[i])
                low++
                high--
            }
        }
    }
}

printTriplets([1,2,3,5,6,11,15,17,18], 20)