
import Link from 'next/link';


function MainNav() {
 

  return (

    <div>
      <ul className="flex">
   
        <li
          className="flex px-2 py-2 -mb-px text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
     
        >
          <Link href="/contact" className="flex justify-center ">
            <div className="ml-2 w-6 h-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <span className="text-sm">تماس با ما</span>
            </div>
          </Link>
        </li>
        <li
          className="flex px-2 py-2 -mb-px text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
          // ={handleMenuClick}
        >
          <Link href="/about" className="flex justify-center ">
            <div className=" w-6 h-6 ml-2">
              {/* <img src="/img/icons/icons8-about-us-58.png" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div>
              <span className="text-sm">درباره ما</span>
            </div>
          </Link>
        </li>
        <li
          className="flex px-2 py-2 -mb-px text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
          // ={handleMenuClick}
        >
          <Link href="/blog" className="flex justify-center ">
            <div className="w-6 h-6 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div>
              <span className="text-sm">وبلاگ</span>
            </div>
          </Link>
        </li>
        <li
          className="flex px-2 py-2 -mb-px text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
          // ={handleMenuClick}
        >
          <Link href="/size-guide" className="flex justify-center ">
            <div className="w-6 h-6 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
            </div>
            <div>
              {' '}
              <span className="text-sm">راهنمای سایز دوچرخه</span>
            </div>{' '}
          </Link>
        </li>
      </ul>
      
    </div>
   
  );
}

export default MainNav;
