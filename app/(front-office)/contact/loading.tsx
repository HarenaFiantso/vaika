'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) {
    return null;
  }

  return <h1 className='text-center'>Loading...</h1>;
}
