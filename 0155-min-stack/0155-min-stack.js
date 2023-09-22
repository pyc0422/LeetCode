
var MinStack = function() {

    this.sorted = []
    this.stack = []

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {    
        this.sorted.push(val)
        this.stack.push(val)
    } else {
        if (this.sorted[0] < val) {
            this.sorted.push(val)         
            this.stack.push(val)
        } else {
            this.sorted.unshift(val)
            this.stack.push(val)
        }
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
       const temp = this.stack.pop()
       if (temp === this.sorted[0]) {
           this.sorted.shift()
       }
    }


};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sorted[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */