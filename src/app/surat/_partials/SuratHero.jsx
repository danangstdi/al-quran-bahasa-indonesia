import React from 'react'
import MasjidVector from '@/../public/images/R.png'
import Image from 'next/image'
import { Dot } from 'react-bootstrap-icons'

export default function SuratHero({ arti, jumlahAyat, nama, tempatTurun }) {
  return (
    <section id='surat-hero' className='pt-14'>
      <figure className='relative m-4 bg-amber-100 aspect-[6/3] rounded-2xl overflow-hidden'>
        <Image src={MasjidVector} alt='masjid-vector' className='absolute -mt-10 opacity-40'/>
        <figcaption className='p-4 text-center'>
          <p className='text-2xl font-bold text-amber-700 mt-2'>
            {arti}
          </p>
          <p className='text-xl font-semibold text-gray-900'>
            {nama}
          </p>
          <p className='text-xs font-semibold text-gray-700 flex items-center justify-center mt-4'>
            {tempatTurun} <Dot/> {jumlahAyat} Ayat
          </p>
        </figcaption>
      </figure>
    </section>
  )
}
