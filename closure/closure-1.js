// works with `let i`
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("i: " + i);
  }, i * 1000);
}
