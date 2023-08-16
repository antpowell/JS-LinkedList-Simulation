import { LinkNode } from './services/LinkedListServiceProvider';

export const LinkNodeComponent = <T,>({ link }: { link: LinkNode<T> }) => {
  return (
    <div className="flex justify-evenly border-solid p-5">
      <div className="node__value"></div>
      <div className="node__next"></div>
    </div>
  );
};
