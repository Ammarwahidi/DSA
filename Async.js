setTimeout(() => {
  console.log("10");
}, 5000);

setTimeout(function CallbackHere() {
  console.log("hello");
}, 2000);

setTimeout(console.log("DONE and DUSTED"), 5000);
