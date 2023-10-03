/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0
    let cur = head
    while (cur) {    
        cur = cur.next;
        length ++;
    }
    const mid = Math.floor(length / 2)
    let res = head
    for (let i = 0; i < length; i ++) {
        if (i === mid) {
            return res
        }
        res = res.next
    }
    
};