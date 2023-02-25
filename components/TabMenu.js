import { useState } from 'react';
import Link from 'next/link';

function TabMenu() {
  const [activeTab, setActiveTab] = useState('دوچرخه');

  const openCategory = (event, categoryName) => {
    // Set the active tab to the clicked button
    setActiveTab(categoryName);
  };

  return (
    <div className="flex w-full  bg-gray-100 rounded-md">
      <div className="w-1/5  bg-gray-200">
        <div className="flex flex-col justify-start items-center p-2">
          <button
            className={`tablinks ${
              activeTab === 'دوچرخه' ? 'active' : ''
            } mb-2 hover:bg-slate-100 rounded-md px-11 py-2`}
            onMouseOver={(e) => openCategory(e, 'دوچرخه')}
          >
            دوچرخه
          </button>
          <button
            className={`tablinks ${
              activeTab === 'تردمیل' ? 'active' : ''
            } mb-2 hover:bg-slate-100 rounded-md px-11 py-2`}
            onMouseOver={(e) => openCategory(e, 'تردمیل')}
          >
            تردمیل
          </button>
          <button
            className={`tablinks ${
              activeTab === 'قطعات دوچرخه' ? 'active' : ''
            } mb-2 hover:bg-slate-100 rounded-md px-3 py-2`}
            onMouseOver={(e) => openCategory(e, 'قطعات دوچرخه')}
          >
            قطعات دوچرخه{' '}
          </button>
          <button
            className={`tablinks ${
              activeTab === 'لوازم جانبی' ? 'active' : ''
            } mb-2 hover:bg-slate-100 rounded-md px-8 py-2`}
            onMouseOver={(e) => openCategory(e, 'لوازم جانبی')}
          >
            لوازم جانبی
          </button>
          <button
            className={`tablinks ${
              activeTab === 'پوشاک' ? 'active' : ''
            } mb-2 hover:bg-slate-100 rounded-md px-11 py-2`}
            onMouseOver={(e) => openCategory(e, 'پوشاک')}
          >
            پوشاک
          </button>
        </div>
      </div>
      <div className="w-4/5 h-full">
        <div
          id="دوچرخه"
          className={`tabcontent ${activeTab === 'دوچرخه' ? 'active' : ''} `}
        >
          <div className="grid grid-cols-3">
            <div className='ml-2'>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">کوهستان</h5>
              </Link>

              <ul className=" text-slate-500">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سایز 24</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سایز 26</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سایز 27.5</Link>
                </li>
                <li className="hover:text-slate-800">
                  <Link href={'/'}> سایز 29</Link>
                </li>
              </ul>
            </div>
            <div className='ml-2'>
              <Link href={'/'}>
              
                <h5 className="mb-2 font-bold hover:text-rose-700">بچه گانه</h5>
              </Link>
              <ul className=" text-slate-500">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سایز 12</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سایز 16</Link>
                </li>
                <li className="hover:text-slate-800">
                  <Link href={'/'}> سایز 20</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">شهری</h5>
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
                <h5 className="mb-2 font-bold hover:text-rose-700">تردمیل</h5>
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
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  سیستم دنده
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> دسته دنده</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> خودرو</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> رکاب</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> طبق قامه</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> طبق عوض کن</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>میل/توپی </Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> زنجیر/قفل زنجیر</Link>
                </li>
                <li className="hover:text-slate-800">
                  <Link href={'/'}>شانزمان/گوشواره </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  سیستم ترمز
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> ترمز بندی</Link>
                </li>
                <li className="hover:text-slate-800  mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> لقمه/لنت</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500 ">
                  <Link href={'/'}>کت </Link>
                </li>
                <li className="hover:text-slate-800  mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سیستم ترمز/سیستم دنده</Link>
                </li>
                <li className="hover:text-slate-800 ">
                  <Link href={'/'}> روتور دیسک</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  سیستم تنه
                </h5>
              </Link>
              <ul className=" text-slate-500">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> جک</Link>
                </li>{' '}
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> گریپ</Link>
                </li>{' '}
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>بالانس </Link>
                </li>{' '}
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>فرمان/کرپی </Link>
                </li>{' '}
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> زین/لوله زین</Link>
                </li>{' '}
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> کاسه/بلبرینگ</Link>
                </li>{' '}
                <li className="hover:text-slate-800">
                  <Link href={'/'}> تنه/دوشاخ</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  لاستیک و تیوپ
                </h5>
              </Link>
              <ul className=" text-slate-500">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> لاستیک</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>تیوپ </Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> طوقه</Link>
                </li>
                <li className="hover:text-slate-800">
                  <Link href={'/'}>پره </Link>
                </li>
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
            <div className='ml-2'>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  باربند
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800  mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> باربند ماشین</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>ترکبند </Link>
                </li> <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> گلگیر</Link>
                </li> <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> سبد / صندوق</Link>
                </li> <li className="hover:text-slate-800">
                  <Link href={'/'}> پشتی زین</Link>
                </li>
              
              </ul>
            </div>
            <div className='ml-2'>
            <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  کاور
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>کاور تنه </Link>
                </li>   <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> استیکر</Link>
                </li>   <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>روکش زین </Link>
                </li>   <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> چادر دوچرخه</Link>
                </li>   <li className="hover:text-slate-800">
                  <Link href={'/'}> کیف</Link>
                </li>
              
              </ul>
            </div>
            <div className='ml-2'>
            <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  ابزار
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}>آچار </Link>
                </li>  <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> پنچرگیری</Link>
                </li>  <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> قمقمه و بست</Link>
                </li>  <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> تلمبه</Link>
                </li>  <li className="hover:text-slate-800">
                  <Link href={'/'}> اسپری</Link>
                </li>
              
              </ul>
            </div>
            <div className='ml-2'>
            <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  ایمنی
                </h5>
              </Link>
              <ul className=" text-slate-500 ">
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> قفل</Link>
                </li>
                <li className="hover:text-slate-800 mb-1 border-b-2 border-dashed border-slate-500">
                  <Link href={'/'}> چراغ</Link>
                </li> <li className="hover:text-slate-800">
                  <Link href={'/'}>بوق و زنگ </Link>
                </li>
              </ul>
            </div>
            <div className='ml-2'>
            <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  آینه
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  کیلومتر شمار
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  پایه نگهدارنده دوچرخه
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
                  بخاری
                </h5>
              </Link>
              <Link href={'/'}>
                <h5 className="mb-2 font-bold hover:text-rose-700">
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
                <h5 className="mb-2 font-bold hover:text-rose-700">کلاه</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">دستکش</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">لباس</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">جوراب</h5>
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                {' '}
                <h5 className="mb-2 font-bold hover:text-rose-700">عینک</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabMenu;
