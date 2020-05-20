// Функции
// function declaration
// function greet(name) {
//     console.log('Привет -', name)
// }

// function expression
// const greet2 = function greet2(name) {
//     console.log('Привет -', name)
// }
// greet('Киркоров')
// greet2('Киркоров 2')
//
// console.log(typeof greet2)
// console.dir(greet)

// Анонимныце функции
// let counter = 0
// const interval = setInterval(function ()  {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// const arrow = (filippe) => console.log('Привет',filippe)
// arrow('Filipp')
//
// const pow2 = num => {
//     return num * 2
// }
// console.log(pow2(32))

//4 Параметры по умолчанию

// const sum = (a = 40,b = a *2) => a + b
//
// console.log(sum())
//
// function sumAll(...all) {
//     const result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
//
// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)

//5 Замыкания
// function  createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
// const logWidthLastName = createMember('Filipp')
// console.log(logWidthLastName);
//
// const text = 'Привет мы скоро пойдем гулять'
// const reverseText = text.split('').reverse().join(';')
// console.log(reverseText)
//

const apple = [
    {name: 'Green', budget: 30},
    {name: 'Red', budget: 55},
    {name: 'White', budget: 15}
]
let findedPerson
for (const fruit of apple) {
    console.log(fruit)
if (apple.budget === 30) {
    findedPerson = fruit
}

}


// const index = apple.findIndex(function (fruit) {
//     return fruit.budget === 55
// });
// const fruit1 = apple.find(function (fruit) {
//     return fruit.budget === 55
// });
//console.log(fruit1)
