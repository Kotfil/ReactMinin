// const person = {
//     name: 'Filipp',
//     age: undefined,
//     isProgrammer: true,
//     language: ['ru', 'en', 'de'],
//     // 'complex key': 'Complex Key',
//     greet() {
//     console.log('greet fo person')},
//     info() {
//
//         console.log('this:', this)
//         console.log('Информация про человека:', this.name)
//     }
// }
//person.info()
// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log()
// })

//context
// const logger = {
//     keys() {
//         console.log(Object.keys(this))
//     }
// }

// logger.keys(person)
// console.log()


//context

// keysAndValues() {
//     Object.keys(this).forEach(key =>
//         console.log(${person}))
// }

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)


// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
// person.age++
// person.language.push('ivrit')
// console.log(person)
//
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const name = person.name
// const age = person.age
// const languaes = person.languages
// const {name,age,languaes} = person
//
// console.log(name,age,languaes)
//next Obj
// const person = {
//     name: 'Filipp',
//     age: 27,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     'complex key': 'Complex Value',
//     ['key_' + (1 + 3)]: 'Computed Key',
//     greet() {
//         console.log('greet fo person')
//     }
// }
// const logger = {
//     keys() {
//         console.log('Object Keys', Object.keys(this))
//     }
// }
// logger.keys.call(logger)
// const bound =logger.keys.bind(person)
// bound()
// keysAndValues() {
//     Object.keys(this).forEach(key => {
//         console.log(`"${key}": ${this[key]}`)
//     })
//     }
// }

// logger.keysAndValues.call(logger)

// logger.keys(person)