class stack{
    constructor(){
        this.stack = [];
    }

    add(arg){
        this.stack.push(arg);
    }

    remove(){
        if(this.stack.length > 0){
            this.stack.pop();
        }
    }

    show(){
        console.log(this.stack)
    }
}

let Stack = new stack();
Stack.add(1);
Stack.add(2);
Stack.add(3);
console.log(Stack.show()); // [ [ 1 ], [ 2 ], [ 3 ] ]
Stack.remove();
console.log(Stack.show());