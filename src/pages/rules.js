import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';
import { Disclosure } from '@headlessui/react';

export default function Rules() {
  return (
    <Layout title="شرایط و ضوابط">
      <div className="mt-14 md:mt-6 mb-8">
        <h3 className="text-slate-900 font-semibold mb-8">
          ورود کاربران به وب‌سایت <Link href={'/'}><span className='font-semibold text-rose-600'>نیکان بایک</span></Link>،&nbsp;استفاده از پروفایل شخصی و
          سایر خدمات ارائه شده توسط نیکان‌بایک به معنای پذیرفتن شرایط و قوانین و
          همچنین نحوه استفاده از خدمات نیکان‌بایک است. توجه داشته باشید که ثبت
          سفارش نیز در هر زمان به معنی پذیرفتن کلیه شرایط و قوانین نیکان‌بایک از
          سوی کاربر است. بنابراین عمل به قوانین و مقررات سایت به عنوان یک
          قرارداد الزامی است.
        </h3>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                  <span>قوانین عمومی</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>
                  توجه داشته باشید کلیه اصول نیکان‌بایک منطبق با قوانین جمهوری
                  اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف
                  کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با
                  کاربر است.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                  <span> قوانین ثبت، پردازش و ارسال سفارش </span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
          - سفارشات ثبت شده تا ساعت 12 ظهر در اولین روز کاری بعد از ثبت سفارش و
          سفارشات ثبت شده بعد از ساعت 12 در دومین روز کاری بعد از ثبت سفارش
          ارسال خواهند شد.
        </p>
        <p>
          - روز کاری به معنی روز شنبه تا پنج شنبه هر هفته، به استثنای تعطیلات
          رسمی در ایران است.
        </p>
        <p>
          - نیکان‌بایک به مشتریان خود در 7 روز هفته و 24 ساعت در روز امکان
          سفارش‌‏گذاری می‌‏دهد.
        </p>
        <p>
          - نیکان‌بایک همواره در ارسال و تحویل کلیه سفارش‌‏های ثبت شده، نهایت
          دقت و تلاش خود را انجام می‌دهد. با وجود این، در صورتی که موجودی محصولی
          در نیکان‌بایک به پایان برسد، حتی پس از اقدام مشتری به سفارش‌‏دهی، حق
          کنسل کردن آن سفارش و یا استرداد وجه سفارش برای نیکان‌بایک محفوظ است.
        </p>
        <p>
          - هنگام پرداخت از طریق درگاه پرداخت زرین پال، 2.5% تا سقف 10/000 تومان
          بر مبلغ کل افزوده خواهد شد، این مبلغ مالیات درگاه زرین پال می‌باشد و
          به صورت اتوماتیک محاسبه می‌شود.
        </p>
        <p>
          - در صورت بروز مشکل در پردازش نهایی سبد خرید مانند اتمام موجودی کالا،
          مبلغ پرداخت شده طی 24 الی 48 ساعت کاری به حساب مشتری واریز خواهد شد.
        </p>
        <p>
          - طبق قوانین تجارت الکترونیک در صورت وجودایراد و خرابی در کالا مرجوع
          کالا تا 7 روز برای مشتری امکان پذیر است و پس از رسیدن کالا به انبار
          نیکان بایک کل مبلغ پرداخت شده&nbsp; به حساب مشتری عودت داده می‌شود.
        </p>
        <p>
          همچنین در مرجوع سلیقه ای هزینه ارسال رفت و برگشت به عهده مشتری خواهد
          بود و هزینه کالا به حساب مشتری عودت داده خواهد شد.
        </p>
        <p>
          - در صورت بروز هرگونه خطا نسبت به درج قیمت کالاهای موجود در سایت
          نیکان‌بایک، حق بلا اثر نمودن سفارش و خرید انجام شده توسط مشتری، برای
          نیکان‌بایک محفوظ است&nbsp;همچنین نیکان‌بایک در اسرع وقت وجوه دریافتی
          را طی 24 الی 48 ساعت کاری به حساب اعلام شده توسط مشتری واریز و عودت
          می‌نماید و مشتری با ورود به سایت نیکان‌بایک می‌پذیرد از این امر آگاهی
          داشته و در این خصوص ادعایی نخواهد داشت.​
        </p>
        <p>
          - کاربران باید هنگام سفارش کالای مورد نظر خود، فرم سفارش را با اطلاعات
          صحیح و به طور کامل تکمیل کنند. بدیهی است درصورت ورود اطلاعات ناقص یا
          نادرست،&nbsp;بروز هرگونه مشکل در روند ارسال و تحویل بسته به مشتری به
          عهده خود مشتری خواهد بود.
        </p>
        <p>
          بنابراین درج آدرس، ایمیل و شماره تماس‌های همراه و ثابت توسط مشتری، به
          منزله مورد تایید بودن صحت آنها است و در صورتی که این موارد به صورت
          صحیح یا کامل درج نشده باشد، نیکان‌بایک جهت اطمینان از صحت و قطعیت ثبت
          سفارش می‌تواند از مشتری، اطلاعات تکمیلی و بیشتری درخواست کند.
          <br />
          همچنین، مشتریان می‌توانند نام، آدرس و تلفن شخص دیگری را برای تحویل
          گرفتن سفارش وارد کنند و تحویل گیرنده سفارش هنگام دریافت کالا باید کارت
          شناسایی همراه داشته باشد.
        </p>
        <p>
          - با توجه به ثبت سیستمی سفارش، به هیچ عنوان امکان صدور فاکتور مجدد یا
          تغییر مشخصات آن از جمله تغییر فاکتوری که به نام شخص حقیقی صادر شده، به
          نام شخص حقوقی وجود ندارد. بنابراین لازم است مشتریان هنگام ثبت سفارش،
          نسبت به این مساله دقت لازم را داشته باشند. همچنین آدرسی که خریدار به
          عنوان آدرس تحویل‌گیرنده ثبت یا انتخاب می‌کند، در فاکتور درج خواهد شد و
          تغییر آدرس درج شده روی فاکتور پس از پردازش و تایید سفارش، به هیچ عنوان
          امکان‌پذیر نخواهد بود.
        </p>
        <p>
          - لازم به ذکر است افزودن کالا به سبد خرید به معنی رزرو کالا نیست و هیچ
          گونه حقی را برای مشتریان ایجاد نمی‌کند. همچنین تا پیش از ثبت نهایی،
          هرگونه تغییر از جمله تغییر در موجودی کالا یا قیمت، روی کالای افزوده
          شده به سبد خرید اعمال خواهد شد. بنابراین به مشتریانی که تمایل و تصمیم
          به خرید قطعی دارند توصیه می‌شود در اسرع وقت سفارش خود را نهایی کنند تا
          با اتمام موجودی یا تغییر قیمتی کالاها روبرو نشوند.
        </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                <span >
            قوانین خسارت در هنگام حمل و نقل
          </span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          
        <p>
          نیکان‌بایک همواره نهایت تلاش خود را می‏‌کند تا کلیه سفارش‏‌ها در نهایت
          صحت و بدون آسیب به دست مشتریان خود در سراسر کشور برسد.
        </p>
        <p>
          با توجه به این که نیکان‌بایک با شرکت معتبر پست قرارداد رسمی دارد، لذا
          تمامی کالاهای ارسالی تحت پوشش بیمه می‌باشند،به این معنی است که بروز هر
          گونه حادثه در هنگام حمل و تحویل به عهده شرکت حمل و نقل است.
          <br />
          آسیب‏‌های ناشی از حمل و نقل باید در عرض 24 ساعت کاری پس از تحویل سفارش
          از طریق تماس تلفنی با شماره 4132817070 به نیکان‌بایک اطلاع داده شود و
          کالای آسیب دیده به همراه صورت جلسه رسمی شرکت حمل کننده و کلیه متعلقات
          و فاکتوربه آدرس پستی نیکان‌بایک ارسال شود.
        </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                <span >سیاست قیمت گذاری</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
          سیاست قیمت‌‏گذاری در وب سایت نیکان‌بایک مبتنی بر اصول مشتری مداری است.
          قیمت‏‌های ارائه شده برای کالاها درنیکان‌بایک قیمت‏‌هایی است که غالباً
          توسط تولید‏کننده و یا تامین‏‌کننده آن محصول به صورت مصوب تعیین شده
          است.
        </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                <span >
            ارتباطات الکترونیکی
          </span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
          هنگامی که شما از سرویس‌‏ها و خدمات نیکان‌بایک استفاده می‏‌کنید، سفارش
          اینترنتی خود را ثبت یا خرید می‏‌کنید و یا به نیکان‌بایک ایمیل
          می‏‌زنید، این ارتباطات به صورت الکترونیکی انجام می‏‌شود و در صورتی که
          درخواست شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که
          نیکان‌بایک به صورت الکترونیکی به درخواست شما پاسخ دهد.
        </p>
        <p>
          همچنین آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها
          آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات و
          پاسخ‌های شرکت از طریق آنها صورت می‌گیرد.
        </p>
        <p>
          - ارسال هرگونه پیامک تحت عنوان نیکان‌بایک، با هر شماره‌ای تخلف و سوء
          استفاده از نام نیکان‌بایک است و در صورت دریافت چنین پیامکی، لطفاً جهت
          پیگیری قانونی آن را به info@nikanbike.com اطلاع دهید.
        </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclure flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                <div className="flex justify-start">
                <span >
          سیاست های رعایت حریم شخصی
          </span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-rose-500`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
          نیکان‌بایک متعهد می‏‌شود در حد توان از حریم شخصی شما دفاع کند و در این
          راستا، تکنولوژی مورد نیاز برای هرچه مطمئن‏‌تر و امن‏‌تر شدن استفاده
          شما از سایت را، توسعه دهد. در واقع با استفاده از سایت نیکان‌بایک، شما
          رضایت خود را از این سیاست نشان می‏‌دهید.
        </p>
        <p>
          کاربران مجاز به بهره‌‏برداری و استفاده از لیست محصولات، مشخصات فنی،
          قیمت و هر گونه استفاده از مشتقات وب‏‌سایت نیکان‌بایک و یا هر یک از
          خدمات و یا مطالب، دانلود یا کپی کردن اطلاعات با مقاصد تجاری، هر گونه
          استفاده از داده کاوی، روبات، یا روش‌‏های مشابه مانند جمع آوری داده‌‏ها
          و ابزارهای استخراج نیستند و کلیه این حقوق به صراحت برای نیکان‌بایک
          محفوظ است.
        </p>
        <p>
          - در صورت استفاده از هر یک از خدمات نیکان‌بایک، کاربران مسئول حفظ
          محرمانه بودن حساب و رمز عبور خود هستند و تمامی مسئولیت فعالیت‌‏هایی که
          تحت حساب کاربری و یا رمز ورود انجام می‏‌پذیرد به عهده کاربران است.
        </p>
        <p>
          - تنها مرجع رسمی مورد تایید ما برای ارتباط با شما، پایگاه رسمی این
          سایت یعنی www.nikanbike.com است. ما با هیچ روش دیگری جز ارسال نامه از
          طرف آدرس‏‌رسمی و تایید شده در سایت، با شما تماس نمی‌‏گیریم.
        </p>
        <p>
          - وب سایت نیکان‌بایک هیچگونه سایت اینترنتی با آدرسی غیر از
          www.nikanbike.com و همچنین، هیچ گونه وبلاگ و شناسه در برنامه‏‌های
          پیام‌رسان و غیره ندارد و هیچ ‏گاه با این روش‏‌ها با شما تماس
          نمی‏‌گیرد.
        </p>
        <p>
          - کاربران جهت برقراری ارتباط، تنها می‏‌توانند از آدرس‌‏های ذکر شده در
          بخش ارتباط با ما استفاده کنند.
        </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    
      </div>
    </Layout>
  );
}
