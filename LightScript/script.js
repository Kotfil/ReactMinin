// // // Prototype
// // // const person = new Object({
// // //     name: 'Maxim',
// // //     age: 25,
// // //     greet: function () {
// // //         console.log('greet')
// // //     }
// // // })
// // //
// // // Object.prototype.sayHello = function () {
// // //     console.log('Hello!')
// // // }
// // //
// // // const fil = Object.create(person)
// // // fil.name = 'Filipp'
// // //
// // // const str = new String('I am string')
// // //Context
// //
// // // function hello() {
// // //     console.log('Hello',this)
// // // }
// // // const person = {
// // //     name: 'Filipp',
// // //     age: 27,
// // //     sayHello: hello,
// // //     sayHelloWindow: hello.bind(document),
// // //     logInfo: function (job,phone) {
// // //         console.group(`${this.name} info:`)
// // //         console.log(`Name is ${this.name}`)
// // //         console.log(`Age is ${this.age}`)
// // //         console.log(`Job is ${job}`)
// // //         console.log(`Phone is ${phone}`)
// // //         console.groupEnd()
// // //     }
// // // }
// // //
// // // const fil = {
// // //     name: 'FILIPP',
// // //     age: 24
// // // }
// //
// //  // person.logInfo.bind(fil,'Frontend','8-999-323-22')
// // //person.logInfo.call(fil,'Frontend','8-999-323')
// // //person.logInfo.apply(fil,['Frontend','8-999-323'])
// //
// // //===============
// //
// //
// //
// // // function multBy(arr,n) {
// // //     return arr.map(function (i) {
// // //         return i * n
// // //     })
// // // }
// // // const array = [1,2,3,4,5,6,7]
// // // Array.prototype.multBy = function(n) {
// // //     return this.map(function (i) {
// // //            return i * n
// // // })
// // //     }
// // //
// // // console.log(array.multBy(20))
// // //Замыкание
// // // function createCalcFunction(n) {
// // //     return function () {
// // //         console.log(1000 * n)
// // //     }
// // // }
// //
// // // const calc = createCalcFunction(42)
// // // calc()
// //
// // // function createIncrementor(n) {
// // //     return function (num) {
// // //         return n + num
// // //     }
// // // }
// // //
// // // const addOne = createIncrementor(3)
// // // const addTen =
// // // console.log(addOne(1))
// //
// // // console.log('Start')
// // //
// // // console.log('Start2')
// // //
// // // window.setTimeout(function () {
// // //     console.log('Inside timeout ,after 2 seconds')
// // // },2000)
// // // function timeout2sec () {
// // //     console.log('timeout2sec')
// // // }
// // // console.log('End')
// // //
// // // window.setTimeout(timeout2sec,2000)
// // //Promise
// //
// // // console.log('Request data...')
// // //
// // // setTimeout(() => {
// // //     console.log('Prepering data...')
// // //     const backendData = {
// // //         server: 'aws',
// // //         port: 2000,
// // //         status: 'working'
// // //     }
// // //     setTimeout(() => {
// // //         backendData.modified = true
// // //         console.log('Data received', backendData)
// // //     }, 2000)
// // // },2000)
// //
// // // const p = new Promise(function (resolve, reject) {
// // //      setTimeout(() => {
// // //          console.log('Request data...')
// // //          const backendData = {
// // //              server: 'aws',
// // //              port: 2000,
// // //              status: 'working'
// // //          }
// // //          resolve(backendData)
// // //      },2000)
// // // })
// // //
// // // p.then(data => {
// // //     const p2 = new Promise((resolve,reject) => {
// // //         setTimeout(() => {
// // //             data.modified = true
// // //             resolve(data)
// // //
// // //         }, 2000)
// // //     })
// // //     p2.then(clientData => {
// // //         console.log('Data received' ,clientData)
// // //     })
// // //
// // //     })
// // // Object
// //
// // // const person = Object.create(
// // //     {
// // //         calculateAge() {
// // //             console.log('Age', new Date().getFullYear() - this.birthYear)
// // //         }
// // //     },
// // //     {
// // //     name: {
// // //         value: 'Filipp',
// // //         enumerable: true,
// // //         writable: true,
// // //         configurable: true
// // //     },
// // //     birthYear: {
// // //         value: 1993,
// // //         enumerable: false,
// // //         writable: false,
// // //         configurable: false
// // //     },
// // //         age: {
// // //         get() {
// // //             return 'Hello'
// // //         },
// // //             set() {
// // //
// // //             }
// // //         }
// // // }
// // // )
// // // person.name = 'Max'
// // // const person = {
// // //     name: 'FIl',
// // //     birthYear: 1992
// // // }
// // //
// //
// // // for (let key in person) {
// // //     if (person.hasOwnProperty(key)) {
// // //         console.log('Key',key, person[key])
// // //     }
// // // }
// //
// // //Class
// //
// // // const animal = {
// // //     name: 'Animal',
// // //     age: 5,
// // //     hasTail: true
// // // }
// // //
// //
// // class Animal {
// //     static type = 'ANIMAL'
// //     constructor(options) {
// //         this.name = options.name
// //         this.age = options.age
// //         this.haTail = options.haTail
// //     }
// //     voice() {
// //         console.log('I am Animal')
// //     }
// // }
// //
// //
// // // const animal = new Animal ({
// // //     name: 'Animal',
// // //     age: 5,
// // //     haTail: true
// // // })
// //
// // class Cat extends  Animal {
// //     static type = 'CAT'
// //
// //     constructor(options) {
// //         super(options)
// //         this.color = options.color
// //     }
// //
// //     voice() {
// //         super.voice()
// //         console.log('I am cat')
// //     }
// //     get ageInfo() {
// //         return this.age * 7
// //     }
// //     set ageInfo(newAge) {
// //         this.age = newAge
// //     }
// // }
// //
// // const cat = new Cat ({
// //     name: 'Cat',
// //     age: 7,
// //     haTail: true,
// //     color: 'black'
// // })
//
// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
// }
//
// class Box extends Component {
//     constructor(options){
//         super(options.selector)
//
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }
//
// const box1 = new Box ({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })
// const box2 = new Box ({
//     selector: '#box2',
//     size: 100,
//     color: 'green'
// })
//
// class Circle extends Box {
//     constructor(options) {
//         super(options)
//
//         this.$el.style.borderRadius = '50%'
//     }
// }
//
// const c = new Circle({
//     selector: '#cicrle',
//     size: 90,
//     color: 'blue'
// })

