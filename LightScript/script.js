// Prototype
// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('greet')
//     }
// })
//
// Object.prototype.sayHello = function () {
//     console.log('Hello!')
// }
//
// const fil = Object.create(person)
// fil.name = 'Filipp'
//
// const str = new String('I am string')
//Context

// function hello() {
//     console.log('Hello',this)
// }
// const person = {
//     name: 'Filipp',
//     age: 27,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job,phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
//
// const fil = {
//     name: 'FILIPP',
//     age: 24
// }

 // person.logInfo.bind(fil,'Frontend','8-999-323-22')
//person.logInfo.call(fil,'Frontend','8-999-323')
//person.logInfo.apply(fil,['Frontend','8-999-323'])

//===============



// function multBy(arr,n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
// const array = [1,2,3,4,5,6,7]
// Array.prototype.multBy = function(n) {
//     return this.map(function (i) {
//            return i * n
// })
//     }
//
// console.log(array.multBy(20))
//Замыкание
// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(3)
// const addTen =
// console.log(addOne(1))

// console.log('Start')
//
// console.log('Start2')
//
// window.setTimeout(function () {
//     console.log('Inside timeout ,after 2 seconds')
// },2000)
// function timeout2sec () {
//     console.log('timeout2sec')
// }
// console.log('End')
//
// window.setTimeout(timeout2sec,2000)
//Promise

// console.log('Request data...')
//
// setTimeout(() => {
//     console.log('Prepering data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// },2000)

const p = new Promise(function (resolve, reject) {
     setTimeout(() => {
         console.log('Request data...')
         const backendData = {
             server: 'aws',
             port: 2000,
             status: 'working'
         }
         resolve(backendData)
     },2000)
})

p.then(data => {
    const p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)

        }, 2000)
    })
    p2.then(clientData => {
        console.log('Data received' ,clientData)
    })

    })
