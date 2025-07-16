'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  console.log('Dashboard rendered');
  const router = useRouter();
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hoş geldiniz! Bu, kullanıcı panelinizdir.</p>
      <p>Burada kullanıcı bilgilerinizi ve diğer detayları görebilirsiniz.</p>
    </div>
  );
}