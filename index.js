function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    for (let n = i + 1; n < array.length; n++) {
      if (array[n] === difference) return true;
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
   // iterate over the array of numbers
  //  find the difference between the target and the current value
  //  iterate over the rest of the numbers in the array
  //  check if any of the remaining numbers add up to the target
  //  if it is return true
  //  if we don't find a number that adds up to the target return false
*/

/*
  Use iteration to find the difference between each value of the array and the target
  iterate through the rest of the array to look for a number that makes up the difference
  return true if we find a match, and false if we don't
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 8, 1, 9, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 30));

}

module.exports = hasTargetSum;
