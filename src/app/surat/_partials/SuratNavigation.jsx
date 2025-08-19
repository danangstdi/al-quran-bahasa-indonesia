"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react'
import { ChevronLeft, ThreeDots } from 'react-bootstrap-icons'

export default function SuratNavigation({ namaLatin }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!namaLatin) {
    namaLatin = `Oops, Terjadi kesalahan`;
  }

  return (
    <header className={`${isScrolled ? 'p-2 bg-white/50 backdrop-blur-sm' : 'p-4 bg-white'} transition-all shadow fixed z-40 inset-x-0 top-0`}>
      <nav className='flex items-center justify-between'>
        <Link href="/">
          <ChevronLeft/>
        </Link>
        <h1 className={`${isScrolled && 'text-sm transition-all'} font-semibold`}>{namaLatin}</h1>
        <button type="button">
          <ThreeDots/>
        </button>
      </nav>
    </header>
  )
}
