function foo() {
  var bar = "bar";
  // only an error if `let i` is used vs `var i`
  for (let i = 0; i < bar.length; i++) {
    console.log(bar.charAt(i));
  }
  console.log(i); // ReferenceError
}

foo();
