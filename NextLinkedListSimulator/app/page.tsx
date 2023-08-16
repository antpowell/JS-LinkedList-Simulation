'use client';
import { LinkedListComponent } from './LinkedListComponent';
import {
  LinkedList,
  LinkedListServiceProvider,
  useLinkedListServiceContext
} from './services/LinkedListServiceProvider';
import { InputComponent } from './components/InputComponent';
import { revalidatePath } from 'next/cache';
import { Header } from './components/Header';
import { CoreButton } from './components/CoreButton';
import { useEffect, useRef } from 'react';

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { list, setList, append } = useLinkedListServiceContext();
  useEffect(() => {}, [list]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <Header />
      <div className="">
        <div className="">
          {/* <div id="instructions" className="">
            <p>1. Enter your node content into the field below.</p>
            <p>2. Click &quot;Add&quot; and select where you want to add your node.</p>
            <p>3. What your list grow.</p>
            <p>4. Repeat 1-3.</p>
          </div> */}
          <div>LIST: {JSON.stringify(list, null, 2)}</div>
          <InputComponent ref={inputRef} />
          <CoreButton onClick={() => append(inputRef?.current?.value)}>Add</CoreButton>
          <div className="input-group">
            <div className="input-group-btn">
              {/* <form action={appendToList}>
                <input type="text" name="nodeData" className="form-control" placeholder="Node Value" />
                <button
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  data-toggle="dropdown">
                  Add
                </button>
              </form> */}

              {/* <ul className="dropdown-menu">
                <li>
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    To End
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item" ng-click="link.prepend(val)">
                    To Start
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item" ng-click="link.remove(val)">
                    Remove
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item" ng-click="link.reverse()">
                    Reverse
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

      {/* <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-3/4 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true">
        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg> */}
    </main>
  );
}
