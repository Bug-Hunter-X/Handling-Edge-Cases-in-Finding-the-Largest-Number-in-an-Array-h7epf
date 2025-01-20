function getLargestNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined; // Handle empty array
  }

  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

const numbers = [10, 5, 20, 15, 30];
const largestNumber = getLargestNumber(numbers);
console.log("The largest number is:", largestNumber); // Output: 30

const emptyArray = [];
const largestNumberEmpty = getLargestNumber(emptyArray);
console.log("The largest number is:", largestNumberEmpty); // Output: undefined

const noArray = null;
const largestNumberNull = getLargestNumber(noArray);
console.log("The largest number is:", largestNumberNull); // Output: undefined