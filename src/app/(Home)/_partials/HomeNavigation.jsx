"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react'
import { List, Search } from 'react-bootstrap-icons'

export default function HomeNavigation() {
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

  return (
    <header className={`${isScrolled ? 'p-2 bg-white/50 backdrop-blur-sm' : 'p-4 bg-white'} transition-all shadow fixed z-40 inset-x-0 top-0`}>
      <nav className='flex items-center justify-between'>
        <button type="button">
          <List/>
        </button>
        <h1 className='font-semibold'>QURAN</h1>
        <button type="button">
          <Search/>
        </button>
      </nav>
    </header>
  )
}
