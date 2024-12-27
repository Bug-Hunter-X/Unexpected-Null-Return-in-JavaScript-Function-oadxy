function foo(a, b) {
  //Treat null as 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0

//Alternative solution that throws an error if both inputs are null
function foo2(a, b) {
  if (a === null && b === null) {
    throw new Error('Both inputs cannot be null');
  }
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}
console.log(foo2(1,2)); //3
console.log(foo2(null, 2)); //2
console.log(foo2(1, null)); //1
//console.log(foo2(null, null)); // Throws an error