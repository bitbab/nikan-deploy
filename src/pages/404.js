import React, { useState } from 'react';
import Link from 'next/link';
export default function () {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="flex flex-col justify-center  items-center w-full lg:w-1/2 border-2 border-blue-300 shadow-lg p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              خطای 404
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              صفحه مورد نظر یافت نشد
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              لطفا از طریق لینک زیر یا لوگو به نیکان بایک برگردید
            </p>

            {/* <div className="flex items-center mt-6 gap-x-3"> */}

              <Link href={'/'} className="mt-4 w-2/3 px-5 py-2 text-sm text-center text-white transition-colors duration-300 bg-blue-500 rounded-lg shrink-0  hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                نیکان بایک
              </Link>
        
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <Link href={'/'}>
              <div
                className=" bg-cover transition-all duration-1000 "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="  hover-image object-cover mx-auto rounded-full lg:block shrink-0 w-60 h-60 ring-8 ring-slate-500 hover:ring-blue-200 hover:ring-inherit hover:bg-blue-600 cursor-pointer"
                  src={
                    hovered
                      ? '/img/logo/contact-logo-2.png'
                      : '/img/logo/contact-logo-1.png'
                  }
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
