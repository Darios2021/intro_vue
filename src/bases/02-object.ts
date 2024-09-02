export const person = {
    lastName: 'Start',
    age: 45,
    address: {
        city: 'New York',
        zip: 511,
        lat: 14.332323,
        lng: 32.192391,
    }
}//as const;

// const person2 = {...person};

const person2 = structuredClone (person);

person2.lastName = 'Parker';
person2.address.city = 'San Juan';
person2.age = 33;





console.log({person});
console.log({person2});



