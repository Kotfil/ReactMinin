
//============
//LocalStorage

// const myNumber = 42
// localStorage.removeItem('nubmer')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number',myNumber.toString())
// console.log(localStorage.getItem('number'))

// const object = {
//     name: 'Max',
//     age: 20
// }
//
// localStorage.setItem('person', JSON.stringify(object))

// const vik = {
//     name: 'Viktoria',
//     age: 23,
// }
//
// localStorage.setItem('viktoria', JSON.stringify(vik))

// const fil = {
//     name: 'Filipp',
//     age: 27
// }
//
// const hig = localStorage.getItem('FilKey')
// const FilKey = JSON.parse(hig)
// hig.name = 'Max';
// console.log (hig)

window.addEventListener('storage', event => {
    console.log(event)
})

