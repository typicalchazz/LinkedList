class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
    }

//insert data
insert(data){
    this.head = new Node(data, this.head);
    this.size++;
}

//reverse data
reverse(){
    let previous = null;
    let current = this.head;
    let next = null;

    while(current!=null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        //console.log(current);
    }
    return previous;
}

}

let ll = new LinkedList();

//console.log(ll); // LinkedList { head: null, size: 0 }

ll.insert(100);
ll.insert(200);
ll.insert(300);

console.log('');
console.log(ll); 
console.log('');
console.log(ll.reverse())






