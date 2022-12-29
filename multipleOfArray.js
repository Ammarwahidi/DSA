var num = parseInt(window.prompt("Enter Num Value"));
var length = parseInt(window.prompt("Enter Length Value"));
var multiples = [];
function multiple(num, length) {
  for (var i = 1; i < length + 1; i++) {
    multiples.push(num * i);
  }
  return multiples;
}
console.log(multiple(num, length));
