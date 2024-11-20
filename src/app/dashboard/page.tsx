'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectToHome = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div>
      <h1>Redirigiendo...</h1>
      {}
    </div>
  );
};

export default RedirectToHome;