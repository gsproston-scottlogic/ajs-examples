// assign foo to IIFE function
var foo = (function () {
  var o = { bar: "bar" };

  // return an inner function (in this case in an object)
  return {
    bar: function () {
      // closure by using `o`
      console.log(o.bar);
    },
  };
})();

foo.bar(); // bar

// this is a module pattern
// an outer function (foo) returns at least one inner function (bar) with closure over the private scope
