import React from 'react';

interface AnimeInfoProps {
  animeData: {
    name: string,
    score: string,
    episodes: number,
    released_on: string,
    duration: string,
    description: string,
  };
}
const AnimeInfo = ({ animeData }: AnimeInfoProps) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="mb-4">
        <h1 className="font-bold text-3xl">{animeData.name}</h1>
      </div>

      <div className="mb-4 flex flex-row w-full justify-start">
        <div className="flex-1">
          <h3 className="font-bold text-gray-500">Score:</h3>
          <p>{animeData.score}</p>
        </div>
        <div className='flex-1'>
          <h3 className="font-bold text-gray-500">Episodes:</h3>
          <p>{animeData.episodes}</p>
        </div>
      </div>

      <div className="mb-4 flex flex-row">
        <div className="flex-1">
          <h3 className="font-bold text-gray-500">Released On:</h3>
          <p>{animeData.released_on}</p>
        </div>
        <div className='flex-1'>
          <h3 className="font-bold text-gray-500">Duration:</h3>
          <p>{animeData.duration}</p>
        </div>

      </div>
      <div className="mb-12">
        <h3 className="font-bold text-gray-500 ">Description(Google Translate api chanrge a fee):</h3>
        <p className="text-md max-w-md overflow-y-auto h-[450px] max-lg:max-h-[200px] mt-2 leading-5">{animeData.description}</p>
      </div>
    </div>
  );
};

export default AnimeInfo;
