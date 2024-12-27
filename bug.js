function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null

//The bug is that the function returns null if either a or b is null, even if the other is a number.
//This is unexpected behavior in many cases, as the function should ideally return the sum of the numbers, if possible.
//A better approach would be to handle null values gracefully, such as by treating them as 0, or throwing an error if both are null.