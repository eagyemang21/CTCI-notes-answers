//search and sort

//linear search

//iterate through array and find ...
const linearSearch = (array, n) => {
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //if the current index of the array equals the number n...
        if(array[i] === n){
            //return true
            return true;
        }
    }
    //just return false if condition isn't true
    return false;
}

console.log(linearSearch([1, 2, 3, 4 , 5, 6, 7], 12))
console.log(linearSearch([1, 2, 3, 4, 5], 4))

const binarySearch = (array, n) =>{
    //first element
    let lowIndex = 0
    //last element
    let highIndex = (array.length - 1)

    //while the lower half is less than or equal to higher index
    while(lowIndex <= highIndex){
        let midIndex = Math.floor((highIndex + lowIndex) / 2)

        //if the middleIndex of the array is equal to the number, return that middle index
        if(array[midIndex] == n){
            return midIndex
        }else if(n > array[midIndex]){
            //else, if n is greater than the array with the middleIndex, it will be the new
            lowIndex = midIndex;
        }else{
            highIndex = midIndex;
        }
    }
    return -1;
}