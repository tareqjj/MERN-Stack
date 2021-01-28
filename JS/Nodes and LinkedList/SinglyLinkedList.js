const Node = require('C:\\Users\\Admin\\Desktop\\Nodes and LinkedList\\Node.js');

class singlyLinkedList{
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        if (!this.head) {
            this.head = newHead;
        } else {
            const currentHead = this.head;
            newHead.setNextNode(currentHead);
            this.head = newHead;
        }
    }

    addToTail(data) {
        const newHead = new Node(data);
        if(!this.head){
            this.head = newHead;
        } else {
            let tail = this.head;
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(newHead);
        }
    }

    removeHead() {
        if(!this.head){
            return;
        } else {
            const headToRemove = this.head;
            this.head = headToRemove.getNextNode();
            headToRemove.setNextNode(null)
            return headToRemove;
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

    removeByData(data) {
        if (this.head.data === data){
            return this.removeHead();
        }
        let nodeToRemove = null;
        let previousNode = this.head;
        let currentNode = previousNode.getNextNode();
        while(currentNode !== null) {
            if(currentNode.data === data) {
                nodeToRemove = currentNode;
                previousNode.setNextNode(currentNode.getNextNode());
                nodeToRemove.setNextNode(null);
                break;
            }
            previousNode = previousNode.getNextNode();
            currentNode = currentNode.getNextNode();
        }
        return nodeToRemove;
    }

    searchNode(data) {
        let previousNode = this.head;
        let currentNode = previousNode.getNextNode();
        if (previousNode.data === data) {
            previousNode = null;
            currentNode = this.head;
            return {previousNode, currentNode};
        } else {
            while (currentNode.getNextNode()) {
                if (currentNode.data === data) {
                    return {previousNode, currentNode};
                }
                previousNode = previousNode.getNextNode();
                currentNode = currentNode.getNextNode();
            }
            return 'Node not found!';
        }
    }

    swapNodes(dataOne, dataTwo) {
      const nodeOne = this.searchNode(dataOne);
      const nodeTwo = this.searchNode(dataTwo);
      let temp = JSON.parse(JSON.stringify(nodeOne));

      console.log(temp);
      console.log(JSON.stringify(temp));


      nodeOne.previousNode.setNextNode(nodeTwo.currentNode);
      nodeTwo.previousNode.setNextNode(nodeOne.currentNode);
      nodeOne.currentNode.setNextNode(nodeTwo.currentNode.getNextNode());
      nodeTwo.currentNode.setNextNode(temp.currentNode.getNextNode());


      console.log(nodeOne);
      console.log(nodeTwo);



    }
}

const testList = new singlyLinkedList();
testList.addToTail(1);
testList.addToTail(2);
testList.addToTail(3);
testList.addToTail(4);
testList.addToTail(5);
testList.addToTail(6);
//testList.printList();
//testList.removeHead();
//testList.printList();
//console.log(testList.removeByData('Hello'));
testList.printList()
testList.swapNodes(2, 5);
testList.printList();
