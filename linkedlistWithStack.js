class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
    var newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }
  remove() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.next;
    this.length--;
    return temp.value;
  }
}
var ll = new stack();
ll.add(25);
ll.add(26);
ll.add(256);
ll.add(256);
ll.remove();
console.log(ll);
console.log(ll.value);
