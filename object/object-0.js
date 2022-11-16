function Foo(who) {
  this.me = who;
}
Foo.prototype.identity = function () {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function () {
  alert("Hello, " + this.identity() + ".");
};

// all true
console.log(a1.constructor === Foo);
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === Foo.prototype);
console.log(a1.__proto__ === a2.__proto__);

// all true
console.log(a1.__proto__ === Object.getPrototypeOf(a1));
console.log(a2.constructor === Foo);
console.log(a2.__proto__ === a2.constructor.prototype);
