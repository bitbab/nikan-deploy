import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import DashbordLayout from 'components/admin/DashbordLayout';
import DashbordAside from 'components/admin/DashbordAside';
import { getError } from 'utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
      case 'CREATE_REQUEST':
        return { ...state, loadingCreate: true };
      case 'CREATE_SUCCESS':
        return { ...state, loadingCreate: false };
      case 'CREATE_FAIL':
        return { ...state, loadingCreate: false };
      case 'DELETE_REQUEST':
        return { ...state, loadingDelete: true };
      case 'DELETE_SUCCESS':
        return { ...state, loadingDelete: false, successDelete: true };
      case 'DELETE_FAIL':
        return { ...state, loadingDelete: false };
      case 'DELETE_RESET':
        return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}
export default function AdminProdcutsScreen() {
  const router = useRouter();

  const [
    { loading, error, products, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });

  const createHandler = async () => {
    if (!window.confirm('آیا مطمئن هستید؟')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(`/api/admin/products`);
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('محصول با موفقیت ایجاد گردید');
      router.push(`/admin/product/${data.product._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/products`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (productId) => {
    if (!window.confirm('آیا مطمئن هستید؟')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/products/${productId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('محصول با موفقیت حذف گردید');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <DashbordLayout title="لیست محصولات">
      <div className="grid md:grid-cols-4 md:gap-5">
      <div>
          <DashbordAside/>
        </div>
        {/* <div>
          <ul>
            <li>
              <Link href="/admin/dashboard">داشبورد</Link>
            </li>
            <li>
              <Link href="/admin/orders">سفارشات</Link>
            </li>
            <li>
              <Link className="font-bold" href="/admin/products">
                محصولات
              </Link>
            </li>
            <li>
              <Link href="/admin/users">کاربران</Link>
            </li>
          </ul>
        </div> */}
        <div className="overflow-x-auto md:col-span-3">
   
          <div className="flex justify-between mt-3">
          <h1 className="m-4 text-xl bg-slate-100 rounded-md p-3 text-slate-800">لیست کلیه محصولات</h1>
            {loadingDelete && <div>حذف محصول ...</div>}
            <button
              disabled={loadingCreate}
              onClick={createHandler}
              className="primary-button"
            >
              {loadingCreate ? 'بارگذاری' : 'ایجاد محصول جدید'}
            </button>
          </div>
          {loading ? (
            <div>بارگذاری...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-center">کد محصول</th>
                    <th className="p-5 text-center">نام</th>
                    <th className="p-5 text-center">قیمت</th>
                    <th className="p-5 text-center">دسته بندی</th>
                    <th className="p-5 text-center">تعداد</th>
                    <th className="p-5 text-center">میزان محبوبیت</th>
                    <th className="p-5 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b">
                      <td className=" p-5 text-center">{product._id.substring(20, 24)}</td>
                      <td className=" p-5 text-center">{product.name}</td>
                      <td className=" p-5 text-center">{product.price} تومان</td>
                      <td className=" p-5 text-center">{product.category}</td>
                      <td className=" p-5 text-center">{product.countInStock}</td>
                      <td className=" p-5 text-center">{product.rating}</td>
                      <td className=" p-5 text-center">
                        <Link type='button' className='default-button' href={`/admin/product/${product._id}`}>ویرایش</Link>
                        &nbsp;
                        <button
                          onClick={() => deleteHandler(product._id)}
                          className="default-buttons"
                          type="button"
                        >حذف</button>
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

AdminProdcutsScreen.auth = { adminOnly: true };