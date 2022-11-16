function foo() {
  console.log(this.bar);
}

var bar = "bar1";
// globalThis.bar = "bar1";
var obj = { bar: "bar2" };

foo(); // undefined, bar1 with `globalThis`
foo.call(obj); // bar2
