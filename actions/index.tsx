"use server";

import AnimeCard, {AnimeProp} from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();

  return data
};

export const fetchAnimeById = async (id: string) => {
    const res = await fetch(`https://shikimori.one/api/animes/${id}`) 
    const data = await res.json()
    // console.log(data) 
    return data
}