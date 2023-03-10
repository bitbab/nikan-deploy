import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DashbordLayout from 'components/admin/DashbordLayout';
import DashbordAside from 'components/admin/DashbordAside';
import { getError } from 'utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default function AdminProductEditScreen() {
  const { query } = useRouter();
  const productId = query.id;
  const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/products/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('name', data.name);
        setValue('slug', data.slug);
        setValue('price', data.price);
        setValue('image', data.image);
        setValue('category', data.category);
        setValue('brand', data.brand);
        setValue('countInStock', data.countInStock);
        setValue('description', data.description);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [productId, setValue]);

  const router = useRouter();

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    image,
    brand,
    countInStock,
    description,
  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/products/${productId}`, {
        name,
        slug,
        price,
        category,
        image,
        brand,
        countInStock,
        description,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('?????????? ???? ???????????? ?????????????????? ??????????');
      router.push('/admin/products');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <DashbordLayout title={`Edit Product ${productId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
      <div>
          <DashbordAside />
        </div>
        <div className="md:col-span-3">
          {loading ? (
            <div>????????????????...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`?????????? ???? ???? : ${productId}`}</h1>
              <div className="mb-4">
                <label htmlFor="name">?????? ??????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: '???????? ?????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="slug">????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="slug"
                  {...register('slug', {
                    required: '???????? ???????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.slug && (
                  <div className="text-red-500">{errors.slug.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="price"
                  {...register('price', {
                    required: '???????? ???????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">{errors.price.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="image">??????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="image"
                  {...register('image', {
                    required: '???????? ?????????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="category">???????? ????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="category"
                  {...register('category', {
                    required: '???????? ???????? ???????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.category && (
                  <div className="text-red-500">{errors.category.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="brand">????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="brand"
                  {...register('brand', {
                    required: '???????? ???????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.brand && (
                  <div className="text-red-500">{errors.brand.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">?????????? ???? ??????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="countInStock"
                  {...register('countInStock', {
                    required: '???????? ???????????? ?????????? ???? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.countInStock && (
                  <div className="text-red-500">
                    {errors.countInStock.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="description">??????????????</label>
                <input
                  type="text"
                  className="w-full text-slate-300"
                  id="description"
                  {...register('description', {
                    required: '???????? ?????????????? ?????????? ???? ???????? ????????????',
                  })}
                />
                {errors.description && (
                  <div className="text-red-500">
                    {errors.description.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button disabled={loadingUpdate} className="primary-button">
                  {loadingUpdate ? '????????????????' : '??????????????????'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/products`}> ?????????? ???? ???????? ??????????????</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </DashbordLayout>
  );
}

AdminProductEditScreen.auth = { adminOnly: true };
