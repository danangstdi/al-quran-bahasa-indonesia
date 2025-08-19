"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeftCircleFill, ArrowRightCircleFill } from "react-bootstrap-icons";

export default function SuratFooter({ suratSelanjutnya, suratSebelumnya }) {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < last) setShowFloating(true);
      else setShowFloating(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Buttons = () => (
    <>
      {suratSebelumnya && (
        <Link href={`/surat/${suratSebelumnya.nomor}`} className="py-2 w-full text-xs text-center font-semibold border border-amber-600 text-amber-700 rounded-lg flex items-center justify-center gap-2 hover:text-amber-500 hover:border-amber-500">
          <ArrowLeftCircleFill size={16} /> {suratSebelumnya.namaLatin}
        </Link>
      )}
      {suratSelanjutnya && (
        <Link href={`/surat/${suratSelanjutnya.nomor}`} className="py-2 w-full text-xs text-center font-semibold bg-amber-600 border border-amber-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-amber-500">
          {suratSelanjutnya.namaLatin} <ArrowRightCircleFill size={16} />
        </Link>
      )}
    </>
  );

  return (
    <>
      <footer className="flex items-center justify-between gap-2 p-2">
        <Buttons />
      </footer>

      <footer
        aria-hidden={!showFloating}
        className={[
          "fixed left-0 right-0 bottom-0 z-50",
          "bg-white/90 backdrop-blur shadow-[0_-6px_20px_rgba(0,0,0,0.08)]",
          "flex items-center justify-between gap-2 p-1",
          "transition-transform duration-300 ease-out",
          showFloating ? "translate-y-0" : "translate-y-full",
          // "pb-[env(safe-area-inset-bottom)]"
        ].join(" ")}
      >
        <Buttons />
      </footer>
    </>
  );
}
