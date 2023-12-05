import LoadMore from "../components/LoadMore";
import Link from "next/link";
import { fetchAnime } from "@/actions";
import AnimeCard, {AnimeProp} from "@/components/AnimeCard";

import Hero from "@/components/Hero";

async function Home() { 
 const data = await fetchAnime(1)

  return (
    <>
    <Hero />
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <Link href={`/animeDetail/${item.id}`} key={`home-${item.id}`}>
    <AnimeCard  anime={item} index={index} />
    </Link>
  ))}
      </section>
      <LoadMore />
    </main>
  </>
  );
}

export default Home; 
