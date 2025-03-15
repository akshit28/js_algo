class TaskRunner {
    constructor(concurrency) {
      // write your code below
      this.concurrency = concurrency
      this.runningTask = 0
      this.queue = []
    }
  
    async push(task){
        if(this.runningTask < this.concurrency){
            await this.execute(task)
        }else{
            this.queue.push(task)
        }
    }

    async execute(task){
        this.runningTask += 1;
        try{
            await task()
        }finally{
            this.runningTask -= 1
            if(this.queue.length > 0 && this.runningTask < this.concurrency){
                this.execute(this.queue.shift())
            }
        }
    }
  }

  const ex = new TaskRunner(3);

// Simulated async tasks
const t1 = async () => { console.log('t1 started'); await delay(2000); console.log('t1 finished'); };
const t2 = async () => { console.log('t2 started'); await delay(1000); console.log('t2 finished'); };
const t3 = async () => { console.log('t3 started'); await delay(1500); console.log('t3 finished'); };
const t4 = async () => { console.log('t4 started'); await delay(1000); console.log('t4 finished'); };
const t5 = async () => { console.log('t5 started'); await delay(500); console.log('t5 finished'); };

// Add tasks to the executor
ex.push(t1);  // Starts immediately
ex.push(t2);  // Starts immediately
ex.push(t3);  // Starts immediately
ex.push(t4);  // Waits until at least one task finishes
ex.push(t5);  