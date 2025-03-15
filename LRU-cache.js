/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hashMap = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hashMap.has(key)){
        let val = this.hashMap.get(key)
        this.hashMap.delete(key)
        this.hashMap.set(key, val)
        return this.hashMap.get(key)
    }else{
        return -1
    }
};


LRUCache.prototype.put = function(key, value) {
    if(this.hashMap.size >= this.capacity){
        this.hashMap.delete(this.hashMap.keys().next().value)
    }
    this.hashMap.set(key, value)
};

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.get(1);
lRUCache.put(3, 3);
lRUCache.get(2); 
lRUCache.put(4, 4);
lRUCache.get(1);
lRUCache.get(3);
lRUCache.get(4);
