const RouterMiddleware = function(){
    const store = new Map();

    this.addRoute = function(path, value){
        store.set(path, value)
    }

    this.callRoute = function(path){
        const valueOnPath = store.get(path) ?? null

        if(valueOnPath) return valueOnPath;

        
    }
}