/*
//search and sort

//linear search: Time Complexity is O(n)
-works usually because array usually doesn't have to be sorted to iterate

*/
//iterate through array and find n
const linearSearch = (array, n) => {
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    //if the current index of the array equals the number n...
    if (array[i] === n) {
      //return true
      return true;
    }
  }
  //just return false if condition isn't true
  return false;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 12)); //false
console.log(linearSearch([1, 2, 3, 4, 5], 4)); //true

const binarySearch = (array, n) => {
  //first element
  let lowIndex = 0;
  //last element
  let highIndex = array.length - 1;

  //while the lower half is less than or equal to higher index
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);

    //if the middleIndex of the array is equal to the number, return that middle index
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      //else, if n is greater than the array with the middleIndex, it will be the new
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return -1;
};

/*
Sorting --> used to sort an array in memory for searching later in the program or to write to a file for later retrieval.

*/

//Bubble Sort -->Simplest sorting Algorithm: It simply iterates over the entire array and swaps elements if one is bigger than the other.

//swap function -> simply switches two array element values and will be used as a helper function for most sorting algos
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  //now the first temp will be mutated to the new temp
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]

//Time Complexity: O(n^2) -> Because of nested for loops
//Space Complexity: O(1) -> Constant space
//Bubble sort is the worst type of sort because it compares every pair possible

//Selection Sort -> scans the elements for the smallest element and inserting it into the current position of the array.

