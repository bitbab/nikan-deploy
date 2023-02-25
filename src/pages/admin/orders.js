import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import DashbordLayout from 'components/admin/DashbordLayout';
import DashbordAside from 'components/admin/DashbordAside';
import { getError } from 'utils/error';
import moment from 'jalali-moment';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function AdminOrderScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/orders`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  return (
    <DashbordLayout title="داشبورد مدیریت">
      <div className="grid md:grid-cols-4 md:gap-5">
      <div>
          <DashbordAside/>
        </div>
        {/* <div className=' border rounded-md shadow-md p-3'>
          <ul >
            <li  className='p-2 hover:bg-slate-200 rounded-md'>
              <Link href="/admin/dashboard">داشبورد</Link>
            </li>
            <li className='bg-slate-200 rounded-md border p-2 '>
              <Link className="font-bold " href="/admin/orders">
                سفارشات
              </Link>
            </li>
            <li className='p-2 hover:bg-slate-200 rounded-md'>
              <Link href="/admin/products">محصولات</Link>
            </li>
            <li className='p-2 hover:bg-slate-200 rounded-md'>
              <Link href="/admin/users">کاربران</Link>
            </li>
          </ul>
        </div> */}
        <div className="overflow-x-auto md:col-span-3">
          
          <h1 className="m-4 text-xl bg-slate-100 rounded-md p-3 text-slate-800">لیست کلیه سفارشات</h1>

          {loading ? (
            <div>بارگذاری...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-center">کد سفارش</th>
                    <th className="p-5 text-center">کاربر</th>
                    <th className="p-5 text-center">تاریخ سفارش</th>
                    <th className="p-5 text-center">مجموع</th>
                    <th className="p-5 text-center">وضعیت پرداخت</th>
                    <th className="p-5 text-center">وضعیت تحویل</th>
                    <th className="p-5 text-center">جزئیات</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="border-b">
                      <td className="p-5 text-center">{order._id.substring(20, 24)}</td>
                      <td className="p-5 text-center">
                        {order.user ? order.user.name : 'کاربر حذف شده'}
                      </td>
                      <td className="p-5 text-center">
                      {moment(order.createdAt.substring(0, 10), 'YYYY-M-D')
                      .locale('fa')
                      .format('YYYY/M/D')}
                        
                      </td>
                      <td className="p-5 text-center">{order.totalPrice} تومان</td>
                      <td className="p-5 text-center">
                        {order.isPaid
                          ? `${order.paidAt.substring(0, 10)}`
                          : 'پرداخت نشده'}
                      </td>
                      <td className="p-5 text-center">
                        {order.isDelivered
                          ? `${moment(order.deliveredAt.substring(0, 10), 'YYYY-M-D').locale('fa').format('YYYY/M/D')}`
                          : 'تحویل نشده'}
                      </td>
                      <td className="p-5 text-center">
                        <Link href={`/admin/order/${order._id}`} passHref>
                        جزئیات سفارش
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashbordLayout>
  );
}

AdminOrderScreen.auth = { adminOnly: true };