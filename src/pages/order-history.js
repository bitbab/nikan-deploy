import axios from 'axios';
import moment from 'jalali-moment'
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import Layout from 'components/Layout';
import { getError } from 'utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
function OrderHistoryScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  function shamsi() {
    return;
  }

  return (
    <Layout title="Order History">
      <h1 className="mb-4 p-3 rounded-md text-xl bg-rose-700 text-white mt-14 md:mt-9">
        تاریخچه سفارشات
      </h1>
      {loading ? (
        <div>بارگذاری ...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-center">آیدی سفارش</th>
                <th className="p-5 text-center">تاریخ سفارش</th>
                <th className="p-5 text-center">مجموع سفارش</th>
                <th className="p-5 text-center">وضعیت پرداخت</th>
                <th className="p-5 text-center">وضعیت تحویل سفارش</th>
                <th className="p-5 text-center">شرح سفارش</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className=" p-5 text-center">
                    {order._id.substring(20, 24)}
                  </td>
                  <td className=" p-5 text-center">
                      {moment(order.createdAt.substring(0, 10), 'YYYY-M-D')
                      .locale('fa')
                      .format('YYYY/M/D')}
                  </td>
                {/* ---adding exact time to display--------- */}
                  {/* <td className=" p-5 text-center">
                      {moment(order.createdAt.substring(0, 19), 'YYYY-M-D HH:mm:ss')
                      .locale('fa')
                      .format('HH:mm:ss ساعت YYYY/M/D')}
                  </td> */}
                  <td className=" p-5 text-center">{order.totalPrice} تومان</td>
                  <td className=" p-5 text-center">
                    {order.isPaid
                      ? `${order.paidAt.substring(0, 10)}`
                      : 'پرداخت نشده'}
                  </td>
                  <td className=" p-5 text-center">
                    {order.isDelivered
                      ? `${order.deliveredAt.substring(0, 10)}`
                      : 'تحویل نشده'}
                  </td>
                  <td className=" p-5 text-center">
                    <Link href={`/order/${order._id}`} passHref>
                      جزئیات
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
