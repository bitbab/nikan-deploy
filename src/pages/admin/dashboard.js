import axios from 'axios';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

// import moment from 'jalali-moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useEffect, useReducer } from 'react';
import DashbordLayout from 'components/admin/DashbordLayout';
import DashbordAside from 'components/admin/DashbordAside';
import { getError } from 'utils/error';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}
function AdminDashboardScreen() {
  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/summary`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: summary.salesData.map((x) => x._id), // 2022/01 2022/03

    datasets: [
      {
        label: 'میزان فروش',
        backgroundColor: '#5e74ee',
        // backgroundColor: 'rgba(162, 222, 208, 1)',
        data: summary.salesData.map((x) => x.totalSales),
      },
    ],
  };
  return (
    <DashbordLayout title="Admin Dashboard">
      <div className="grid  md:grid-cols-4 md:gap-5">
        <div>
          <DashbordAside />
        </div>
       
        <div className="md:col-span-3">
          {loading ? (
            <div>بارگذاری</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="card m-5 p-5">
                  <p className='font-bold text-slate-700'>فروش</p>
                  <p className="text-xl text-left">{summary.ordersPrice} تومان</p>
                                    <Link href="/admin/orders" className='hover:bg-slate-200 rounded-md px-2 py-1'>مشاهده فروش</Link>
                </div>
                <div className="card m-5 p-5"><p className='font-bold text-slate-700'>سفارشات</p>
                  <p className="text-xl  text-left">{summary.ordersCount} عدد</p>
                  
                  <Link href="/admin/orders" className='hover:bg-slate-200 rounded-md px-2 py-1'>مشاهده سفارشات</Link>
                </div>
                <div className="card m-5 p-5"><p className='font-bold text-slate-700'>محصولات</p>
                  <p className="text-xl text-left">{summary.productsCount} عدد</p>
                  
                  <Link href="/admin/products" className='hover:bg-slate-200 rounded-md px-2 py-1'>مشاهده محصولات</Link>
                </div>
                <div className="card m-5 p-5"><p className='font-bold text-slate-700'>کاربران</p>
                  <p className="text-xl text-left">{summary.usersCount} نفر</p>
                  
                  <Link href="/admin/users" className='hover:bg-slate-200 rounded-md px-2 py-1'>مشاهده کاربران</Link>
                </div>
              </div>
              <h2 className="text-xl">گزارش فروش</h2>
              <Bar
                options={{
                  legend: { display: true, position: 'right' },
                }}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </DashbordLayout>
  );
}

AdminDashboardScreen.auth = { adminOnly: true };
export default AdminDashboardScreen;
