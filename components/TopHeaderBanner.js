import Link from 'next/link';
import React from 'react';

const TopHeaderBanner = ({ imageUrl, linkUrl }) => {

  return (
    <div className="bg-yellow-400 mb-1 ">
      <Link href={linkUrl}>
        <img src={imageUrl} className="mx-auto " />
      </Link>
    </div>
  );
};

export default TopHeaderBanner;
