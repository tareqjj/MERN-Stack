class DualLinkNodes{
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node instanceof DualLinkNodes || node === null) {
            this.next = node;
        } else {
            throw new Error('This is not a valid Double Link Node!');
        }
    }

    setPreviousNode(node) {
        if (node instanceof DualLinkNodes || node === null) {
            this.previous = node;
        } else {
            throw new Error('This is not a valid Double Link Node!');
        }
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}


module.exports = DualLinkNodes;