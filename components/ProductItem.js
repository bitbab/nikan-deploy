import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white hover:shadow-xl rounded-lg max-w-sm flex sm:block dark:bg-gray-800 dark:border-gray-700 p-2">
          <Link href={`/product/${product.slug}`}>
            <img
              // className="rounded-t-lg p-8"
              src={product.image}
              alt={product.name}
              className="rounded shadow object-cover h-28 w-28 sm:h-64 sm:w-full"
            />
          </Link>

          <div className="px-5 pb-5">
            <Link href={`/product/${product.slug}`}>
              <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white mb-4">
                {product.name}
              </h3>
            </Link>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {product.price}تومان
              </span>
              <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
                خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
