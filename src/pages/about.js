import React from 'react';
import Layout from 'components/Layout';
import SecondrySocial from 'components/SecondrySocial';

export default function About() {
  return (
    <Layout title="درباره ما">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">
            <span className="text-blue-500">درباره ما</span>
          </h1>

          <div className="max-w-6xl mx-auto my-6  text-gray-500 dark:text-gray-300">
            <p>
              امروزه تاثیر اینترنت در ارائه خدمات غیر قابل انکار است، به صورتی
              که روز به روز تمایل مردم برای بهره‌گیری از انواع خدمات اینترنتی
              بیشتر می‌شود.
            </p>
            <p>
              {' '}
              خرید سریع، راحت و توام با مقایسه از اصلی‌ترین ویژگی های خرید
              اینترنتی بوده و خریدار می‌تواند با آگاهی از نظرات و تجارب خریداران
              دیگر، یک انتخاب دقیق و آگاهانه داشته باشد.{' '}
            </p>
            <p>
              در کنار تمام محاسن، تردید عده‌ای در خرید اینترنتی غیر قابل انکار
              است. نیکان‌بایک با بیش از 20 سال سابقه‌ی فعالیت در حوزه فروش
              دوچرخه، به خریدار این اطمینان را می‌دهد که انتخابی توام با رضایت
              را خواهد داشت. نیکان بایک گلچینی از بهترین برندها را با بهترین
              کیفیت برای شما فراهم کرده و برای حفظ قیمت‌ رقابتی درارتباط مستقیم
              با تولیدکنندگان و تامین‌کنندگان دست اول کالا است.{' '}
            </p>
            <p>
              نیکان‌بایک تضمین می‌کند که در هر شرایطی تحویل به موقع و بسته‏‌بندی
              با کیفیت را در اولویت کار خود قرار دهد. گروه نیکان بایک همواره
              آماده ارائه مشاوره در خصوص انتخاب دوچرخه مناسب و لوازم مورد نیاز
              مشتری می‌باشد.
            </p>
          </div>
          <div className="border-2 shadow-xl rounded-lg px-4 py-6">
            {' '}
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              <span className="text-blue-500">تیم نیکان بایک</span>
            </h1>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="/img/logo/contact-logo-1.png"
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                     رضا نیکان پور
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      مدیر عامل
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                دارای تجربه بیش از 30 سال و ...
                </p>

               <SecondrySocial/>
            
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="/img/logo/contact-logo-1.png"
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                     قائم مقام
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      قائم مقام
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                ماهر و ....
                </p>

                <SecondrySocial/>
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="/img/logo/contact-logo-1.png"
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                     حسابدار
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                     مدیر مالی
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                 با تجربه و ...
                </p>

                <SecondrySocial/>
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="/img/logo/contact-logo-1.png"
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      فروش
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    مسئول فروش
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                روابط عمومی بالا...
                </p>

                <SecondrySocial/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
