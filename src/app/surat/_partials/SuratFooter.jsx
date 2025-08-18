import Link from 'next/link'
import React from 'react'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'

export default function SuratFooter({ suratSelanjutnya, suratSebelumnya }) {
  return (
    <footer className='flex items-center justify-between gap-2 p-2'>
      {suratSebelumnya 
      && <Link href={`/surat/${suratSebelumnya.nomor}`} className='py-3 w-full text-xs text-center font-semibold border border-amber-600 text-amber-700 rounded-lg flex items-center justify-center gap-2'>
            <ArrowLeftCircleFill size={16}/> {suratSebelumnya.namaLatin}
         </Link> 
      }

      {suratSelanjutnya
      && <Link href={`/surat/${suratSelanjutnya.nomor}`} className='py-3 w-full text-xs text-center font-semibold bg-amber-600 border border-amber-600 text-white rounded-lg flex items-center justify-center gap-2'>
            {suratSelanjutnya.namaLatin} <ArrowRightCircleFill size={16}/>
         </Link>
      }
    </footer>
  )
}
