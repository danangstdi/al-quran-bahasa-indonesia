import React from 'react'

export default function SuratMain({ data }) {
  return (
    <main>
      <article className="px-5 pb-5">
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          {data.ayat.map((ayat, i) => (
            <React.Fragment key={ayat.nomorAyat}>
              <span>{ayat.teksIndonesia}</span>

              <span className="whitespace-nowrap align-middle">
                {"\u00A0"}
                <span className="relative -top-0.5 inline-flex items-center justify-center bg-gray-300 rounded-full w-5 h-5 text-[10px] font-medium">
                  {ayat.nomorAyat}
                </span>
                {"\u00A0"}
              </span>

              {i < data.ayat.length - 1 && " "}
            </React.Fragment>
          ))}
        </p>
      </article>
    </main>
  )
}
