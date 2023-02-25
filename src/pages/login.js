import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import { getError } from 'utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="صفحه ورود">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">ورود</h1>
        <div className="mb-4">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            {...register('email', {
              required: 'لطفا ایمیل خود را وارد نمایید',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'لطفا ایمیل معتبری وارد نمایید',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500 mt-2">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">کلمه عبور</label>
          <input
            type="password"
            {...register('password', {
              required: 'لطفا کلمه عبور خود را وارد نمایید',
              minLength: {
                value: 6,
                message: 'کلمه عبور باید بیش از 5 حرف باشد',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 mt-2">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">ورود</button>
        </div>
        <div className="mb-4 ">
          هنوز ثبت نام نکرده اید؟
          <Link href={`/register?redirect=${redirect || '/'}`}>ثبت نام</Link>
        </div>
      </form>
    </Layout>
  );
}
