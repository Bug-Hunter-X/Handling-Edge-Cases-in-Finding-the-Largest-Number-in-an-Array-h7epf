# Handling Edge Cases in JavaScript Array Processing

This repository demonstrates a common error and its solution when working with arrays in JavaScript.  The challenge is to find the largest number within an array, but to correctly handle the cases where the input array might be null or empty. 

## The Problem

Many developers fail to account for edge cases like null or empty arrays when writing array processing functions.  This can lead to unexpected errors or crashes.

## The Solution

The solution involves adding explicit checks for null or empty arrays at the beginning of the function.  If either condition is met, a suitable default value (such as `undefined`) is returned to prevent errors. This makes the function more robust and less prone to unexpected behavior.  See `bugSolution.js` for a working example.

## Usage

1. Clone the repository.
2. Open `bug.js` to see the initial (buggy) code.
3. Open `bugSolution.js` to see the corrected code with the edge case handling. 
4. Run the JavaScript files using your preferred method (e.g., Node.js).
