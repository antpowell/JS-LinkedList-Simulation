import { MouseEventHandler } from 'react';

export const CoreButton = ({
  children,
  onClick,
  className
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}>
      {children}
    </button>
  );
};
