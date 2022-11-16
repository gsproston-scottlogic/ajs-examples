var obj = {
  a: 2,
  b: 3,
  c: 4,
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
  a = b + c;
  c = b - a;
  d = 3; // ??
  // d is created on the global scope
}

console.log(obj.d);
console.log(d);
