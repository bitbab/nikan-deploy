import Link from "next/link";
import { useState } from "react";
import SearchBox from "./SearchBox";
import SmallNav from "./SmallNav";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
 
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="h-7 w-auto "
                src="/img/logo/logo50.png"
                alt="نیکان بایک"
              />
            </Link>
           
          </div>
          <SearchBox/>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-600"
              aria-expanded="false"
            >
              <span className="sr-only">منو اصلی را بازکنید</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           <SmallNav/>
          </div>
          
        </div>
      </div>
    </nav>
   
  );
};

export default MobileMenu;
