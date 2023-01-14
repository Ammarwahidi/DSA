class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    // Push x first in isEmpty q2
    this.q2.push(x);
    // Push all the remaining
    // elements in q1 to q2.
    while (this.q1.length != 0) {
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }

    // swap the names of two queues
    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }

  pop() {
    if (this.q1.length == 0) return;
    this.q1.shift();
  }

  top() {
    if (this.q1.length == 0) return -1;
    return this.q1[0];
  }

  size() {
    console.log(this.q1.length);
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.q1.length == 0;
  }

  front() {
    return this.q1[0];
  }
}

// Driver code

let s = new Stack();
s.push(12);
s.push(20);
s.push(33);
s.push(35);
s.push(93);
s.push(83);
console.log(s);

console.log("current size: ");
s.size();
console.log("______________________________________");
// console.log(s.top());
s.pop();
// console.log(s.top());
s.pop();
// console.log(s.top());
console.log(s);

console.log("current size: ");
s.size();
