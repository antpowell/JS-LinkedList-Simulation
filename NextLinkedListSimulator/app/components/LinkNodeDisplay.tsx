export const LinkNodeDisplay = ({ data }: { data: string }) => {
  return (
    <>
      <div className="flex items-center justify-around px-1 bg-white dark:bg-gray-950">
        <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
          <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">{data}</p>
          </div>
        </div>
      </div>
    </>
  );
};
