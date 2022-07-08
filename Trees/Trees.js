/*
-General structure is composed of nodes with children nodes.
1st node is called the root node.
*/
//General structure with any number of children:
const TreeNode = (value) => {
    this.value = value;
    this.children = [];
}

//Binary Tree -> type of tree that only has 2 children nodes: left and right
const BinaryTreeNode = (value) =>{
    this.value = value;
    this.left = null;
    this.right = null;
}
//always has a root node, which is initialized to null before any element is inserted.
const BinaryTree = () =>{
    this._root = null;
}

//TREE TRAVERSAL
/*
    -Left and Right pointers have to be followed in order to go through every element in the tree.
*/
/*Pre-Order Traversal:
    -visits nodes in this order: root, left node, right node
*/

//Recursively:
BinaryTree.traversePreOrder = function() {
    //there is a private method accessible to the root node
    traversePreOrderHelper(this._root)
    //if there is no node/null, terminate this function
    if(!node){
        return
    }
    //print the node value and call the recursive function on both left and right nodes
    console.log(node.value)
    traversePreOrderHelper(node.left)
    traversePreOrderHelper(node.right)
}

//Iteratively:
BinaryTree.traversePreOrderIterative = function(){
    //create an empty stack and push root to it
    let nodeStack = []
    nodeStack.push(this._root);

    //pop all the items one by one. For each popped item, we must ->
    // 1) print
    // 2) push its right child 
    // 3) push the left child

    // *Right child pushed first since Left is always processed first*
    while(nodeStack.length){
        //pop the top item from the stack and print it
        let node = nodeStack.pop();
        //console.log(node.value)
        //use if statements to push right and left children of the popped node to the stack

        //if there is a right node, add to the nodeStack
        if(node.right){
            nodeStack.push(node.right)
        }
        if(node.left){
            nodeStack.push(node.left)
        }
    }
}

/*
IN-ORDER TRAVERSAL:
    -Visits nodes in the following order: left, root(current node), right.
    -Like reading a book, left to right
    
*/
