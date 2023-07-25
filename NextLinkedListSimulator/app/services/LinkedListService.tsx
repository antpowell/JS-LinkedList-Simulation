type LinkNode = {
    data: unknown;
    next: LinkNode | null;
}

type LinkedList = {
    head: LinkNode | null;
}

const linkedList = (): LinkedList => {
    return {
        head: null
    }
}

const isEmpty = (list: LinkedList) => {
    return list.head === null;
}

// Add node to the beginning of the list
const prepend = (list: LinkedList, data: unknown) => {
    const newNode: LinkNode = { data, next: list.head };
    // add new node to the beginning of the list
    console.log(`adding ${data} to the beginning of the list`);
    list.head = newNode;
    return;
}

// Add node to the end of the list
const append = (list: LinkedList, data: unknown) => {
    const newNode: LinkNode = { data, next: null };

    if (list.head === null) {
        // List is empty, adding first node
        console.log(`adding ${data} first node to the list`);
        list.head = newNode;
        return;
    }

    let current = list.head;
    // Traverse to the end of the list
    while (current.next !== null) {
        current = current.next;
    }

    // Add new node to the end of the list
    console.log(`adding ${data} to the end of the list`);
    current.next = newNode;
}

const size = (list: LinkedList) => {
    let count = 0;
    let current = list.head;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}

const remove = (list: LinkedList, data: unknown) => {

    if (list.head === null) {
        // List is empty, nothing to remove
        return;
    }

    let current: LinkNode = list.head;
    let previous: LinkNode = list.head;

    if (current.data === data) {
        // Remove first node
        console.log(`removing ${data} from the beginning of the list`);
        list.head = current.next;
        return;
    } else {
        while (current.next !== null) {
            previous = current;
            current = current.next;
            if (current.data === data) {
                // Remove current node
                console.log(`removing ${data} from the list`);
                previous.next = current.next;
                current.next = null;
                return;
            }
        }

        // Data not found
        return;

    }
}

const reverse = (list: LinkedList) => { };

const hasValue = (list: LinkedList, data: unknown) => {
    let current = list.head;

    // Traverse the list
    while (current !== null) {
        if (current.data === data) {
            // Data found
            return true;
        }
        current = current.next;
    }

    // Data not found
    return false;
}

const printList = (list: LinkedList) => {
    let current = list.head;

    // Traverse the list
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}


console.log('Linked List Service')
console.log('-------------------')

const list = linkedList();
console.log('List is empty: ', isEmpty(list));

prepend(list, 1);
prepend(list, 2);
prepend(list, 3);

console.log('List is empty: ', isEmpty(list));
console.log('List size: ', size(list));
console.log('List has value 2: ', hasValue(list, 2));
console.log('List has value 4: ', hasValue(list, 4));

printList(list);

append(list, 4);
append(list, 5);
append(list, 6);

console.log('List size: ', size(list));

printList(list);

remove(list, 3);
remove(list, 6);

printList(list);

console.log('List size: ', size(list));
console.log('List has value 3: ', hasValue(list, 3));
console.log('List has value 6: ', hasValue(list, 6));

console.log('-------------------')

