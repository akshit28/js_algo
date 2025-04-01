const arr = [1, 2, 3, 4]

function shuffle(arr) {
    for(let i=0;i<arr.length;i++){
        let k = i + Math.floor(Math.random() * (arr.length - i));
        [arr[i], arr[k]] = [arr[k], arr[i]]
    }

    return arr
  }

console.log(shuffle(arr))