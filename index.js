// Copy each element of the first array into the second array, in order
// Begin inserting elements at the index 'n' of the second array
//Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
  let copyOfArr2 = arr2.slice()
  copyOfArr2.splice(n, 0, ...arr1)
  return copyOfArr2
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)