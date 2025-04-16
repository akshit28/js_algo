// Input 1:
let arr =
[[1,2,3],
[4,5,6],
[7,8,9]];

// Output: In spiral
// 1,2,3,6,9,8,7,4,5
// 00,01,02,
// 12,22,21,
// 20,10,11

// Input 2:
let arr1 =  
[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]];

// Output: In spiral
// 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
// 00,01,02,03,13,23,33,32,31,30,20,10,11,12,22,21

function spiralArr(arr){
    // let pivot1 = arr[1].length-1
    // let pivot2
    // let arrLen = arr.length
    // let tempArr = Array(arrLen*2).fill(null)
    let colBegin = 0
    let colEnd = arr[1].length - 1
    let rowBegin = 0
    let rowEnd = arr.length - 1
    

    while(rowBegin <= rowEnd && colBegin <= rowEnd){
        // tempArr.push(arr[rowBegin][colBegin])
        for(let i=colBegin; i<=colEnd;i++){
            console.log(arr[rowBegin][i])
        }
        rowBegin++
        for(let i=rowBegin;i<= rowEnd;i++){
            console.log(arr[i][colEnd])
        }

        colEnd--;
        if(rowBegin <= rowEnd){
            for(let i = colEnd;i>= colBegin;i--){
                console.log(arr[rowEnd][i])
            }
        }

        rowEnd--;
        if(colBegin <= colEnd){
            for(let i=rowEnd;i >= rowBegin;i--){
                console.log(arr[i][colBegin])
            }
        }
        colBegin++
        
    }
    
}

spiralArr(arr1)