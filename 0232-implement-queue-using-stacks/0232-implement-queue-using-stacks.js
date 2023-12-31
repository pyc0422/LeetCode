
var MyQueue = function() {
    this.firstStack = []
    this.secondStack = []
    this.first = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.firstStack.length === 0) {
        this.first = x
    }
    this.firstStack.push(x)
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.secondStack.length === 0) {
        while (this.firstStack.length > 0) {
            this.secondStack.push(this.firstStack.pop())
        }
    }
    return this.secondStack.pop()
 };

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.secondStack.length === 0 ? this.first : this.secondStack[this.secondStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0 && this.secondStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */