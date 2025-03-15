const Store = function(){
    this.store = new Map()

    this.add = function(timeStamp, price, checkPoint){
        if(this.store.has(timeStamp)){
            let prices = this.store.get(timeStamp)
            this.store.set(timeStamp, [...prices, price])
        }else{
            this.store.set(timeStamp, [price])
        }

        if(checkPoint){
            let prices = this.store.get(timeStamp)
            this.store.set(timeStamp, [...prices, checkPoint])
        }
    }

    this.getMax = function(timeStamp, checkPoint){
        let prices = this.store.get(timeStamp) ?? []
        if(checkPoint){
            let price = this.store.get(timeStamp)
            let checkpointIndex = price.findIndex((e) => e === checkPoint)
            prices = this.store.get(timeStamp).slice(0, checkpointIndex)
            prices = prices.filter((e) => typeof e === 'number')
        }
        return Math.max(...prices)
    }

    this.getStore = function(){
        return this.store
    }
}

const s = new Store()
s.add(1, 10)
s.add(1,30)
s.add(1, 15)
s.add(1, 20, 'a')
s.add(1, 35)
s.add(1, 40, 'c')
console.log(s.getStore())
console.log(s.getMax(1, 'c'))