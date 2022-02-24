// let fruits = ['Apple', 'Banana', 'apple', 'strawberry', 'mango'];

// console.log(fruits.length);

// fruits.push('Mango');


// let pos = fruits.indexOf('Banana');

// console.log(pos)

// let mixedDataTypes = ['cake', 'apple', 'table', 'chair', 'bike', 'makeup'];

// console.log(mixedDataTypes.length)


// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // console.log(itCompanies)
// console.log(itCompanies[0]); 
// console.log(itCompanies[4]); 
// console.log(itCompanies[itCompanies.length - 1]); 

// itCompanies.forEach(function(item, index, array) {
//     console.log(item, index);
//   });

// console.log(itCompanies)

// console.log('Facebook'.toUpperCase())
// console.log('Google'.toUpperCase())
// console.log('Microsoft'.toUpperCase())
// console.log('Apple'.toUpperCase())
// console.log(itCompanies.toString)
// itCompanies.sort
// console.log(itCompanies.sort)

// for (i=0;i<=6;i++);
// console.log(i)
// for (let number = 0; number < 5; number++) {
//     console.log(number);
//   }


// let i = 0
// while (i < 5) {
//     i++;
//     console.log(i)
//   }
// function table_multiplication(nombre)
// 		{
// 		var i;
// 		for (i=0; i<=10; i++) {
// 		    resultat=nombre*i;
// 			                  }
// 		}




//         console.log()
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// console.log(person)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   let chien = {name:'foxy', pattes: '4', color: 'white', age: '2', proprierty: 'little'};
//   console.log(chien)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


var longeur = -1;
var nom = ""



for(var key in users){ 
    if (users[key].skills.length > longeur){
        // console.log("plus long", key)
        longeur = users[key].skills.length;
        nom = key;
        console.log(nom); 
    }
}