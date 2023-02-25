import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

function SmallNav() {
  return (
    <div className="w-full px-4 pt-1">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <span>دوچرخه</span>
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
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>تردمیل</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <span>قطعات دوچرخه</span>
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
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <span>لوازم جانبی</span>
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
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <span>پوشاک</span>
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
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
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
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
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
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>راهنمای سایز دوچرخه</span>
                </Disclosure.Button>
              </Link>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
export default SmallNav;
