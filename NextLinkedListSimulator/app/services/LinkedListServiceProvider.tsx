'use client';

import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

export type LinkNode<T> = {
  data: T;
  next: LinkNode<unknown> | null;
};

export type LinkedList = {
  head: LinkNode<unknown> | null;
};

export interface iLinkedListServiceProvider {
  linkedList: LinkedList;
  linkedListDispatcher: Dispatch<LinkedListActions>;
  getSize: (list: LinkedList) => number;
  show: (list: LinkedList) => Array<unknown>;
  hasValue: <T>(list: LinkedList, data: T) => boolean;
  isEmpty: (list: LinkedList) => boolean;
}

export type LinkedListActionTypes = 'prepend' | 'append' | 'remove' | 'reverse';

export interface LinkedListActions {
  type: LinkedListActionTypes;
  data: unknown;
}

const linkedListReducer = (state: LinkedList, action: LinkedListActions) => {
  const { type, data } = action;
  const newListState = { ...state };
  switch (type) {
    case 'append': {
      if (newListState.head === null) {
        newListState.head = { data, next: null };
        return { ...newListState };
      } else {
        let current = newListState.head;
        // Traverse to the end of the list
        while (current.next !== null) {
          current = current.next;
        }

        // Add new node to the end of the list
        console.log(`adding ${data} to the end of the list`);
        current.next = { data, next: null };

        return { ...state, ...newListState };
      }
    }
    case 'prepend': {
      if (!data) {
        console.log('error, no data to prepend');
        return { ...newListState };
      }
      if (newListState.head === null) {
        newListState.head = { data, next: null };
        return { ...newListState };
      } else {
        const newNode: LinkNode<typeof data> = { data, next: newListState.head };
        // add new node to the beginning of the list
        console.log(`adding ${data} to the beginning of the list`);

        newListState.head = newNode;
        return { ...newListState };
      }
    }
    case 'remove': {
      if (!data) {
        console.log('error, no data to remove');
        return { ...newListState };
      }
      if (newListState.head === null) {
        // List is empty, nothing to remove
        return { ...newListState };
      } else {
        let current: LinkNode<unknown> = newListState.head;
        let previous: LinkNode<unknown> = newListState.head;

        if (current.data === data) {
          // Remove first node
          console.log(`removing ${data} from the beginning of the list`);
          newListState.head = current.next;
        } else {
          while (current.next !== null) {
            previous = current;
            current = current.next;
            if (current.data === data) {
              // Remove current node
              console.log(`removing ${data} from the list`);
              previous.next = current.next;
              current.next = null;
            }
          }
        }
        return { ...newListState };
      }
    }
    case 'reverse':
    default:
      return state;
  }
};

const hasValue = <T,>(list: LinkedList, data: T) => {
  let current = list.head;

  // Traverse the list
  log('checking for data: ', data);
  while (current !== null) {
    if (current.data === data) {
      // Data found
      return true;
    }
    current = current.next;
  }

  // Data not found
  return false;
};

const getSize = (list: LinkedList) => {
  let count = 0;
  let current = list.head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

const show = (list: LinkedList): Array<unknown> => {
  const localList = [];
  let current = list.head;

  // Traverse the list
  while (current !== null) {
    console.log(current.data);
    localList.push(current.data);
    current = current.next;
  }
  return localList;
};

const isEmpty = (list: LinkedList) => {
  return list.head === null;
};

const LinkedListServiceContext = createContext<iLinkedListServiceProvider>({
  linkedList: { head: null },
  linkedListDispatcher: () => {},
  getSize: getSize,
  show: show,
  hasValue: hasValue,
  isEmpty: isEmpty
});

export const LinkedListServiceProvider = ({ children }: { children: ReactNode }) => {
  const [linkedListState, linkedListDispatcher] = useReducer(linkedListReducer, { head: null });
  // const [list, setList] = useState<LinkedList>({ head: null });

  // let list: LinkedList;

  // Add node to the beginning of the list
  const prepend = <T,>(data: T) => {
    const newNode: LinkNode<T> = { data, next: list.head };
    // add new node to the beginning of the list
    console.log(`adding ${data} to the beginning of the list`);

    setList((prevList: LinkedList) => {
      prevList.head = newNode;
      return prevList;
    });
    return;
  };

  // Add node to the end of the list
  const append = <T,>(data: T) => {
    const newNode: LinkNode<T> = { data, next: null };

    setList((prevList: LinkedList) => {
      if (prevList.head === null) {
        // List is empty, adding first node
        console.log(`adding ${data} first node to the list`);
        prevList.head = newNode;
        return prevList;
      } else {
        let current = prevList.head;
        // Traverse to the end of the list
        while (current.next !== null) {
          current = current.next;
        }

        // Add new node to the end of the list
        console.log(`adding ${data} to the end of the list`);
        current.next = newNode;

        return prevList;
      }
    });
  };

  const size = () => {
    let count = 0;
    let current = list.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  };

  const remove = <T,>(data: T) => {
    setList((prevList: LinkedList) => {
      if (prevList.head === null) {
        // List is empty, nothing to remove
        return prevList;
      } else {
        let current: LinkNode<unknown> = prevList.head;
        let previous: LinkNode<unknown> = prevList.head;

        if (current.data === data) {
          // Remove first node
          console.log(`removing ${data} from the beginning of the list`);
          list.head = current.next;
        } else {
          while (current.next !== null) {
            previous = current;
            current = current.next;
            if (current.data === data) {
              // Remove current node
              console.log(`removing ${data} from the list`);
              previous.next = current.next;
              current.next = null;
            }
          }
        }
      }
      return prevList;
    });
  };

  const reverse = () => {};

  const hasValue = <T,>(data: T) => {
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
  };

  const isEmpty = () => {
    return list.head === null;
  };

  const printList = (): Array<unknown> => {
    const localList = [];
    let current = list.head;

    // Traverse the list
    while (current !== null) {
      console.log(current.data);
      localList.push(current.data);
      current = current.next;
    }
    return localList;
  };

  const getList = () => {
    return list;
  };

  return (
    <LinkedListServiceContext.Provider
      value={{
        linkedList: linkedListState,
        linkedListDispatcher: linkedListDispatcher,
        getSize: getSize,
        show: show,
        hasValue: hasValue,
        isEmpty: isEmpty
      }}>
      {children}
    </LinkedListServiceContext.Provider>
  );
};

export const useLinkedListServiceContext = () => useContext(LinkedListServiceContext);

// const listService = LinkedListService();

// console.log('Linked List Service');
// console.log('-------------------');
// const list = listService.createList();

// console.log('List is empty: ', listService.isEmpty(list));

// listService.prepend(list, 1);
// listService.prepend(list, 2);
// listService.prepend(list, 3);

// console.log('List is empty: ', listService.isEmpty(list));
// console.log('List size: ', listService.size(list));
// console.log('List has value 2: ', listService.hasValue(list, 2));
// console.log('List has value 4: ', listService.hasValue(list, 4));

// listService.show(list);

// listService.append(list, 4);
// listService.append(list, 5);
// listService.append(list, 6);

// console.log('List size: ', listService.size(list));

// listService.show(list);

// listService.remove(list, 3);
// listService.remove(list, 6);

// listService.show(list);

// console.log('List size: ', listService.size(list));
// console.log('List has value 3: ', listService.hasValue(list, 3));
// console.log('List has value 6: ', listService.hasValue(list, 6));

// console.log('-------------------');
