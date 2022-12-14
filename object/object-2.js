function Foo(who) {
  this.me = who;
}
Foo.prototype.identity = function () {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}
// Bar.prototype = new Foo(); // Or...
Bar.prototype = Object.create(Foo.prototype);
// NOTE: .constructor is borked here, need to fix

Bar.prototype.speak = function () {
  console.log("Hello, " + this.identity());
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // Hello, I am b1
b2.speak(); // Hello, I am b2
