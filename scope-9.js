function foo() {
  console.log(this.bar);
}

var bar = "bar1";
// globalThis.bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo(); // undefined, bar1 with `globalThis`
o2.foo(); // bar2
o3.foo(); // bar3
