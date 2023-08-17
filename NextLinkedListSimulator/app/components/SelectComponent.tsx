import { forwardRef } from 'react';

type SelectComponentProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const SelectComponent = forwardRef<HTMLSelectElement, SelectComponentProps>(function SelectionComponent(
  { onChange },
  ref
) {
  return (
    <select
      id="modifier"
      name="modifier"
      className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      onChange={onChange}
      ref={ref}>
      <option>append</option>
      <option>prepend</option>
      <option>remove</option>
    </select>
  );
});
