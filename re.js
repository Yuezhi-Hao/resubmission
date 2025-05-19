//Define a function. Determine whether a number n can be obtained by adding two powers of 2
function judgeSumOfTwoPowersOfTwo(n) {
  const powers = [];// Create an empty array

  //define the range of powers of 2
  // The range is from 2^-10 to 2^30
  // This range is chosen to cover a wide range of possible sums
  for (let i = -10; i <= 30; i++) {
    powers.push(Math.pow(2, i));
  }

  // Iterate through the array and check if any two powers of 2 add up to n
  for (let i = 0; i < powers.length; i++) {
    for (let j = 0; j < powers.length; j++) {
      let sum = powers[i] + powers[j];

      // Check if the sum is equal to n
      if (sum === n) {
        return true;//return true if the sum is equal to n
      }
    }
  }

  // If no two powers of 2 add up to n, return false
  return false;
}

console.log(judgeSumOfTwoPowersOfTwo(3)); 

