
/*
// class HashTable{
   
//    table = new Array(100)
   
//     setItem = (key, value) =>{};
   
//     getItem = (key) =>{
//         //return the value
//         return ''
//     }
// }

// const myTable = new HashTable
// myTable.setItem("activity", "watching The Sopranos")
// myTable.getItem("activity");

//The hash function converts a specified key into an index for an array that stores all of the data.
• Deterministic: Equal keys produce equal hash values.
• Efficiency: It should be O(1) in time.
• Uniform distribution: It makes the most use of the array.



//simple hash function 
//key is a type 'String' and size is a type Number

-to work around collisions, probing hashing technique finds next available index in the array
-Linear Probing -->
-Quadratic Probing -->

*/
// const hash = (key, size) => {
//     let hashedKey = 0

//     for(let i = 0; i < key.length; i++){
//         hashedKey = key.charCodeAt(i)
//         return hashedKey % size
//     }

// }

//creating a table of buckets with size of 127 
class HashTable {
    constructor(){
        //creating amount of buckets
        this.table = new Array(127);
        this.size = 0;
    }
    //create a hash function, which will accept a key value and transform it to an index

    // a private class with underscore
    //will return a number between 0 and 127
    _hash(key){
        let hash = 0;
        //for loop over keys
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        //use modulo operator to make sure we don't exceed bucket size
        return hash % this.table.length;
    }

    //set will take the key and value for parameters
    set(key, value){
        //key & value pair are assigned to table at specific index
        const index = this._hash(key);
        this.table[index] = [key, value];
        //size property will increment by 1
        this.size++;
    }

    //will retrieve a value with the key in the parameter
    //will return key/value pair back or undefined if there is no key value pair stored @ specific index
    get(key){
        //will use hash method once again to retrieve table's index
        const target = this._hash(key);
        if (this.table[target]){
            //for loop
            for(let i = 0; i < this.table.length; i++){
                if(this.table[target][i][0]){
                    return this.table[target][i][1]
                }
            }
        }
        return undefined
    }
}

//handling a collision