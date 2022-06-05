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

/*
Binary Search: Check the middle value to see whether the desired value is greater or smaller than it.
-The binary search algorithm is fast but can be done only if the array is sorted.
-If the search element is bigger than the middle element, the lower bound is set to the middle element
plus one. 
-If the search element is less than the middle element, the higher bound is set to the middle element minus one.

*/
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
console.log(binarySearch([1, 2, 3, 4], 4)); // true
console.log(binarySearch([1, 2, 3, 4], 5)); // -1
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
function selectionSort(items) {
  let len = items.length,
    min;

  for (let i = 0; i < len; i++) {
    // set minimum to this position
    min = i;
    //check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    //if the minimum isn't in the position, swap it
    if (i != min) {
      swap(items, i, min);
    }
  }

  return items;
}
selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
//Time Complexity: O(n^2)
//Space Complexity: O(n^2)

//Insertion Sort -> searching the array sequentially and moving the unsorted items into a sorted sublist on the left side of the array.
function insertionSort(items) {
  let len = items.length, // number of items in the array
    value, // the value currently being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 0; i < len; i++) {
    // store the current value because it may shift later
    value = items[i];

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section
    // over by one. This creates space in which to insert the value.
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}
insertionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
// //Time Complexity: O(n2)
// Space Complexity: O(1)
// this sorting algorithm has a quadratic time complexity of O(n2) like bubble
// and insertion sort because of the nested for loop.

// //QuickSort: works by obtaining a pivot and partitioning the array around it (bigger elements on one side and smaller elements on the other side) until everything is sorted.
//pivot: is the median of the array since it will partition the array evenly but getting the median of an unsorted array linear time to compute.
//divide and conquer methodology

function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}
quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
//Time Complexity: O(nlog2(n)) on average, O(n2) for worst case
//Space Complexity: O(log2(n))
//One downside about a quicksort algorithm is that it could potentially be O(n2) if a bad pivot, (does not partition the array evenly), is always picked. Ideal pivot is the median element of the array.
//Use a quicksort algorithm when the average performance should be optimal. This has to do with the fact that quicksort works better for the RAM cache.

//Quickselect: a selection algorithm to find the kth smallest element in an unordered list.
let array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2]; // sorted form: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]
function quickSelectInPlace(A, l, h, k) {
  let p = partition(A, l, h);
  if (p == k - 1) {
    return A[p];
  } else if (p > k - 1) {
    return quickSelectInPlace(A, l, p - 1, k);
  } else {
    return quickSelectInPlace(A, p + 1, h, k);
  }
}

function medianQuickselect(array) {
  return quickSelectInPlace(
    array,
    0,
    array.length - 1,
    Math.floor(array.length / 2)
  );
}

quickSelectInPlace(array, 0, array.length - 1, 5); // 2 - because it's the fifth smallest element
quickSelectInPlace(array, 0, array.length - 1, 10); // 7- because it's the tenth smallest element
//Time Complexity: O(n)

//MergeSort: Works by dividing the array into subarrays until each array has one element. Then, each subarray is concatenated (merged) in a sorted order

function merge(leftA, rightA) {
  let results = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  let leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  // add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}
//The merging function works by taking the two arrays (left and right) and merging them into one resultant array.
function mergeSort(array) {
  if (array.length < 2) {
    return array; // Base case: array is now sorted since it's just 1 element
  }

  let midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
// Time Complexity: O(nlog2(n)) --> the need to create n number of arrays to be merged later.
// Space Complexity: O(n)

//A stable sort is one that’s guaranteed not to reorder elements with identical keys.

/*

*/
