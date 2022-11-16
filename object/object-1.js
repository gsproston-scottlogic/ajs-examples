function Foo(who) {
  this.me = who;
}
Foo.prototype.identity = function () {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
a1.identity();

a1.identity = function () {
  console.log("Hello, " + Foo.prototype.identity.call(this));
};

a1.identity();
