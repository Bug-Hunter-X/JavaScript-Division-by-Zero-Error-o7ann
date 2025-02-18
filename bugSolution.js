function foo(a, b) {
  if (b === 0) {
    // Handle division by zero.  Options include returning a specific value (NaN or Infinity may be appropriate depending on context) or throwing an error.
    return NaN; // Or throw new Error('Division by zero');
  }
  return a / b; 
}

console.log(foo(10, 0)); // Returns NaN
console.log(foo(10, 2)); // Returns 5