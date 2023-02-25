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

import Social from '../Social';

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
        {/* this is a parent of all dashboard components */}
        <header className="container  m-auto">
          <div className="mt-1 bg-rose-700 rounded flex p-2">
            <div className="flex items-center justify-between mt-1 w-1/4 ">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover rounded-full h-9 w-9 ring-4 ring-white"
                  src="/img/logo/contact-logo-2.png"
                  alt="avatar"
                />
                <span className="text-sm font-medium text-gray-100 dark:text-gray-200">
                  رضا نیکان پور
                </span>
                <span>
                  <button
                   
                    onClick={logoutClickHandler}
                    className="text-slate-100 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-300 dark:hover:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <h1 className=" text-slate-100 text-xl text-center  w-3/4 p-2">
              داشبورد مدیریت نیکان بایک
            </h1>
          </div>
        </header>
        <main className="container px-4  m-auto">{children}</main>
        <footer className="bg-white dark:bg-gray-900 shadow-inner">
          <div className="container p-6 mx-auto">
            {/* <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" /> */}

            <div>
              <p className="text-center text-gray-500 dark:text-gray-400">
                نیکان بایک 1402 © کلیه حقوق برای فروشگاه محفوظ می باشد .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
