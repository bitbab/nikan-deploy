import Link from 'next/link'
import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner sm:hidden mb-24">
          <div className="container  mx-auto">
            <div className="lg:flex">
            <div className="w-full -mx-6 ">
                <div className="px-6">
                <div>
                  <p className='p-2 text-center shadow-md mb-2 rounded-md text-2xl font-extrabold border-b-2 border-r-2 border-l-2 text-rose-600'>09214112609</p>
                  <div className='flex' >
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

              <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-3 gap-2 ">
                
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                     نیکان بایک
                    </h3>
                    <Link
                      href="/about"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                     درباره ما
                    </Link>
                    <Link
                      href="/contact"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                     تماس با ما
                    </Link>
                    <Link
                      href="/rules"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                   قوانین
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                    خدمات مشتریان
                    </h3>
                    <Link
                      href="/order-history"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                     پیگیری سفارش
                    </Link>
                    <Link
                      href="/rules"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      رویه عودت کالا
                    </Link>
                 
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                    راهنمای خرید
                    </h3>
                    <Link
                      href="/rules"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                     ثبت سفارش
                    </Link>
                    <Link
                      href="/rules"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                     رویه ارسال
                    </Link>
                
                 
                  </div>

                
                </div>
              </div>
            </div>
 <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400 py-2">
                    آدرس فروشگاه: تبریز، خیابان نیروی هوایی (منجم)، نرسیده به
                    بلوار منجم
                  </p>
                <div className='flex justify-start'><Link href="/">
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
                  </Link></div>  

                 
                
                </div>
              </div>
            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

            <div>
              <p className="text-center text-gray-500 dark:text-gray-400">
                نیکان بایک 1402 © کلیه حقوق برای فروشگاه محفوظ می باشد .
              </p>
            </div>
          </div>
        </footer>
  )
}
