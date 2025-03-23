class TaskQueue{
 constructor(){
    this.queue = []
    this.completeledTask = 0;
 }

 addTask(task){
    this.queue.push(task)
 }

 async run(){
    for(let i=0;i<this.queue.length;i++){
        const task = this.queue[i]
        await task()
        this.completeledTask++
        if(this.queue.length <= this.completeledTask){
            return
        }
    }
 }

}


const taskQueue = new TaskQueue();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
taskQueue.addTask(
    () => delay(1000).then(() => console.log("Task 1 done"))
);
taskQueue.addTask(
    () => delay(2000).then(() => console.log("Task 2 done"))
);
taskQueue.addTask(
    () => delay(1500).then(() => console.log("Task 3 done"))
);
taskQueue.addTask(
    () => delay(500).then(() => console.log("Task 4 done"))
);

taskQueue.run().then((val) => console.log("All tasks completed.", val));

