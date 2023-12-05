import { fetchAnimeById } from "@/actions";
import AnimeInfo from "@/components/AnimeInfo";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await fetchAnimeById(id);

  const selectedData = (({
    url,
    name,
    score,
    episodes,
    released_on,
    duration,
    description,
  }) => ({
    url,
    name,
    score,
    episodes,
    released_on,
    duration,
    description,
  }))(data);

  return (
    <section className="w-screen min-h-screen flex flex-col md:flex-row p-12 justify-start gap-12 mt-12 max-w-7xl">
      <div className="w-full md:w-1/2 flex items-start justify-center  ">
        <Image
          src={`https://shikimori.one${data.image.original}`}
          width={600}
          height={700}
          alt={data.name}
          className="object-contain rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3 ">
        <AnimeInfo animeData={selectedData} />
      </div>
    </section>
  );
};

export default page;

// const sample = {
//     id: 1535,
//     name: 'Death Note',
//     russian: 'Тетрадь смерти',
//     image: {
//       original: '/assets/globals/missing_original.jpg?1701405586',
//       preview: '/assets/globals/missing_preview.jpg?1701405586',
//       x96: '/assets/globals/missing_x96.jpg?1701405586',
//       x48: '/assets/globals/missing_x48.jpg?1701405586'
//     },
//     url: '/animes/1535-death-note',
//     kind: 'tv',
//     score: '8.62',
//     status: 'released',
//     episodes: 37,
//     episodes_aired: 0,
//     aired_on: '2006-10-04',
//     released_on: '2007-06-27',
//     rating: 'r',
//     english: [ 'Death Note' ],
//     japanese: [ 'デスノート' ],
//     synonyms: [ 'DN' ],
//     license_name_ru: 'Тетрадь смерти',
//     duration: 23,
//     description: 'Изнывающий от скуки [[Синигами]] Рюк [リューク] бросает одну из своих Тетрадей смерти в мир людей. Просто так, потехи ради, посмотреть, что из этого выйдет.\r\n' +
//       'Между тем, в Японии на школьной лужайке эту самую тетрадь находит Лайт Ягами [夜神月] — лучший ученик школы, сын полицейского. Заинтригованный инструкцией на обложке, он забирает тетрадь домой и пробует её в деле,
//   вписав туда имя преступника. А вдруг сработает?\r\n' +
//       'Вскоре весь мир замечает странные массовые смерти преступников, а в
//   сети загадочного убийцу окрещают [[Кирой]].\r\n' +
//       'Для поимки Киры [夜神月] Интерпол привлекает легендарного детектива
//   [character=71]L[/character], в одиночку раскрывавшего наиболее сложные и
//   запутанные преступления. Кто такой [character=71]L[/character] на самом деле — не знает никто.\r\n' +
//       'Отныне в противостоянии Киры и [character=71]L[/character] предстоит победить тому, кто первым раскроет истинную личность противника и раньше оппонента нанесёт удар.',
//     description_html: '<div class="b-text_with_paragraphs">Изнывающий от скуки Синигами <a href="https://shikimori.one/characters/75-ryuk" title="Ryuk" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/75-ryuk/tooltip" data-attrs="{&quot;id&quot;:75,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Ryuk&quot;,&quot;russian&quot;:&quot;Рюк&quot;}">Рюк</a> бросает одну из своих Тетрадей смерти в мир людей. Просто так, потехи ради, посмотреть, что из этого выйдет.<br>Между тем, в Японии на школьной лужайке эту самую тетрадь находит <a href="https://shikimori.one/characters/80-light-yagami" title="Light Yagami" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/80-light-yagami/tooltip" data-attrs="{&quot;id&quot;:80,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Light Yagami&quot;,&quot;russian&quot;:&quot;Лайт Ягами&quot;}">Лайт Ягами</a> — лучший ученик школы, сын полицейского. Заинтригованный инструкцией на обложке, он забирает тетрадь домой и пробует её в деле, вписав туда имя преступника. А вдруг сработает?<br>Вскоре весь мир замечает странные массовые смерти преступников, а в сети загадочного убийцу окрещают Кирой.<br>Для поимки <a href="https://shikimori.one/characters/80-light-yagami" title="Light Yagami" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/80-light-yagami/tooltip" data-attrs="{&quot;id&quot;:80,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Light Yagami&quot;,&quot;russian&quot;:&quot;Лайт Ягами&quot;}">Киры</a> Интерпол привлекает легендарного детектива <a href="https://shikimori.one/characters/71-l-lawliet" title="L Lawliet" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/71-l-lawliet/tooltip" data-attrs="{&quot;id&quot;:71,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;L Lawliet&quot;,&quot;russian&quot;:&quot;Л Лоулайт&quot;}">L</a>, в одиночку раскрывавшего наиболее сложные и запутанные преступления. Кто такой <a href="https://shikimori.one/characters/71-l-lawliet" title="L Lawliet" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/71-l-lawliet/tooltip" data-attrs="{&quot;id&quot;:71,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;L Lawliet&quot;,&quot;russian&quot;:&quot;Л Лоулайт&quot;}">L</a> на самом деле — не знает никто.<br>Отныне в противостоянии <a
//   href="https://shikimori.one/characters/80-light-yagami" title="Light Yagami" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/80-light-yagami/tooltip" data-attrs="{&quot;id&quot;:80,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Light Yagami&quot;,&quot;russian&quot;:&quot;Лайт Ягами&quot;}">Киры</a> и <a href="https://shikimori.one/characters/71-l-lawliet" title="L Lawliet" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/71-l-lawliet/tooltip" data-attrs="{&quot;id&quot;:71,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;L Lawliet&quot;,&quot;russian&quot;:&quot;Л Лоулайт&quot;}">L</a> предстоит победить тому, кто первым раскроет истинную личность противника и раньше оппонента нанесёт удар.</div>',
//     description_source: null,
//     franchise: 'death_note',
//     favoured: false,
//     anons: false,
//     ongoing: false,
//     thread_id: 3238,
//     topic_id: 3238,
//     myanimelist_id: 1535,
//     rates_scores_stats: [
//       { name: 10, value: 57855 },
//       { name: 9, value: 36415 },
//       { name: 8, value: 28136 },
//       { name: 7, value: 14186 },
//       { name: 6, value: 5253 },
//       { name: 5, value: 2323 },
//       { name: 4, value: 896 },
//       { name: 3, value: 370 },
//       { name: 2, value: 207 },
//       { name: 1, value: 491 }
//     ],
//     rates_statuses_stats: [
//       { name: 'Запланировано', value: 21647 },
//       { name: 'Просмотрено', value: 254224 },
//       { name: 'Смотрю', value: 10557 },
//       { name: 'Брошено', value: 8235 },
//       { name: 'Отложено', value: 3843 }
//     ],
//     updated_at: '2023-12-04T12:06:21.495+03:00',
//     next_episode_at: null,
//     fansubbers: [],
//     fandubbers: [],
//     licensors: [ 'Мега-Аниме', '2x2' ],
//     genres: [
//       {
//         id: 37,
//         name: 'Supernatural',
//         russian: 'Сверхъестественное',
//         kind: 'genre',
//         entry_type: 'Anime'
//       },
//       {
//         id: 41,
//         name: 'Thriller',
//         russian: 'Триллер',
//         kind: 'genre',
//         entry_type: 'Anime'
//       },
//       {
//         id: 40,
//         name: 'Psychological',
//         russian: 'Психологическое',
//         kind: 'genre',
//         entry_type: 'Anime'
//       },
//       {
//         id: 27,
//         name: 'Shounen',
//         russian: 'Сёнен',
//         kind: 'genre',
//         entry_type: 'Anime'
//       }
//     ],
//     studios: [
//       {
//         id: 11,
//         name: 'Madhouse',
//         filtered_name: 'Madhouse',
//         real: true,
//         image: '/system/studios/original/11.png?1457607773'
//       }
//     ],
//     videos: [],
//     screenshots: [],
//     user_rate: null
//   }
