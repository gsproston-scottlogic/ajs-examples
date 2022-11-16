var a = b();
var c = d(); // TypeError: d is not a function
a;
console.log(a);
c;
console.log(c);

function b() {
  return c;
}

var d = function () {
  return b();
};