//const delay = ms => {
//return new Promise(r => setTimeout(() => r(), ms))
//}
//const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started')
//     return delay(2000)
//         .then(() => {
//         return fetch(url)
//     }).then(response => response.json())
// }
//
// fetchTodos()
// .then(data => {
//     console.log('DAta', data)
// })
// .catch (e => console.error(e))

// async function fetchAsyncTodos() {
//     console.log('Fetch todo')
//     try {
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch (e) {
//         console.error(e)
//     } finally {
//
//     }
//
//
// }
//
// fetchAsyncTodos()

//Objects

// const person = {
//     name: 'FIl',
//     age: 25,
//     job: 'Front'
// }
//
// const op = new Proxy(person, {
//     get(target, prop) {
//         console.log(`Getting prop ${prop}`)
//         return target[prop]
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value
//         } else {
//             throw new Error(`No ${prop} field in target`)
//         }
//     },
//
//     has(target, prop) {
//         return ['age', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop) {
//     console.log('Del', prop)
//     delete target[prop]
//         return true
//     }
// })
//
// // Function
// const log = text => `Log: ${text}`
//
// const fp = new Proxy(log, {
//     apply(target, thisArg , argArray) {
//         console.log('Callign fn...')
//
//         return target.apply(thisArg, args)
//     }
// })
// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
//
// const str = strGenerator()

// function* numG(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }
// const num = numG(7)

// const people = [
//     {name: 'Max', age: 22, man: true},
//     {name: 'wwww', age: 22, man: true},
//     {name: 'ddddd', age: 22, man: true},
//     {name: 'wwddaw', age: 22, man: true},
//     {name: 'sddsds', age: 22, man: true},
//
//
// ]
// for(i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
//
// for (let person of people) {
//     console.log(person)
// }

// people.forEach(function (person,index,arrPeop) {
//     console.log(person)
//     console.log(index)
//     console.log(arrPeop)
// })

// const obj = {
//     name: 'Filipp',
//     age: 27,
//     job: 'Jun'
// }
//
// const arr = [
//     ['name', 'Filipp'],
//     ['age', 27],
//     ['job', 'Jun']
// ]
//
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(arr))
//
// const maping = new Map(arr)
//
//
// maping
//     .set('newWWW', 22)
//     .set(obj, 'Value of object')
//console.log(maping.get(obj))
// maping.delete('job')
// console.log(maping.has('job'))
// console.log(maping.size)
// maping.clear()
// console.log(maping.size)
// for (let [key, value] of maping.entries()) {
//     console.log(key, value)
// }
//
// for (let val of maping.values()) {
//     console.log(val)
// }

