/*
//Linked List --> chain of nodes, where each node contains information (like data), and a pointer to the next node

-used to implement file systems, hash tables, & adjacency lists

*/
//we must make a Node class in order to create the data
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    //if there is a callback, return the value in the callback, else
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    //we start out with an empty linked list, so both are set to null/non-existent
    this.head = null;
    this.tail = null;
  }

  //adding to the end of the linked list
  append(value) {
    //if there is no head, we must make a new head, which will be the new(and only) node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      //else, we attach a new node to the end of the linked list
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  }
  //adding to the head of the linked list
  prepend(value) {
    //make a new node to be a head
    const newNode = newLinkedListNode();
    this.head = newNode;

    //if there is no tail, return
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
  add(value){
    // before setting the new node into the list:
    // iterate to the end of the list
    // when we reach the end of the list, add the new node there

    // store a reference to the "current" node
    let curr = this;

    // while curr is not null
    while (curr.next !== null) {
      curr = curr.next;
    }

    // curr now stores the last node in the list
    curr.next = new Node(value);
  }
  print(){
    // iterate through the list
    // print the value of each node
    let curr = this;
    while(curr.next !== null){
      console.log(curr.value)
      curr = curr.next;
    }
    //now we must display all data 
    console.log(curr.value)
  }
  removeFromIndex(idx) {

    // traverse the list until we reach idx
    // remove the node at idx
    let index = 0;
    let curr = this;
    let prev = null;

    // special handling here for idx === 0
    // just remove the first node

    while(curr.next !== null){
      if(index === idx){
        // set prev.next to curr.next
        prev.next = curr.next
        break;
      }
      index++;
      prev = curr
      curr = curr.next;
    }
  }
}


const myList = new Node(19);
myList.add(20);
myList.add(21);
myList.add(22);
myList.add(23);


// myList.print();

myList.removeFromIndex(0);
myList.print();