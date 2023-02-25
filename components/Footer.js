import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner">
          <div className="container p-6 mx-auto">
            <div className="lg:flex">
              <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                  <a href="/">
                    <img
                      className="w-auto h-20"
                      src="/img/logo/logo.png"
                      alt="نیکان بایک"
                    />
                  </a>

                  <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                    آدرس فروشگاه: تبریز، خیابان نیروی هوایی (منجم)، نرسیده به
                    بلوار منجم
                  </p>
                  <div className="flex">
                    <div className="font-bold my-2 text-blue-600">
                      {' '}
                      ما را دنبال کنید
                    </div>
                    <div className=" mx-2">
                      <Social />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      حساب کاربری
                    </h3>
                    <a
                      href="/order-history"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      سفارشات من
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      صورت های مالی من
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      آدرس های من
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      اطلاعات
                    </h3>
                    <a
                      href="/about"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      درباره ما
                    </a>
                    <a
                      href="/rules"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      شرایط و ضوابط استفاده
                    </a>
                    <a
                      href="size-guide"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      انتخاب سایز
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      محصولات
                    </h3>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      دوچرخه
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      تردمیل
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      قطعات دوچرخه
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      لوازم جانبی دوچرخه
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      پوشاک
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      تماس با ما
                    </h3>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      تلفن فروشگاه: 04132817070{' '}
                    </span>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      شماره واتس‌اپ: 09214112609
                    </span>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      info@nikanbike.com
                    </span>
                  </div>
                </div>
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
