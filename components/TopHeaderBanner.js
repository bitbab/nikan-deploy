import Link from 'next/link';
import React from 'react';

const TopHeaderBanner = ({ imageUrl, linkUrl }) => {

  return (
    <div className="bg-rose-600 ">
      <Link href={linkUrl}>
        <img src={imageUrl} className="mx-auto " />
      </Link>
    </div>
  );
};

export default TopHeaderBanner;
