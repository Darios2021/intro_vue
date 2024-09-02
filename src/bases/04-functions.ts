// function greetPerson(name: string){ 

//     return `SALUDO, ${name}`;

// }





export const greetPerson = (name: string ) =>`SALUDO, ${name}`;


export const getUser = (uid : string) => 
     ({
        uid: uid,
        username: 'Dario'
    });


const heroes = [
{
    id: 1,
    name: 'Batman',    
},
{
    id: 2,
    name: 'Superman',
    power: 'Super fuerza',   
}, 
{
    id: 3,
    name: 'Dario',
    power: 'Correr',   
},
];



const hero = heroes.find ((h) => h.id === 3 )

console.log(hero?.power?.toUpperCase());

