// forEach() execute la fonction callback une fois pour chaque element.
//  A la difference de map() ou de reduce() il renvoie toujours la valeur undefined et ne peut donc pas etre "enchaine"  . 
//  Generalement, l'effet voulu est de declencher des effets de bord en fin de chaine.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Max', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// countries.forEach(element => console.log(element));


// var uppers = countries.map(function(x) { return x.toUpperCase(); });
// console.log(uppers);



// console.log(countries.length)

// var uppers = names.map(function(x) { return x.toUpperCase(); });
// console.log(uppers)

// function filtretexte(arr, requete) {
//     return arr.filter(function (el) {
//         return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
//     })
// }
// console.log(filtretexte(countries, 'land'));

// const result = countries.filter(countries => countries.length > 6);

// function filtretexte(arr, requete) {
//     return arr.filter(function (el) {
//         return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
//     })
// }
// console.log(filtretexte(countries, 6));


// console.log(result);

// const initialValue = 0;
// const sumWithInitial = numbers.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// La methode Array.every() en JavaScript est utilisee pour verifier si tous les elements du tableau satisfont la condition donnee ou non.
// La methode Array.some() en JavaScript est utilisee pour verifier si au moins un des elements du tableau satisfait ou non la condition donnee.
// La seule difference est que la methode some() renverra true si un predicat est vrai tandis que la methode every() renverra true si tous les predicats sont vrais.

// const even = (element) => element % 2 === 7;
// console.log(countries.some(even));

// const isBelowThreshold = (currentValue) => currentValue < 40;

// La methode find()est utilisee pour renvoyer le premier element de tableau qui reussit une certaine fonction de test.
// La methode find prend une fonction comme parametre et la fonction elle-meme prend trois arguments : l'element, l'index et le tableau lui-meme.

// const found = countries.find(element => element > 1);
// console.log(found);

// function pays(premier) {
//     return premier.nom === 6;
//   }
//   console.log(countries.find(pays));

const a = {4, 5, 8, 9}
const b = {3, 4, 5, 7}
const countries = ['Finland', 'Sweden', 'Norway']
const numbers = new set();






