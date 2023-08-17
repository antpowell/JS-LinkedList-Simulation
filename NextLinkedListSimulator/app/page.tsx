'use client';
import { useRef, useState } from 'react';
import { CoreButton } from './components/CoreButton';
import { Header } from './components/Header';
import { InputComponent } from './components/InputComponent';
import { LinkedListActionTypes, useLinkedListServiceContext } from './services/LinkedListServiceProvider';

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const { linkedList, linkedListDispatcher } = useLinkedListServiceContext();
  const [activeBtnText, setActiveBtnText] = useState<string>('add');

  const selectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'remove') {
      setActiveBtnText('drop');
    } else {
      setActiveBtnText('add');
    }
  };

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
          <div>LIST: {JSON.stringify(linkedList, null, 2)}</div>
          <InputComponent ref={inputRef} selectRef={selectRef} selectOnChange={selectOnChange} />
          <CoreButton
            onClick={() =>
              linkedListDispatcher({
                type: selectRef.current?.value
                  ? (selectRef.current.value as unknown as LinkedListActionTypes)
                  : 'append',
                data: inputRef.current?.value
              })
            }>
            {activeBtnText}
          </CoreButton>
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
