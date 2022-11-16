var foo = "foo";

// IIFE - Immediately Invoked Function Expression
(function () {
  var foo = "foo2";
  console.log(foo); // "foo2"
})();

console.log(foo); // "foo"
