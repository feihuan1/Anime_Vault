# live Demo 
https://anime-vault-theta.vercel.app/

# intro 
Anime site with infinite scroll list of most popular anime, each anime has it's own page where prvode Detail info

## note
1 . next js dont work well with favicon, need rename icon.ico in app folder

## re-useable assets
1. spinner.svg , animated spinner

## lib
1. use react intersection observer detect where user scoll.approach in LoadMore.tsx doc: https://www.npmjs.com/package/react-intersection-observer
2. use framer motion to animate loadmore delay, different approach with React, in AnimeCard.tsx doc: https://www.framer.com/motion/