// const users = [
//     {name: 'FIl'},
//     {name: 'Alex'},
//     {name: 'Vano'}
// ]
// const visits = new Map()
//
// visits
// .set(users[0], new Date())
// .set(users[1], new Date(new Date().getTime() + 1000 * 60))
// .set(users[2], new Date(new Date().getTime() + 3000 * 60))
//
//
// function lastVisit(user) {
//     return visits.get(user)
// }
//
// console.log(lastVisit(users[0]))

//==================
//Set

// const set = new Set ([1,2,3,3,4,4,5,5])

// set.add(10).add(20).add(40)
// console.log(set)
// console.log(set.has(2))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.clear())
// console.log(set.size)
//
// console.log(set.entries())

// for (let key of set) {
//     console.log(key)
// }

//==========

// function uniq (array){
//     return [...new Set(array)]
// }
// console.log(uniq([1,1,2,2,3,3,4,4,5,5,6,6]))
/// ==============
// Weakmap


// let obj = {name: 'weakmap'}
// const arr = [obj]
// obj = null
//
// console.log(arr[0])

// const maper = new WeakMap([
//     [obj, 'obj data']
// ])
// obj = null

//get set delete has
// console.log(maper)
//==========
//const cache = new WeakMap()
//
// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }
//
// let fil = {name: 'Fil'}
// let vik = {name: 'Vik'}
//
// cacheUser(fil)
// cacheUser(vik)
//
// fil = null
// console.log(cache.has(fil))
// console.log(cache.has(vik))

// ===============

// const users = [
//     {name: 'Filipp'},
//     {name: 'Viktoria'},
//     {name: 'Sveta'}
// ]
//
// const visit = new WeakSet()
//
// visit.add(users[0]).add(users[1])
// users.splice(1,1)
// console.log(visit.has(users[0]))
// console.log(visit.has(users[1]))

// const we = setTimeout(() => {
//     console.log('Hello 2 sec')
// },2000)

// const person = [
//     {name: 'Fil', age: 27},
//     {name: 'Oks', age: 22},
//     {name: 'Vik', age: 24},
//     {name: 'Mar', age: 25}
// ]
//
// for (i = 0; i < person.length; i++) {
//     console.log(person[i])
// }

// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//
//         xhr.open(method, url)
//
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type','application/json')
//         xhr.open(method, url)
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//
//         }
//
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//
//         xhr.send(JSON.stringify(body))
//     })
//
// }
//
// // sendRequest('GET',requestURL)
// // .then(data => console.log(data))
// // .catch(err => console.log(err))
// const body = {
//     name: 'Alex',
//     age: 27
// }
//
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))