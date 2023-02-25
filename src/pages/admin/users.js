import axios from 'axios';
import Link from 'next/link';
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
      return { ...state, loading: false, users: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
}

function AdminUsersScreen() {
  const [{ loading, error, users, successDelete, loadingDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      users: [],
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/users`);
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

  const deleteHandler = async (userId) => {
    if (!window.confirm('آیا مطمئن هستید؟')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/users/${userId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('کاربر با موفقیت حذف گردید');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <DashbordLayout title="Users">
      <div className="grid md:grid-cols-4 md:gap-5">
      <div>
          <DashbordAside/>
        </div>
        {/* <div>
          <ul>
            <li>
              <Link href="/admin/dashboard">داشبور</Link>
            </li>
            <li>
              <Link href="/admin/orders">سفارشات</Link>
            </li>
            <li>
              <Link href="/admin/products">محصولات</Link>
            </li>
            <li>
              <Link className="font-bold" href="/admin/users">
               کاربران
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="overflow-x-auto md:col-span-3">
          <h1 className="m-4 text-xl bg-slate-100 rounded-md p-3 text-slate-800">لیست کلیه کاربران</h1>
          {loadingDelete && <div>در حال حذف ...</div>}
          {loading ? (
            <div>بارگذاری</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-center">آیدی</th>
                    <th className="p-5 text-center">نام</th>
                    <th className="p-5 text-center">ایمیل</th>
                    <th className="p-5 text-center">ادمین</th>
                    <th className="p-5 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-b">
                      <td className=" p-5 text-center">{user._id.substring(20, 24)}</td>
                      <td className=" p-5 text-center">{user.name}</td>
                      <td className=" p-5 text-center">{user.email}</td>
                      <td className=" p-5 text-center font-bold">{user.isAdmin ? 'بله' : 'خیر'}</td>
                      <td className=" p-5 text-center">
                        <Link type="button" className="default-button" href={`/admin/user/${user._id}`} passHref>
                         ویرایش
                        </Link>
                        &nbsp;
                        <button
                          type="button"
                          className="default-buttons"
                          onClick={() => deleteHandler(user._id)}
                        >
                          حذف
                        </button>
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

AdminUsersScreen.auth = { adminOnly: true };
export default AdminUsersScreen;