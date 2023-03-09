import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import { getError } from 'utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

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
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

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
    <Layout title="ایجاد حساب کاربری">
      <form
        className="mx-auto max-w-screen-md mt-14 md:mt-6 "
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">ایجاد حساب کاربری</h1>
        <div className="mb-4">
          <label htmlFor="name">نام</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register('name', {
              required: 'لطفا نام را وارد نمایید',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            {...register('email', {
              required: 'لطفا ایمیل را وارد نمایید',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">کلمه عبور</label>
          <input
            type="password"
            {...register('password', {
              required: 'لطفا کلمه عبور را وارد نمایید',
              minLength: { value: 6, message: 'کلمه عبور باید بیش از 5 کاراکتر باشد' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">تایید کلمه عبور</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'لطفا کلمه عبور را دوباره وارد نمایید',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'کلمه عبور باید بیش از 5 کاراکتر باشد',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">کلمه عبور یکسان نیست</div>
            )}
        </div>

        <div className="mb-4 ">
          <button className="primary-button">ثبت نام</button>
        </div>
        <div className="mb-4 ">
          هنوز ثبت نام نکرده اید؟ &nbsp;
          <Link href={`/register?redirect=${redirect || '/'}`}>ثبت نام</Link>
        </div>
      </form>
    </Layout>
  );
}