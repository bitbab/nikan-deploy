import Link from 'next/link';
import React from 'react';

export default function CategoryList() {
  return (
    <div>
      {/* <div classNameName='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            دسته بندی محصولات
          </h1>

      

          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-3 xl:mt-6  lg:grid-cols-5">
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-3 md:p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/1.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-sm md:text-base lg:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  دوچرخه
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-3 md:p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                 className="object-cover w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/2.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-sm md:text-base lg:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  تردمیل
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-3 md:p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                 className="object-cover w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/3.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-xxs sm:text-sm md:text-base lg:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  قطعات دوچرخه
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-3 md:p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/4.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-sm md:text-base lg:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  لوازم جانبی
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-3 md:p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                 className="object-cover w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/5.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-sm md:text-base lg:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  پوشاک
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
