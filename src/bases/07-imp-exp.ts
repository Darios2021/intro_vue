import heroes, { owners } from './data/heroes';




// const getHeroById = (id: number) => {
//     return heroes.find (hero=> hero.id === id ) ;
// }



export const getHeroesByOwner = (owner: string) => {
    return heroes.filter (hero => hero.owner === owner) ;
}

console.log(getHeroesByOwner('Marvel'));
