'use client';
import { Dispatch, SetStateAction, useState, createContext, useContext, ReactNode, useMemo } from 'react';

export type LinkNode<T> = {
  data: T;
  next: LinkNode<unknown> | null;
};

export type LinkedList = {
  head: LinkNode<unknown> | null;
};

export interface iLinkedListServiceProvider {
  list: LinkedList;
  setList: Dispatch<SetStateAction<LinkedList>>;
  prepend: <T>(data: T) => void;
  append: <T>(data: T) => void;
  size: () => number;
  remove: <T>(data: T) => void;
  reverse: () => void;
  show: () => Array<unknown>;
  hasValue: <T>(data: T) => boolean;
  isEmpty: () => boolean;
  getList: () => LinkedList;
}

const LinkedListServiceContext = createContext<iLinkedListServiceProvider>({
  list: { head: null },
  setList: (): LinkedList => ({ head: null }),
  prepend: <T,>(data: T) => {},
  append: <T,>(data: T) => {},
  size: () => 0,
  remove: <T,>(data: T) => {},
  reverse: () => {},
  show: () => [],
  hasValue: <T,>(data: T) => false,
  isEmpty: () => true,
  getList: () => ({ head: null })
});

export const LinkedListServiceProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<LinkedList>({ head: null });

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
  const append = useMemo(
    () =>
      <T,>(data: T) => {
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
      },
    [list, setList]
  );

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
        list,
        setList,
        prepend,
        append,
        size,
        remove,
        reverse,
        show: printList,
        hasValue,
        isEmpty,
        getList
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
