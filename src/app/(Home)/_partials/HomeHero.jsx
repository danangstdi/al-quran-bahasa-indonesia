import React from 'react'
import MasjidVector from '@/../public/images/R.png'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section id='home-hero' className='pt-14'>
      <figure className='relative m-4 bg-amber-100 aspect-[6/2.2] rounded-2xl overflow-hidden'>
        <Image src={MasjidVector} alt='masjid-vector' className='absolute -mt-10 opacity-40'/>
        <figcaption className='p-6'>
          <p className='text-sm font-semibold mb-2'>Terakhir dibaca</p>
          <p className='text-2xl font-bold text-amber-700'>Al-Fatihah</p>
          <p className='text-xs font-semibold text-gray-700'>Ayat 7</p>
        </figcaption>
      </figure>
    </section>
  )
}
