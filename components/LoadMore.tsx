"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2

function LoadMore() {
  // cant use hook in server component
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  // triggers when loader component is inview: boolean
  useEffect(() => {
    if (inView) {
      //fetch new page
      fetchAnime(page).then((res) => {
        //add new data to existing data
        setData([...data, ...res]); 
        page++
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        {/* once ref reached, we load more */}
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;