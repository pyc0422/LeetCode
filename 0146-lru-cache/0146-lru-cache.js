/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.storage = new Map();
    this.max = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.storage.has(key)) {
        return - 1
    } else {
        const val = this.storage.get(key);
        this.storage.delete(key)
        this.storage.set(key, val)
        return val
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.storage.has(key)) {
        this.storage.delete(key)
        this.storage.set(key,value)
        return;
    } 
    if (this.storage.size === this.max) {
        const cur = this.storage.keys().next().value
        this.storage.delete(cur)
    } 
    this.storage.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */