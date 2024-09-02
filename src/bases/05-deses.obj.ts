interface hero {
    name: string;
    age: number;
    codeName: string;
}




export const person: hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}




// const{ age ,name, power ='No tiene'} = person

// console.log({
//     age, name, power 
// });


interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}









const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene'

})


console.log(createHero(person));

export{};
