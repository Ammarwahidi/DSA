var num = parseInt(window.prompt("Enter a value"));
console.log(yearcheck(num));
function yearcheck(num) {
  if (num < 35) {
    return num + 2000;
  } else {
    return num + 1900;
  }
}
