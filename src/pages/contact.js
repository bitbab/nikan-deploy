import React, { useState } from 'react';
import Layout from 'components/Layout';
import Social from 'components/Social';
import Link from 'next/link';

export default function Contact() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Layout title="تماس با ما">
      <section className="min-h-screen bg-white dark:bg-gray-900 mt-10 md:mt-4">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
                <div className='rounded-3xl border-2 border-blue-300 shadow-md py-3  px-4'> <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                تماس با ما
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                جهت ارتباط با ما و درج هرگونه سوال فرم زیر را ارسال نمایید:
              </p></div>
             
              <form className="mt-12 px-4">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی خود را وارد نمایید"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      placeholder="ایمیل خود را وارد نمایید"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    پیام شما
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="پیام خود را تایپ نمایید"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  ارسال
                </button>
              </form>
            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <Link href={'/'}>
                <div
                  className=" bg-cover transition-all duration-1000 "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    className=" hidden hover-image object-cover mx-auto rounded-full lg:block shrink-0 w-60 h-60 ring-8 ring-slate-500 hover:ring-blue-200 hover:ring-inherit hover:bg-blue-600 cursor-pointer"
                    src={
                      hovered
                        ? '/img/logo/contact-logo-2.png'
                        : '/img/logo/contact-logo-1.png'
                    }
                    alt=""
                  />
                </div>
              </Link>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700  w-72 dark:text-gray-400">
                    تبریز، خیابان نیروی هوایی (منجم)، نرسیده به بلوار منجم
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    تلفن فروشگاه: 32817070 (041){' '}
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 128 128"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 64 2 C 29.8 2 2 29.8 2 64 C 2 74.5 4.5992188 84.800391 9.6992188 93.900391 L 4.4003906 113.30078 C 3.5003906 116.40078 4.3992188 119.60039 6.6992188 121.90039 C 8.9992188 124.20039 12.200781 125.10078 15.300781 124.30078 L 35.5 119 C 44.3 123.6 54.099609 126 64.099609 126 C 98.299609 126 126.09961 98.2 126.09961 64 C 126.09961 47.4 119.7 31.899219 108 20.199219 C 96.2 8.4992187 80.6 2 64 2 z M 64 8 C 79 8 93.099609 13.800391 103.59961 24.400391 C 114.19961 35.000391 120.1 49.1 120 64 C 120 94.9 94.9 120 64 120 C 54.7 120 45.399219 117.59922 37.199219 113.19922 C 36.799219 112.99922 36.300781 112.80078 35.800781 112.80078 C 35.500781 112.80078 35.3 112.80039 35 112.90039 L 13.699219 118.5 C 12.199219 118.9 11.200781 118.09922 10.800781 117.69922 C 10.400781 117.29922 9.6 116.30078 10 114.80078 L 15.599609 94.199219 C 15.799609 93.399219 15.700781 92.600391 15.300781 91.900391 C 10.500781 83.500391 8 73.8 8 64 C 8 33.1 33.1 8 64 8 z M 64 17 C 38.1 17 17 38 17 64 C 17 72.3 19.200781 80.4 23.300781 87.5 C 24.900781 90.3 25.3 93.599219 24.5 96.699219 L 21.599609 107.19922 L 32.800781 104.30078 C 33.800781 104.00078 34.800781 103.90039 35.800781 103.90039 C 37.800781 103.90039 39.8 104.40039 41.5 105.40039 C 48.4 109.00039 56.1 111 64 111 C 89.9 111 111 89.9 111 64 C 111 51.4 106.09922 39.599219 97.199219 30.699219 C 88.399219 21.899219 76.6 17 64 17 z M 43.099609 36.699219 L 45.900391 36.699219 C 47.000391 36.699219 48.099219 36.799219 49.199219 39.199219 C 50.499219 42.099219 53.399219 49.399609 53.699219 50.099609 C 54.099219 50.799609 54.300781 51.699219 53.800781 52.699219 C 53.300781 53.699219 53.100781 54.299219 52.300781 55.199219 C 51.600781 56.099219 50.699609 57.100781 50.099609 57.800781 C 49.399609 58.500781 48.6 59.300781 49.5 60.800781 C 50.4 62.300781 53.299219 67.1 57.699219 71 C 63.299219 76 68.099609 77.600781 69.599609 78.300781 C 71.099609 79.000781 71.900781 78.900391 72.800781 77.900391 C 73.700781 76.900391 76.5 73.599609 77.5 72.099609 C 78.5 70.599609 79.500781 70.900391 80.800781 71.400391 C 82.200781 71.900391 89.400391 75.499219 90.900391 76.199219 C 92.400391 76.899219 93.399219 77.300391 93.699219 77.900391 C 94.099219 78.700391 94.100391 81.599609 92.900391 85.099609 C 91.700391 88.499609 85.700391 91.899609 82.900391 92.099609 C 80.200391 92.299609 77.699219 93.300391 65.199219 88.400391 C 50.199219 82.500391 40.7 67.099609 40 66.099609 C 39.3 65.099609 34 58.100781 34 50.800781 C 34 43.500781 37.799219 40 39.199219 38.5 C 40.599219 37 42.099609 36.699219 43.099609 36.699219 z"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    شماره واتس‌اپ: 09214112609
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    info@nikanbike.com
                  </span>
                </p>
              </div>
              <div className="flex justify-around
               mt-6 w-80 md:mt-8 border-2 shadow-md px-1 py-3 rounded-3xl border-blue-300">
                <h3 className="text-blue-600 dark:text-gray-300 ">
                  ما را دنبال کنید
                </h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-4/5 overflow-hidden items-center rounded-lg lg:col-span-2 h-96 lg:h-auto shadow-md mb-8 border-4 border-yellow-500  hover:border-yellow-400">
          <iframe
            title="map"
            width="100%"
            height="384px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12560.792442818136!2d46.2780881!3d38.0890522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a055937e19d85%3A0x8512bffb1a19d08f!2z2YHYsdmI2LTar9in2Ycg2K_ZiNqG2LHYrtmHINmG24zaqdin2YYg2b7ZiNix!5e0!3m2!1sen!2sde!4v1677239952894!5m2!1sen!2sde"
          />
        </div>
      </section>
    </Layout>
  );
}
