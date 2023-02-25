import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import DashbordLayout from 'components/admin/DashbordLayout';
import DashbordAside from 'components/admin/DashbordAside';
import { getError } from 'utils/error';
import { toast } from 'react-toastify';
import moment from 'jalali-moment';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
      case 'DELIVER_REQUEST':
      return { ...state, loadingDeliver: true };
    case 'DELIVER_SUCCESS':
      return { ...state, loadingDeliver: false, successDeliver: true };
    case 'DELIVER_FAIL':
      return { ...state, loadingDeliver: false };
    case 'DELIVER_RESET':
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
      };
    default:
      state;
  }
}
function OrderScreen() {
  const { data: session } = useSession();
  // order/:id
  const { query } = useRouter();
  const orderId = query.id;

  const [
    {
      loading,
      error,
      order,
      // successPay,
      // loadingPay,
      loadingDeliver,
      successDeliver,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    // if (
    //   !order._id ||
    //   successPay ||
    //   successDeliver ||
    //   (order._id && order._id !== orderId)
    // ) {
    if (
      !order._id ||
      successDeliver ||
      (order._id && order._id !== orderId)
    ) {
      fetchOrder();
    }
    if (successDeliver) {
      dispatch({ type: 'DELIVER_RESET' });
    }
  }, [order, orderId, successDeliver]);
  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  async function deliverOrderHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await axios.put(
        `/api/admin/orders/${order._id}/deliver`,
        {}
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      toast.success('سفارش تحویل گردید');
    } catch (err) {
      dispatch({ type: 'DELIVER_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  }
  return (
    <DashbordLayout title={`Order ${orderId}`}>
   {/* <h1 className="mb-4  text-xl">{`کد سفارش :  ${orderId}`}</h1> */}
  
      {loading ? (
        <div>بارگذاری...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="grid md:grid-cols-5 md:gap-5">
          
           <div>
          <DashbordAside />
        </div>
          <div className="overflow-x-auto md:col-span-3">
       <div className="card  p-5 mt-4"> <h1 className="mb-4  text-xl">{`کد سفارش :  ${orderId}`}</h1></div>
            <div className="card  p-5">
        
              <h2 className="mb-2 text-lg">آدرس ارسال کالا</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              {isDelivered ? (
                <div className="alert-success">تحویل شده در {moment(deliveredAt.substring(0, 10), 'YYYY-M-D')
                      .locale('fa')
                      .format('YYYY/M/D')}
                </div>
              ) : (
                <div className="alert-error">دریافت نشده</div>
              )}
            </div>

            <div className="card p-5">
              <h2 className="mb-2 text-lg">روش پرداخت</h2>
              <div>{paymentMethod}</div>
              {isPaid ? (
                <div className="alert-success">پرداخت شده در {paidAt}</div>
              ) : (
                <div className="alert-error">پرداخت نشده</div>
              )}
            </div>

            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">اقلام سفارش</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">کالا</th>
                    <th className="    p-5 text-right">تعداد</th>
                    <th className="  p-5 text-right">قیمت</th>
                    <th className="p-5 text-right">مجموع</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item) => (
                    <tr key={item._id} className="border-b">
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
                      <td className=" p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">{item.price} تومان</td>
                      <td className="p-5 text-right">
                        {item.quantity * item.price} تومان 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">خلاصه سفارش</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>مجموع اقلام</div>
                    <div>{itemsPrice} تومان</div>
                  </div>
                </li>{' '}
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>مالیات</div>
                    <div>{taxPrice} تومان</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>هزینه ارسال</div>
                    <div>{shippingPrice} تومان</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>مبلغ قابل پرداخت</div>
                    <div>{totalPrice} تومان</div>
                  </div>
                </li>
                {/* {session.user.isAdmin && order.isPaid && !order.isDelivered && ( */}
                      {session.user.isAdmin && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <div>Loading...</div>}
                    <button
                      className="primary-button w-full"
                      onClick={deliverOrderHandler}
                    >
                      تایید تحویل سفارش
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </DashbordLayout>
  );
}

OrderScreen.auth = true;
export default OrderScreen;
