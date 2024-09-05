Here's a JavaScript solution using Floyd's cycle-finding algorithm, also known as the "tortoise and the hare" algorithm:

```javascript
function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

function isCircular(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;
}

// Test the function
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // This makes the linked list circular

console.log(isCircular(node1)); // Should return true
```

This solution works by having two pointers, one that moves one step at a time (the "tortoise") and one that moves two steps at a time (the "hare"). If the linked list is circular, the fast pointer will eventually catch up to the slow pointer. If the linked list is not circular, the fast pointer will reach the end of the list.