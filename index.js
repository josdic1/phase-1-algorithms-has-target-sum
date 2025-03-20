function hasTargetSum(array, target) {
  const seen = new Set();

  for (let num of array) {
    const visible = target - num;
    if (seen.has(visible)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

/*
 O(n²)
*/

/*
Subtract each number in the array from the target number. 
Remove any values < 0
Create a set to remove duplicates
Then, compare the array of differences with the original array.
Stop when a match is found
*/

/*
I subtract each number in the array from the target number (differences). I remove any differences <= 0 / duplicates. I compare the remaining array with the full/original array. And stop when match is found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
