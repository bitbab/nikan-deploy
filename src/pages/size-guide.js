import React from 'react';
import Layout from 'components/Layout';
import SecondrySocial from 'components/SecondrySocial';

export default function SizeGuide() {
  return (
    <Layout title="راهنمای انتخاب سایز دوچرخه">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">
            <span className="text-blue-500">راهنمای انتخاب سایز دوچرخه</span>
          </h1>

          <div className="max-w-6xl mx-auto my-6  text-gray-500 dark:text-gray-300">
            <div>
              <h2 className="text-xl font-semibold  text-gray-800  lg:text-2xl dark:text-white">
                تعیین سایز دوچرخه بر مبنای قطر چرخ یا سایز تنه؟
              </h2>
              <p className="mt-4">
                در بازار، دوچرخه‌ها عموما با سایز چرخ آنها معرفی می‌شوند.
                بنابراین، اگر فروشنده به شما گفت که سایز دوچرخه 26 یا 27.5 است،
                به قطر خارجی چرخ آن اشاره می‌کند. منظور از قطر خارجی چرخ، قطر
                رینگ و لاستیک با همدیگر است. بیشتر دوچرخه‌های بزرگسال موجود در
                بازار دارای قطر چرخ 26، 27.5 یا 28 اینچ هستند.
              </p>
              <p className="mt-4">
                قطر چرخ تعیین کننده کاربرد و نوع استفاده از دوچرخه است. به طور
                مثال، دوچرخه های شهری و سایکل توریست دارای قطر چرخ 28 اینچ بوده
                ولی دوچرخه‌های کوهستان مسابقه‌ای 27.5 یا 29 اینچ می‌باشد. این در
                حالی است که سایز تنه بر مبنای قد و سایر ویژگی‌های جسمانی دوچرخه
                سوار تعیین می‌شود.
              </p>
              <p className="mt-4">
                با اینحال در عمل فاصله بین محل نشستن شما و پدال دوچرخه( سایز
                فریم یا اندازه تنه) نقش اصلی در کیفیت سواری را دارد و بسیاری
                معیار انتخاب سایز دوچرخه قرار می‌دهند.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold  text-gray-800  lg:text-2xl dark:text-white mt-4">
                روش متداول تعیین سایز فریم
              </h2>
              <p className="mt-4">
                روش متعادل برای تعیین سایز فریم یا تنه بر مبنای قد دوچرخه سوار
                است. در این روش بایستی ابتدا قد خود را اندازه‌گیری نموده و سپس
                از جدول زیر برای تخمین زدن اندازه دوچرخه مناسب استفاده کنید.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold  text-gray-800  lg:text-2xl dark:text-white mt-4">
                مشاوره گرفتن از متخصصان دوچرخه و تست حضوری
              </h2>
              <p className="mt-4">
                در نهایت، انتخاب سایز دوچرخه نیازمند اندازه‌گیری دقیق المان‌های
                جسمی شما و نوع استفاده شما بستگی دارد. از این روست که توصیه
                می‌کنیم در زمان خرید دوچرخه حتما با افراد متخصص در این حوزه
                مشورت کنید. در همین راستا، شما می‌توانید در این زمینه با
                کارشناسان فروش ما تماس بگیرید در این صورت نگرانی‌های شما برطرف
                شده و لذت واقعی دوچرخه‌سواری را تجربه خواهید کرد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
