class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a node at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert a node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert a node at a specific position (0-based index)
    insertAtPosition(data, position) {
        if (position < 0) {
            console.log("Position must be a non-negative integer.");
            return;
        }
        const newNode = new Node(data);
        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while (current !== null && index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        if (index !== position) {
            console.log("Position out of bounds.");
            return;
        }
        newNode.next = current;
        previous.next = newNode;
    }

    // Delete a node from a given position (0-based index)
    deleteFromPosition(position) {
        if (position < 0 || this.head === null) {
            console.log("Position out of bounds or list is empty.");
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while (current !== null && index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        if (current === null) {
            console.log("Position out of bounds.");
            return;
        }
        previous.next = current.next;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// example usage
const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtBeginning(5);
list.insertAtEnd(15);
list.insertAtPosition(12, 2);

console.log("Linked List after insertions:");
list.printList();

list.deleteFromPosition(2);

console.log("Linked List after deletion:");
list.printList();
