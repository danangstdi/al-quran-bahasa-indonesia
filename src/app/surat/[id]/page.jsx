import { GetData } from "@/components/utils/GetData"
import SuratNavigation from "../_partials/SuratNavigation"
import SuratHero from "../_partials/SuratHero";
import SuratMain from "../_partials/SuratMain";
import SuratFooter from "../_partials/SuratFooter";

export default async function page({ params: {id} }) {
  const getSurah = await GetData(`https://equran.id/api/v2/surat/${id}`);
  const surah = getSurah.data;

  return (
    <>
      <SuratNavigation namaLatin={surah.namaLatin}/>
      <SuratHero arti={surah.arti} jumlahAyat={surah.jumlahAyat} nama={surah.nama} tempatTurun={surah.tempatTurun}/>
      <SuratMain data={surah}/>
      <SuratFooter suratSelanjutnya={surah.suratSelanjutnya} suratSebelumnya={surah.suratSebelumnya}/>
    </>
  )
}
