import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="mx-auto w-full justify-center flex"
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="rounded-tl-none rounded-bl-none px-2 py-1 md:py-2 md:px-12 focus:ring-0 "
          placeholder="جستجو محصولات"
        />
        <button
          className="rounded rounded-tr-none rounded-br-none bg-rose-600 py-1 px-2 md:py-2 md:px-4  dark:text-black"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon className="h-5 w-5 text-white"></SearchIcon>
        </button>
      </form>
    </div>
  );
}
