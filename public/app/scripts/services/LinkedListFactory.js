angular.module('app')
    .factory('LinkedListFactory', function () {
        var factory = {};

        var LinkedList = function () {

            this.head = null;

        };


        //==================Check if a list is empty
        LinkedList.prototype.isEmpty = function () {
            console.log("Checking if List is empty.");
            return this.head === null;

        };

        //==================Add a node to the beginning of the list(prepend)
        LinkedList.prototype.prepend = function (val) {
            this.head = {
                data: val,
                next: this.head
            };
            console.log("Added Node to beginning of List.");
        };

        //==================Add an node to the end of the list(append)
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

        //==================Count the number of nodes in the list
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

        //==================Remove node from list
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
//            if(this.head.data === val){
//                console.log("Node Found! ")
//                this.head = this.head.next;
//            }
            while (current.data !== val) {
                pre = current;
                current = current.next;
            }
            if (current.data == val) {
                console.log("Node found.");
                if (this.head.data === val) {
                    this.head = this.head.next;
                    console.log("Node removed.");
                }else{
                    pre.next = current.next;
                }

            }

        };

        //==================Reverse list
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

        LinkedList.prototype.display = function () {
            var print = "[";
            var current = this.head;

            while (current !== null) {
                print += current.data;
                current = current.next;
                if (current !== null) {
                    print += ']->[';

                } else if (current === null) {
                    print += ']->null';
                }
            }
            return print;
        };
        var list = new LinkedList();
        factory.size = function () {
            return list.size();
        }
        factory.display = function () {
            return list.display();
        }

        factory.append = function (val) {
            list.append(val);
        }
        factory.prepend = function (val) {
            list.prepend(val);
        }
        factory.remove = function (val) {
            list.remove(val);
        }

        return factory;
    });