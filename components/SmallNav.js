import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

function SmallNav() {
  return (
    <div className="max-h-screen overflow-y-scroll">
    <div className="w-full  px-4 pt-1 mb-16">
      <div className="mx-auto min-h-screen w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
              <div className='flex justify-start'>   
               <img
                className="object-cover ml-3 w-6  h-6 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/1.jpg"
                alt=""
              />
                <span>دوچرخه</span>
                </div>
          
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className=" px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="grid grid-cols-2">
                  <div className="flex-col">
                    <h6 className="font-bold">کوهستان</h6>
                    <ul>
                      <li>
                        <Link href={'/'}> سایز 24</Link>
                      </li>
                      <li>
                        <Link href={'/'}> سایز 24</Link>
                      </li>
                      <li>
                        <Link href={'/'}> سایز 24</Link>
                      </li>
                      <li>
                        <Link href={'/'}> سایز 24</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold">کوهستان</h6>
                    <ul>
                      <li>سایز 24</li>
                      <li>سایز 26</li>
                      <li>سایز 27.5</li>
                    </ul>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Link href={'/'}>
                <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className='flex justify-start'>   
               <img
                className="object-cover ml-3 w-6  h-6 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/2.jpg"
                alt=""
              />
                <span>تردمیل</span>
                </div>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
              <div className='flex justify-start'>   
               <img
                className="object-cover ml-3 w-6  h-6 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/3.jpg"
                alt=""
              />
                <span>قطعات دوچرخه</span>
                </div>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
              <div className='flex justify-start'>   
               <img
                className="object-cover ml-3 w-6  h-6 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/4.jpg"
                alt=""
              />
               <span>لوازم جانبی</span>
                </div>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
              <div className='flex justify-start'>   
               <img
                className="object-cover ml-3 w-6  h-6 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/5.jpg"
                alt=""
              />
               <span>پوشاک</span>
                </div>
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
      
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Link href={'/'}>
                <Disclosure.Button className="disclure flex w-full justify-start rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3 rounded-full ring-4 p-1 ring-gray-300 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
                  <span>تماس با ما</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Link href={'/'}>
                <Disclosure.Button className="disclure flex w-full justify-start rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3 rounded-full ring-4 p-1 ring-gray-300 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
                  <span>درباره ما</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Link href={'/'}>
                <Disclosure.Button className="disclure flex w-full justify-start rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3 rounded-full ring-4 p-1 ring-gray-300 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
                  <span>وبلاگ</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Link href={'/'}>
                <Disclosure.Button className="disclure flex w-full justify-start  rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3 rounded-full ring-4 p-1 ring-gray-300 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
                  <span>راهنمای سایز دوچرخه</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    </div>
  );
}
export default SmallNav;
