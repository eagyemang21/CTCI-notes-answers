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



//simple hash function 
//key is a type 'String' and size is a type Number
const hash = (key, size) => {
    let hashedKey = 0

    for(let i = 0; i < key.length; i++){
        hashedKey = key.charCodeAt(i)
        return hashedKey % size
    }

}

class HashTable {
    constructor(){
        this.size = 20
        this.buckets = Array(this.size)
    }
}