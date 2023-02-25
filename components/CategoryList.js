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

          {/* <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p> */}

          <div className="grid grid-cols-1 gap-8 mt-3 xl:mt-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/1.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  دوچرخه
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/2.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  تردمیل
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/3.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  قطعات دوچرخه
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/4.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  لوازم جانبی
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"></p>
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/cat/5.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
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
