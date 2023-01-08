class stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.lenght - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  emptythis() {
    return (this.arr.length = 0);
  }
  sizeOfStack() {
    return this.arr.length;
  }
  toArray() {
    return this.arr;
  }
  convertToString() {
    return this.arr.toString();
  }
}

var s1 = new stack();
s1.push(20);
s1.push(30);
s1.push(40);
console.log(s1.peek());
s1.push(30);
s1.push(30);
s1.push(30);
s1.pop();
console.log(s1.convertToString());
