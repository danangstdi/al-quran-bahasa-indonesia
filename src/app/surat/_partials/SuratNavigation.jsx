import Link from 'next/link';
import React from 'react'
import { ChevronLeft, ThreeDots } from 'react-bootstrap-icons'

export default function SuratNavigation({ namaLatin }) {
  if (!namaLatin) {
    namaLatin = `Oops, Terjadi kesalahan`;
  }

  return (
    <header className='p-4 shadow'>
      <nav className='flex items-center justify-between'>
        <Link href="/">
          <ChevronLeft/>
        </Link>
        <h1 className='font-semibold'>{namaLatin}</h1>
        <button type="button">
          <ThreeDots/>
        </button>
      </nav>
    </header>
  )
}
