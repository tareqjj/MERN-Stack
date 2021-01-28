const DualLinkNodes = require('C:\\Users\\Admin\\Desktop\\Nodes and LinkedList\\DualLinkNodes.js');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newHead = new DualLinkNodes(data);
        const currentHead = this.head;
        if (!currentHead) {
            this.head = newHead;
        } else {
            newHead.setNextNode(currentHead);
            currentHead.setPreviousNode(newHead);
            this.head = newHead;
        }
        if (!this.tail) {
            this.tail = newHead
        }
    }

    addToTail(data) {
        const newTail = new DualLinkNodes(data);
        const currentTail = this.tail;
        if (!currentTail) {
            this.tail = newTail;
        } else {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
            this.tail = newTail;
        }
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        const headToRemove = this.head;
        if (!headToRemove) {
            return 'No head found!';
        } else if (headToRemove.getNextNode()) {
            const newHead = headToRemove.getNextNode();
            newHead.setPreviousNode(null);
            headToRemove.setNextNode(null);
            this.head = newHead;
        } else {
            this.head = null;
        }
        if (headToRemove === this.tail){
            this.tail = null;
        }
        return headToRemove;
    }

    removeTail() {
        const tailToRemove = this.tail;
        if(!tailToRemove) {
            return 'No tail found!'
        } else if (tailToRemove.getPreviousNode()) {
            const newTail = tailToRemove.getPreviousNode();
            newTail.setNextNode(null);
            tailToRemove.setPreviousNode(null);
            this.tail = newTail;
        } else {
            this.tail = null;
        }
        if (tailToRemove === this.head) {
            this.head = null;
        }
        return tailToRemove;
    }

    removeByData(data) {
        if (this.head.data === data) {
            return this.removeHead();
        } else if (this.tail.data === data) {
            return this.removeTail();
        } else {
            let currentNode = this.head.getNextNode();
            let nextNode = currentNode.getNextNode();
            let previousNode = currentNode.getPreviousNode();
            while (currentNode.getNextNode()) {
                if (currentNode.data === data){
                    previousNode.setNextNode(nextNode);
                    nextNode.setPreviousNode(previousNode);
                    currentNode.setPreviousNode(null);
                    currentNode.setNextNode(null);
                    return currentNode;
                }
                currentNode = currentNode.getNextNode();
                nextNode = currentNode.getNextNode();
                previousNode = currentNode.getPreviousNode();
            }
            return 'Data is not found!'
        }
    }

    printList() {
        let currentHead = this.head;
        let output = '<Head>';
        while(currentHead !== null) {
            output = output.concat(" ", currentHead.data);
            currentHead = currentHead.getNextNode();
        }
        output +=' <Tail>';
        console.log(output);
    }
}



const testList = new DoublyLinkedList();
testList.addToHead('Hello');
testList.addToHead('World');
testList.addToHead('New');
testList.addToHead('Big');
testList.addToHead('Small');
testList.addToTail(1);
testList.addToTail(2);
testList.addToTail(3);
testList.addToTail(4);
testList.addToTail(5);
testList.printList();
//console.log(testList.removeHead());
console.log(testList.removeByData(4));
testList.printList();



