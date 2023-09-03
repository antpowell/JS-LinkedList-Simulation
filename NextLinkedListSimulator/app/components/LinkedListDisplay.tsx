import { LinkedList, useLinkedListServiceContext } from '../services/LinkedListServiceProvider';
import { LinkNodeDisplay } from './LinkNodeDisplay';

export const LinkedListDisplay = ({ list }: { list: LinkedList }) => {
  const { linkedList, show } = useLinkedListServiceContext();
  return (
    <>
      <div>{JSON.stringify(show(linkedList), null, 2)}</div>
      <div className="flex display-between">
        {show(linkedList).map(node => (
          <LinkNodeDisplay key={node as string} data={node as string} />
        ))}
      </div>
      {/* <LinkNodeDisplay data={'7'} /> */}
    </>
  );
};
