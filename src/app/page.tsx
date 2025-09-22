import Image from "next/image";

import { Hero } from "@/components/pages/home/hero";
import { Twitch } from "@/components/pages/home/twitch";
import { Trends } from "@/components/pages/home/trends";
import { Favorites } from "@/components/pages/home/favorites";
import { Explore } from "@/components/pages/home/explore";

export default function Home() {
  return (
    <section id="home" className="flex flex-col">
      <Hero />
      <Twitch />
      <Trends />
      <Favorites />
      <Explore />
    </section>
  );
}
