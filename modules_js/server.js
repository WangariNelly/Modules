// app.js - Main program that uses the modules

// Importing modules
import { add, subtract, greet } from './math.js';
import { goodbye } from './message.js';

// Using functions from math module
console.log(add(5, 3));        // Output: 8
console.log(subtract(10, 4));  // Output: 6

// Using function from message module
greet('John');                 // Output: Hello, John! Welcome to our application.
goodbye('John');               // Output: Goodbye, John! We hope to see you again soon.
