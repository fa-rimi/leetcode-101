/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 *
 * input: n = 15
 * output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"....."FizzBuzz"]
 *
 *
 * ? How would I approach this?
 *
 * * Firstly I know we're working with an array that will hold our string so i will
 * * initialize an empty array to hold everything
 *
 * * n will be the end integer and we're iterating[i] over all the numbers between 1 and n
 *
 * * We're going to be using an else...if statement for the conditions
 *
 * * Everything needs to return as a string -> i(int) will need to be converted into a string
 *
 * */

/**
 * todo: let answer be an empty array
 *
 * todo: for when i=1 and i <= n, keep incrementing
 * todo: if i is divisible by 3 && if i is divisible by 5 -> add "FizzBuzz" into answer[]
 * todo: else if i is only divisible by 3 -> add "Fizz" into answer[]
 * todo: else if i is only divisible by 5 -> add "Buzz" into answer[]
 * todo: else none of the conditions are met, just add i as a string value into answer[]
 *
 * todo: return the full answer array
 *
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // initialize empty array
  const answer = [];

  // for {else if} loop for conditions
  for (let i = 1; i <= n; i++) {
    // if i is divisible by 3 && 5
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz"); // push the string "FizzBuzz" into the array

      // if i is divisible by 3
    } else if (i % 3 === 0) {
      answer.push("Fizz"); // push the string "Fizz" into the array

      // if i is divisible by 5
    } else if (i % 5 === 0) {
      answer.push("Buzz"); // push the string "Buzz" into the array

      // if none of the conditions are met
    } else {
      answer.push(i.toString()); // push i (as a string) into the array
    }
  }

  return answer; // return the entire array 
  // ! i made a mistake and place the return statement inside, at the end, of the for loop -- this only returned the last else condition and stopped running the loop once that condition was met because the first i value was 1
};
