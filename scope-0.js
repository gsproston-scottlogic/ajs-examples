var foo = "bar";

function bar() {
  var foo = "baz";
}

function baz(foo) {
  console.log(foo);
  foo = "bam";
  console.log(foo);
  bam = "yay";
}

baz(40);
