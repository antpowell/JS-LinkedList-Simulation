/**
 * Created by SGT_POWELL on 5/29/2016.
 */
//Create A List
var LinkedList = function () {

    this.head = null;

};
//Check if a list is empty
LinkedList.prototype.isEmpty = function () {
    console.log("Checking if List is empty.");
    return this.head === null;

};
//Add a node to the beginning of the list(prepend)
LinkedList.prototype.prepend = function (val) {
    this.head = {
        data:  val,
        next: this.head
    };
    console.log("Added Node to beginning of List.");
};
//Add an node to the end of the list(append)
LinkedList.prototype.append = function (val) {
    var current = this.head;
    var newNode = {
        data: val,
        next: null
    };
    if (this.isEmpty()) {
        console.log("Adding Node to empty List.");
        this.head = newNode;
        return;
    }
    console.log("Finding end of List.");
    while (current.next !== null) {
        current = current.next;
    }
    console.log("Found end of List and add Node.");
    current.next = newNode;


};
//Count the number of nodes in the list
LinkedList.prototype.size = function () {
    var count = 0;
    var current = this.head;
    console.log("Counting List.");
    while (current !== null) {
        count++;
        current = current.next;
    }
    console.log("Size obtained.");
    return count;
};
//Remove node from list
LinkedList.prototype.remove = function (val) {
    var current = this.head;
    var pre;
    if (current === null) {
        console.log("Sorry List is empty!");
        return;
    } else if (!this.contains(val)) {
        console.log("Sorry List does not contain that Node: " + val);
        return;
    }
    console.log("Searching List.");
    while (current.data !== val) {
        pre = current;
        current = current.next;
    }
    if (current.data == val) {
        console.log("Node found.");
        pre.next = current.next;
        console.log("Node removed.");
    }

};
//Reverse list
LinkedList.prototype.reverse = function () {


};
LinkedList.prototype.contains = function (val) {
    var current = this.head;
    while (current !== null) {
        if (current.data === val) {
            console.log("Node found.");
            return true;
        }
        current = current.next;
    }
    console.log("Node does not exist.");
    return false;
}

LinkedList.prototype.print = function () {

};

$scope.link = new LinkedList();
//        var list = new LinkedList();
//
//        //list.append(12);
//        //list.append(14);
//        //list.append(16);
//        //console.log("Init append size: " +list.size());
//        ////list.remove(14);
//        //list.prepend(10);
//        //list.prepend(5);
//        //console.log("List after prepending 2 Nodes: "+JSON.stringify(list)+ ", and the size is: " + list.size() );
//        //list.remove(10);
//        //list.remove(12);
//        //list.remove(14);
//        //console.log("List after removing some Nodes: " + JSON.stringify(list) + ".\nSize after: "+ list.size());
//        list.append(20);
//        list.append(30);
//        list.remove(30);
//        list.prepend(30);
//        list.remove(25);
//        console.log("List Size: " + list.size());
//
//        console.log(JSON.stringify(list));
//
//        console.log("Is this list empty: " + list.isEmpty() + ". What is the size: " + list.size());