const throttle = (arr, limit, delay) => {

    let taskArray = []
    let executeTime = null
    
    let queueTask = (arr) => {
        taskArray.push(arr)

        if(executeTime && executeTime - Date.now() > delay){
            executeTask(taskArray.splice(0,limit))
        }
    }

    let executeTask = (tasks) => {
        for(let i =0;i<tasks.length;i++){
            console.log("task executed", tasks[i])
        }
        executeTime = Date.now()
    }

    queueTask(arr)

}




const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 5;

throttle(task, count, 2000); // [1, 2, 3, 4, 5] // immediately 
throttle(task, count, 2000); // [6, 7, 8, 9, 10] // after 2 seconds
throttle(task, count, 2000); // [1, 2, 3, 4, 5] // after 2 seconds 