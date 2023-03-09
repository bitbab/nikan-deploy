import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from 'utils/error';
import axios from 'axios';
import Layout from 'components/Layout';

export default function ProfileScreen() {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('name', session.user.name);
    setValue('email', session.user.email);
  }, [session.user, setValue]);

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('پروفایل با موفقیت بروزرسانی شد');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Profile">
      <form
        className="mx-auto max-w-screen-md mt-12 md:mt-6 "
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">ویرایش پروفایل</h1>

        <div className="mb-4">
          <label htmlFor="name">نام</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register('name', {
              required: 'لطفا نام خود را وارد نمایید',
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
            className="w-full"
            id="email"
            {...register('email', {
              required: 'لطفا ایمیل خود را وارد نمایید',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'لطفا یک ایمیل معتبر وارد نمایید',
              },
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">کلمه عبور</label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register('password', {
              minLength: { value: 6, message: 'کلمه عبور باید بیش از 5 حرف باشد' },
            })}
          />
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">وارد کردن دوباره کلمه عبور</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'کلمه عبور باید بیش از 5 حرف باشد',
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
              <div className="text-red-500 ">کلمات عبور وارد شده یکسان نیستند</div>
            )}
        </div>
        <div className="mb-4">
          <button className="primary-button">بروزرسانی پروفایل</button>
        </div>
      </form>
    </Layout>
  );
}

ProfileScreen.auth = true;