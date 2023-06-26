//Implement a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}

// Usage:
const queue = new Queue();
console.log(queue.isEmpty()); // true

//let
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
//print
console.log(queue.front()); // 1
console.log(queue.size()); // 5

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2

queue.print();
