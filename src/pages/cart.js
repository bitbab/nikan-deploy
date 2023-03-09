import Image from 'next/image';
import Layout from 'components/Layout';
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import { Store } from 'utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error('موجودی کالای مورد نظر به اتمام رسیده');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('محصول در سبد خرید بروز شد');
  };
  return (
    <Layout title="سبد خرید">
      <h1 className="mb-4 text-xl mt-12 md:mt-6 lg:mt-0">سبد خرید</h1>
      {cartItems.length === 0 ? (
        <div>
          <div className="text-xl font-bold mb-5 text-rose-600">
            سبد خرید شما خالی است
          </div>

          <Link href="/">
            <div className="primary-button text-center ">برگشتن به فروشگاه</div>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-right">نام محصول</th>
                  <th className="p-5 text-right">تعداد</th>
                  <th className="p-5 text-right">قیمت</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link
                        className="flex items-center"
                        href={`/product/${item.slug}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </Link>
                    </td>

                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">{item.price} تومان</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  مجموع ({cartItems.reduce((a, c) => a + c.quantity, 0)}) قلم
                  کالا :{' '}
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
                  تومان
                </div>
              </li>
              <li>
                <button
                 onClick={() => router.push('login?redirect=/shipping')}
                  className="primary-button w-full"
                >
                  پرداخت
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
