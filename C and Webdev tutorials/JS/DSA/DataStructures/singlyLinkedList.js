//linear collection of nodes where each node contains
// Data =  actual value
// Next = A pointer/reference to the next node

//Flexible size, slower access compared to an array

//WHy? 
//*You don't need to declare te size 
//beforehand
//*Efficient insertions and deletions
// You can add or remove nodes without shifting elements


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)
        
        if (!this.head){
            this.head = newNode
            return
        }

        let current = this.head

        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
}