// that is a wrapper for all pages
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from 'utils/Store';
import DropdownLink from 'components/DropdownLink';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import MainNav from './MainNav';
import Social from './Social';
import TabMenu from './TabMenu';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import TopHeaderBanner from './TopHeaderBanner';


export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  const [query, setQuery] = useState('');

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <>
      <Head>
        <title>{title ? title + '- نیکان بایک' : 'نیکان بایک'}</title>
        <meta name="description" content="فروش آنلاین دوچرخه و تردمیل" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        {/* this is a parent of all components */}
        <header className="container mb-16 md:mb-32 m-auto">
          <nav className="flex flex-col py-2  bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
          <TopHeaderBanner imageUrl="/img/banner/top.jpg" linkUrl="/shop" />
            <div className="hidden container md:flex  justify-around w-full mb-1">
              <Link href="/">
                <img className="" src="/img/logo/logo50.png" alt="نیکان بایک" />
              </Link>
              <div>
                <form
                  onSubmit={submitHandler}
                  className="mx-auto  hidden w-full justify-center md:flex"
                >
                  <input
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    className="rounded-tl-none rounded-bl-none py-2 px-12 focus:ring-0 "
                    placeholder="جستجو محصولات"
                  />
                  <button
                    className="rounded rounded-tr-none rounded-br-none bg-rose-600 py-2 px-4 dark:text-black"
                    type="submit"
                    id="button-addon2"
                  >
                    <SearchIcon className="h-5 w-5 text-white"></SearchIcon>
                  </button>
                </form>
              </div>
              <div className="flex  rounded-md border ">
                <div className="font-bold my-2 text-blue-600 mx-2">
                  ما را دنبال کنید
                </div>
                <div>
                  <Social />
                </div>
              </div>
            </div>

            <hr className=" md:block" />
             <div className='md:hidden'>
              <MobileMenu/>
             </div>
            <div className=" container hidden md:flex md:justify-around  md:w-full md:mt-1 md:items-center">
              <div className="container mx-auto px-4 flex  items-center justify-between">
                <nav>
                  <ul className="flex items-center justify-center font-semibold">
                    <li className=" text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600 relative group px-3 py-2">
                      <button
                        className="flex hover:opacity-80 cursor-default "
                        aria-haspopup="true"
                      >
                        <div className="flex justify-center">
                          <MenuIcon className=" w-4 h-4 mx-1 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-sm">دسته بندی ها </span>
                      </button>
                      <div className="absolute lg:right-10 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100  group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform">
                        <div className="relative top-6 p-6 bg-gray-200/95 backdrop-blur-md rounded-xl shadow-xl w-full">
                          <div className="w-10 h-10 bg-gray-200/95 backdrop-blur-md transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[1rem] duration-500 ease-in-out rounded-sm"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-center  py-2">
                              <TabMenu />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <MainNav />
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between px-2">
                  {status === 'loading' ? (
                    'در حال دریافت...'
                  ) : session?.user ? (
                    <Menu as="div" className="relative inline-block">
                      <Menu.Button className="mx-2 my-3">
                        {session.user.name}
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg rounded-md ">
                        <Menu.Item>
                          <DropdownLink
                            className="dropdown-link"
                            href="/profile"
                          >
                            پروفایل من
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item>
                          <DropdownLink
                            className="dropdown-link"
                            href="/order-history"
                          >
                            سفارشات من
                          </DropdownLink>
                        </Menu.Item>
                        {session.user.isAdmin && (
                          <Menu.Item>
                            <DropdownLink
                              className="dropdown-link"
                              href="/admin/dashboard"
                            >
                              داشبورد مدیریت
                            </DropdownLink>
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          <a
                            className="dropdown-link-exit"
                            href="#"
                            onClick={logoutClickHandler}
                          >
                            خروج
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <Link className="p-2" href="/login">
                      ورود
                    </Link>
                  )}
                </div>
                <span className="text-lg font-b py-2">|</span>
                <div className="flex justify-between p-2">
                  <div className="flex cursor-pointer  gap-x-1 rounded-md  px-4 hover:bg-gray-100">
                    <div className="relative">
                      <Link href="/cart">
                        {cartItemsCount > 0 && (
                          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                            {cartItemsCount}
                          </span>
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="flex flex-col py-2  bg-white/80 backdrop-blur-md shadow-inner w-full fixed bottom-0 left-0 right-0 z-10 md:hidden">
            <div className="flex justify-around items-center overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
             
              <Link
                className="px-2 py-2 text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
                href="/profile"
              >
                <div className="flex justify-center mx-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>

                <div className="mx-1 text-sm sm:text-base">
                  <span> پروفایل من</span>
                </div>
              </Link>
              <Link
                className=" px-2 py-2  text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
                href="/order-history"
              >
                <div className="flex justify-center mx-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="mx-1 text-sm sm:text-base">
                  <span> سفارشات من</span>
                </div>
              </Link>
              {/* -----item2----- */}
              <Link
                className=" px-2 py-2  text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
                href="/cart"
              >
                <div className="flex cursor-pointer   gap-x-1 rounded-md  px-4 ">
                  <div className=" relative ">
                  
                      <div className="flex justify-center">
                        {cartItemsCount > 0 && (
                          <span className="absolute -top-2 left-3 flex h-3 w-3  sm:h-5 sm:w-5  items-center  justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                            {cartItemsCount}
                          </span>
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mx-1 sm:w-6 sm:h-6 text-gray-500 "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </div>
                
                  </div>
                </div>
                <div className="mx-1 text-sm sm:text-base">
                  <span> سبد خرید</span>
                </div>
              </Link>
              {/* -----item3b----- */}
          
              {/* -----item4----- */}
              <div className=" px-2 py-2 text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600">
                {status === 'loading' ? (
                  'در حال دریافت...'
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block">
                    <Menu.Button className="mx-2 my-1 sm:my-3">
                <span className="ml-1">سلام </span>{session.user.name}
                    </Menu.Button>
                  </Menu>
                ) : (
                  <Link href="/login" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                    <span className="mx-1 text-sm sm:text-base">ورود</span>
                  </Link>
                )}
              </div>
              {/* ------------------end of footer buttons----------- */}
            </div>
          </nav>
        </header>
        <main className="container px-4 mt-8 m-auto">{children}</main>
       <Footer/>
      </div>
    </>
  );
}
