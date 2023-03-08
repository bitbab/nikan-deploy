import axios from 'axios';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import Product from 'models/Product';
import db from 'utils/db';
import { Store } from '/utils/Store';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  if (!product) {
    return (
      <Layout title="محصول مورد نظر پیدا نشد">
        مشخصات محصول مورد نظر در دسترس نیست
      </Layout>
    );
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('متاسفانه موجودی محصول پایان یافت');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout title={product.name}>
      <div className="py-2 mb-4 mt-10">
        <Link className="bg-rose-600 rounded-md text-slate-50 p-2 hover:bg-rose-500" href="/">
          برگشت به صفحه اصلی
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut }) => (
              <div >
             
                <TransformComponent>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={520}
                    height={520}
                  ></Image>
                </TransformComponent>
                   <div className="flex relative mb-8">
                  <button
                    className="absolute top-1/2 -mt-4 right-0 w-8 h-8 bg-rose-600 hover:bg-rose-500 rounded-full flex justify-center items-center focus:outline-none "
                    onClick={() => zoomIn()}
                  >
                    <span className="w-5 h-5 text-slate-50 ">+</span>
                  </button>
                  <button
                    className="absolute top-1/2 -mt-4 right-10 w-8 h-8 bg-rose-600 hover:bg-rose-500 rounded-full flex justify-center items-center focus:outline-none"
                    onClick={() => zoomOut()}
                  >
                    <span className="w-5 h-5 text-slate-50">-</span>
                  </button>
             
                </div>
              </div>
            )}
          </TransformWrapper>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li className="mb-2">دسته محصول: {product.category}</li>
            <li className="mb-2">برند محصول: {product.brand}</li>
            <li className="mb-2">
              <span>توضیحات کوتاه: </span>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>قیمت:</div>
              <div> {product.price} تومان</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>موجودی محصول</div>
              <div>{product.countInStock > 0 ? 'موجود' : 'ناموجود'}</div>
            </div>
            <button
              onClick={addToCartHandler}
              className="w-1/2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80"
            >
              خرید
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
