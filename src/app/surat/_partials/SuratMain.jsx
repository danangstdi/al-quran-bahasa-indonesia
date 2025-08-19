"use client";

import { useEffect, useRef, useState } from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

export default function SuratMain({ data }) {
  const [openSet, setOpenSet] = useState(() => new Set());
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    const onEnded = () => setPlayingId(null);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, []);

  const toggleShowDetail = (id) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const togglePlay = (id, url) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingId === id) {
      if (!audio.paused) {
        audio.pause();
        setPlayingId(null);
      } else {
        audio.play();
        setPlayingId(id);
      }
      return;
    }

    audio.pause();
    audio.src = url;
    audio.load();
    audio.play();
    setPlayingId(id);
  };

  return (
    <main>
      <article className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
        {data.ayat.map((ayat) => {
          const isOpen = openSet.has(ayat.nomorAyat);
          const isThisPlaying = playingId === ayat.nomorAyat;

          return (
            <div key={ayat.nomorAyat}>
              <button type="button" onClick={() => toggleShowDetail(ayat.nomorAyat)} aria-expanded={isOpen} className="cursor-pointer text-start hover:text-amber-600">
                <div className="flex items-start gap-2 mt-3">
                  <div className="flex items-center gap-1 text-amber-700">
                    ﴾<p className="text-xs">{ayat.nomorAyat}</p>﴿
                  </div>
                  <p>{ayat.teksIndonesia}</p>
                </div>
              </button>

              {isOpen && 
              <div className="bg-amber-50/20 p-4 mt-2 ml-7 border border-amber-300 rounded-2xl">
                <div className="w-full flex justify-end">
                  <button type="button" onClick={() => togglePlay(ayat.nomorAyat, ayat.audio["01"])} aria-label={isThisPlaying ? "Pause audio" : "Play audio"} className="cursor-pointer">
                    {isThisPlaying ? <PauseFill size={16} /> : <PlayFill size={16} />}
                  </button>
                </div>
                <p className="text-end text-lg mt-2">{ayat.teksArab}</p>
                <p className="text-xs mt-2">{ayat.teksLatin}</p>
              </div>}
            </div>
          )
        })}
      </article>
    </main>
  );
}
