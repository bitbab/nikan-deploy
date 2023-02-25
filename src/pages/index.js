import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import LayoutIndex from 'components/LayoutIndex';
import ProductItem from 'components/ProductItem';
import Product from 'models/Product';
import db from 'utils/db';
import { Store } from 'utils/Store';


export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('متاسفانه موجوی محصول به اتمام رسیده');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('محصول به سبد خرید شما اضافه شد');
  };


  return (
    <LayoutIndex title="صفحه نخست">
     
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </LayoutIndex>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}