function foo() {
  var bar = "bar1";
  baz();
}
function baz() {
  console.log(this.bar);
}

var bar = "bar2";
// globalThis.bar = "bar2";
foo(); // undefined, bar2 with `globalThis`
