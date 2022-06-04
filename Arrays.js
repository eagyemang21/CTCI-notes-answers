//Implement an algorithm to determine if a string has all unique characters.

function everyCharUnique(string) {
  
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (let i = 0; i < string.length; i++) {
    //we use a 2nd for loop to where it starts at the index after the first
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};


console.log(everyCharUnique('abcd'));
console.log(everyCharUnique('abccd'));
console.log(everyCharUnique('bhjjb'));
console.log(everyCharUnique('mdjq'));

//Q2
// Given two strings, write a method to decide if one is a permutation of the
// other.
function checkPermute(str1, str2){
 //first compare lengths, cause if they aren't the same, they can't be a permutation
  if(str1.length !== str2.length){ 
  return false;
  }else{
    //we will first split the strings into an array, sort them in correct order, and then join them together to see if they are the same
   const sortedStr1 = str1.split('').sort().join('') 
   const sortedStr2 = str2.split('').sort().join('')
   
  return sortedStr1 === sortedStr2
     
   }
  };
  
console.log(checkPermute('aba', 'aab'));
console.log(checkPermute('aba', 'aaba'));
console.log(checkPermute('aba', 'aa'));

//Q3
//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

function urlify(str, length){
  const strArr = str.split('')
  const pointer = 0;
  
  while(pointer < strArr.length){
   if(strArr[pointer] === ' '){
    for(let i = str.length - 1; i > pointer + 3; i--){
     strArr[i] === str[i - 2] 
    }
     strArr[pointer] = '%'
     strArr[pointer+1] = '2'
     strArr[pointer+2] = '0'
     console.log(strArr, strArr.length);
   }
    pointer++
  }
   // if character is a space, move remainder chars by two
  // replace following three chars with '%20'
  return strArr.join('');
};
console.log(urlify('Mr John Smith    ', 13))




