class Queue{
    constructor(){
        this.item = []
        this.front = 0;
        this.rear = -1
        this.count = 0
    }

    enqueue(elem){
        this.item[++this.rear] = elem
        this.count++
    }

    dequeue(){
        let current = this.front++;
        let temp = this.item[current]
        this.item.shift()
        this.count--;
        // return temp;
    }

    front(){
        return this.item[front];
    }

    isEmpty(){
        return this.count == 0;
    }

    print(){
        return this.item;
    }
}

let queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue('aks')
queue.enqueue('sha')
queue.enqueue('kumar')
console.log(queue.print())
queue.dequeue()
console.log(queue.print())



