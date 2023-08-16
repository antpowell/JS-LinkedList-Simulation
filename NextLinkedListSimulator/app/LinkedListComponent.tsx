import { LinkNodeComponent } from './LinkNodeComponent';
import { LinkNode, LinkedList, iLinkedListService } from './services/LinkedListServiceProvider';
import { useState } from 'react';

export const LinkedListComponent = ({ service }: { service: iLinkedListService }) => {
  const list = service.getList();
  return service.isEmpty(list) ? (
    <div>EMPTY</div>
  ) : (
    <div className="flex justify-evenly border-double">
      <LinkNodeComponent link={list.head as LinkNode<unknown>} />
    </div>
  );
};
