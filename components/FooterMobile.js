import Link from 'next/link';
import React from 'react';
import Social from './Social';

export default function Footer() {
  return (
    <footer className="bg-white  shadow-inner sm:hidden mb-24">
      <div className="container  mx-auto">
        <div className="lg:flex">
          <div className="w-full ">
            <div className="px-6 ">
              <div>
                <p className="p-2 text-center shadow-md mb-2 rounded-md text-2xl font-extrabold border-b-2 border-r-2 border-l-2 text-rose-600">
                  09214112609
                </p>
                <div className="flex -mx-6 ">
                  <div className="font-bold my-2 text-blue-600">
                    با ما همراه باشید
                  </div>
                  <div className=" mx-2 flex justify-center">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex gap-8  ">
              <div>
                <h3 className="text-gray-900 font-semibold ">نیکان بایک</h3>
                <Link
                  href="/about"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  درباره ما
                </Link>
                <Link
                  href="/contact"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  تماس با ما
                </Link>
                <Link
                  href="/rules"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  قوانین
                </Link>
              </div>

              <div>
                <h3 className=" text-gray-900 font-semibold  ">
                  خدمات مشتریان
                </h3>
                <Link
                  href="/order-history"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  پیگیری سفارش
                </Link>
                <Link
                  href="/rules"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  رویه عودت کالا
                </Link>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold  ">راهنمای خرید</h3>
                <Link
                  href="/rules"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  ثبت سفارش
                </Link>
                <Link
                  href="/rules"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  رویه ارسال
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full -mx-6 ">
          <div className="pr-6">
            <p className="max-w-sm  mt-3 text-gray-500  py-2 text-sm">
              <span className="font-semibold text-gray-900">آدرس فروشگاه:</span>
              <span className='pr-2 '>تبریز، خیابان نیروی هوایی(منجم)</span>

              <span className='pr-1'>نرسیده به بلوار منجم</span>
            </p>
            <div className="flex justify-start">
              <Link href="/">
                <img
                  className="w-auto h-20 ml-32"
                  src="/img/logo/logo.png"
                  alt="نیکان بایک"
                />
              </Link>
              <Link href="/">
                <img
                  className="w-auto h-20"
                  src="/img/logo/namad.jpg"
                  alt="نیکان بایک"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none " />

        <div>
          <p className="text-center text-gray-500  text-xs">
            نیکان بایک 1402 © کلیه حقوق برای فروشگاه محفوظ می باشد .
          </p>
        </div>
      </div>
    </footer>
  );
}
