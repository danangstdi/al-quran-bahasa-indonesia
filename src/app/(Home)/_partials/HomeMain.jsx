import { GetData } from '@/components/utils/GetData';
import Link from 'next/link'
import React from 'react'
import { Dot, Stack } from 'react-bootstrap-icons'

export default async function HomeMain() {
  const getAllSurah = await GetData('https://equran.id/api/v2/surat');
  const allSurah = getAllSurah.data;

  return (
    <main className='px-4'>
      { allSurah.map((surah) => (
        <Link href={`/surat/${surah.nomor}`} key={surah.nomor}>
          <div className='p-2 mb-3 flex items-center hover:bg-amber-100/40 hover:rounded-xl'>
            <div className='h-7 w-7 bg-gray-200/70 rounded-full flex items-center justify-center'>
              <p className='text-xs font-semibold text-gray-700'>
                { surah.nomor }
              </p>
            </div>
            <div className='ml-4'>
              <h2 className=' font-semibold'>
                {surah.namaLatin}
              </h2>
              <div className="flex items-center gap-1 text-[0.7rem] text-gray-500">
                <Stack size={11}/>
                <Dot size={14}/>  
                <p className='font-semibold'>{`${surah.arti} (${surah.jumlahAyat})`}</p>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-gray-600'>{surah.nama}</p>
            </div>
          </div>
        </Link> 
      )) }     
    </main>
  )
}
