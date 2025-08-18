import Image from "next/image";
import HomeNavigation from "./_partials/HomeNavigation";
import HomeHero from "./_partials/HomeHero";
import HomeMain from "./_partials/HomeMain";

export default function Home() {
  return (
    <>
      <HomeNavigation/>
      <HomeHero/>
      <HomeMain/>
    </>
  );
}
