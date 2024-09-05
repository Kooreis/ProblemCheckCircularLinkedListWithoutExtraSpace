Here is a TypeScript solution using Floyd's Cycle-Finding Algorithm:

```typescript
class Node {
    value: number;
    next: Node | null;

    constructor(value: number, next: Node | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: number) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    isCircular(): boolean {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.isCircular()); // false

// Create a circular linked list for testing
list.head.next.next.next.next.next = list.head.next.next;

console.log(list.isCircular()); // true
```

This solution creates a LinkedList class with append and isCircular methods. The append method adds a new node to the end of the list. The isCircular method uses Floyd's Cycle-Finding Algorithm to determine if the list is circular. It uses two pointers, slow and fast. The slow pointer moves one step at a time while the fast pointer moves two steps at a time. If the list is circular, the fast pointer will eventually catch up to the slow pointer. If the list is not circular, the fast pointer will reach the end of the list.