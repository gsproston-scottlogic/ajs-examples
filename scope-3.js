// output changes depending on strict mode
"use strict";

var bar = "bar";

function foo(str) {
  eval(str); // cheating
  console.log(bar); // 42
}

foo("var bar = 42;");
