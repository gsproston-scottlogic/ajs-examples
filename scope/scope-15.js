function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo(); // undefined undefined
console.log(baz.baz); // baz
console.log(baz);
