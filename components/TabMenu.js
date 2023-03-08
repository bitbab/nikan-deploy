import { useState } from 'react';
import Link from 'next/link';


function TabMenu() {
  const [activeTab, setActiveTab] = useState('دوچرخه');

  const openCategory = (event, categoryName) => {
    // Set the active tab to the clicked button
    setActiveTab(categoryName);
  };

  return (
    <div className="flex w-full  bg-gray-50 rounded-md">
      <div className="w-1/4  ">
        <div className="flex flex-col justify-start items-center p-2">
          <button
            className={`tablinks ${
              activeTab === 'دوچرخه' ? 'active' : ''
            } text-slate-900 hover:text-blue-600 mb-2 border-2  hover:ml-1 hover:bg-slate-100 rounded-md w-full py-2 hover:border-b-2 hover:shadow-lg hover:-translate-x-1 hover:duration-75`}
            onMouseOver={(e) => openCategory(e, 'دوچرخه')}
          >
            <div className="flex ">
              <img
                className="object-cover mr-3 ml-7 w-8  h-8 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/1.jpg"
                alt=""
              />
              <Link href={'/'} className="pt-1">
                دوچرخه
              </Link>
            </div>
          </button>
          <button
            className={`tablinks ${
              activeTab === 'تردمیل' ? 'active' : ''
            } text-slate-900 hover:text-blue-600 mb-2 border-2 hover:ml-1 hover:bg-slate-100 rounded-md w-full py-2  hover:border-b-2 hover:shadow-lg hover:-translate-x-1  hover:duration-75`}
            onMouseOver={(e) => openCategory(e, 'تردمیل')}
          >
            <div className="flex ">
              <img
                className="object-cover mr-3 ml-7 w-8  h-8 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/2.jpg"
                alt=""
              />
              <Link href={'/'} className="pt-1">تردمیل </Link>
            </div>
          </button>
          <button
            className={`tablinks ${
              activeTab === 'قطعات دوچرخه' ? 'active' : ''
            } text-slate-900 hover:text-blue-600 mb-2 border-2 hover:ml-1 hover:bg-slate-100 rounded-md w-full  py-2 hover:border-b-2 hover:shadow-lg hover:-translate-x-1  hover:duration-75`}
            onMouseOver={(e) => openCategory(e, 'قطعات دوچرخه')}
          >
            <div className="flex ">
              <img
                className="object-cover mr-3 ml-6 w-8  h-8 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/3.jpg"
                alt=""
              />

              <Link href={'/'} className="pt-1"> قطعات دوچرخه </Link>
            </div>
          </button>
          <button
            className={`tablinks ${
              activeTab === 'لوازم جانبی' ? 'active' : ''
            } text-slate-900 hover:text-blue-600 mb-2 border-2 hover:ml-1 hover:bg-slate-100 rounded-md w-full py-2 hover:border-b-2 hover:shadow-lg hover:-translate-x-1  hover:duration-75`}
            onMouseOver={(e) => openCategory(e, 'لوازم جانبی')}
          >
            <div className="flex ">
              <img
                className="object-cover mr-3 ml-7 w-8  h-8 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/4.jpg"
                alt=""
              />

              <Link href={'/'} className="pt-1"> لوازم جانبی </Link>
            </div>
          </button>
          <button
            className={`tablinks ${
              activeTab === 'پوشاک' ? 'active' : ''
            } text-slate-900 hover:text-blue-600 mb-2 border-2 hover:ml-1 hover:bg-slate-100 rounded-md w-full py-2 hover:border-b-2 hover:shadow-lg hover:-translate-x-1  hover:duration-75`}
            onMouseOver={(e) => openCategory(e, 'پوشاک')}
          >
            <div className="flex">
              <img
                className="object-cover mr-3 ml-7 w-8  h-8 rounded-full ring-4 ring-gray-300 "
                src="/img/cat/5.jpg"
                alt=""
              />

              <Link href={'/'} className="pt-1"> پوشاک </Link>
            </div>
          </button>
        </div>
      </div>
      <div className="w-4/5 h-full">
        <div
          id="دوچرخه"
          className={`tabcontent ${activeTab === 'دوچرخه' ? 'active' : ''} `}
        >
          <div className="grid grid-cols-3">
            <div className="ml-2">
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">کوهستان</h5>
              </Link>

              <ul className=" text-slate-500">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 24
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 26
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 27.5
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 29
                  </li>
                </Link>
              </ul>
            </div>
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">بچه گانه</h5>
              </Link>
              <ul className=" text-slate-500">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg  hover:-translate-x-2  hover:duration-300">
                    سایز 12
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 16
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سایز 20
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">شهری</h5>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="تردمیل"
          className={`tabcontent ${activeTab === 'تردمیل' ? 'active' : ''}`}
        >
          <div>
            <Link href={'/'}>
              <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">تردمیل</h5>
            </Link>
          </div>
        </div>
        <div
          id="قطعات دوچرخه"
          className={`tabcontent ${
            activeTab === 'قطعات دوچرخه' ? 'active' : ''
          }`}
        >
          <div className="grid grid-cols-4">
            <div>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">
                  سیستم دنده
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    دسته دنده
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    خودرو
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    رکاب
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    طبق قامه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    طبق عوض کن
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    میل/توپی
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    زنجیر/قفل زنجیر
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    شانزمان/گوشواره
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">
                  سیستم ترمز
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    ترمز بندی
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    لقمه/لنت
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    کت
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سیستم ترمز/سیستم دنده
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    روتور دیسک
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">
                  سیستم تنه
                </h5>
              </Link>
              <ul className=" text-slate-500">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    جک
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    گریپ
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    بالانس
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    فرمان/کرپی
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    زین/لوله زین
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    کاسه/بلبرینگ
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    تنه/دوشاخ
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">
                  لاستیک و تیوپ
                </h5>
              </Link>
              <ul className=" text-slate-500">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    لاستیک
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    تیوپ
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    طوقه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    پره
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="لوازم جانبی"
          className={`tabcontent ${
            activeTab === 'لوازم جانبی' ? 'active' : ''
          }`}
        >
          <div className="grid grid-cols-5">
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">باربند</h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    باربند ماشین
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    ترکبند
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    گلگیر
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    سبد / صندوق
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    پشتی زین
                  </li>
                </Link>
              </ul>
            </div>
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">کاور</h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    کاور تنه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    استیکر
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    روکش زین
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    چادر دوچرخه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    کیف
                  </li>
                </Link>
              </ul>
            </div>
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">ابزار</h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    آچار
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    پنچرگیری
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    قمقمه و بست
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    تلمبه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    اسپری
                  </li>
                </Link>
              </ul>
            </div>
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 border-b-2 pb-1 hover:shadow-md">ایمنی</h5>
              </Link>
              <ul className=" text-slate-500 ">
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    قفل
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    چراغ
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className="hover:text-slate-800 mb-1 hover:border-b-2 hover:shadow-lg hover:-translate-x-2  hover:duration-300">
                    بوق و زنگ
                  </li>
                </Link>
              </ul>
            </div>
            <div className="ml-2">
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">آینه</h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">
                  کیلومتر شمار
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">
                  پایه نگهدارنده دوچرخه
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">بخاری</h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">
                  کبریت چخماقی
                </h5>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="پوشاک"
          className={`tabcontent ${activeTab === 'پوشاک' ? 'active' : ''}`}
        >
          <div className="grid grid-cols-5">
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">کلاه</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">دستکش</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">لباس</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">جوراب</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700 hover:shadow-md">عینک</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabMenu;
