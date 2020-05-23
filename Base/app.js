const person = {
    name: 'Filipp',
    age: undefined,
    isProgrammer: true,
    language: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Key',
    greet() {
    console.log('greet fo person')},
    info() {

        console.log('this:', this)
        console.log('Информация про человека:', this.name)
    }
}
person.info()
// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log()
// })

//context
const logger = {
    keys() {
        console.log(Object.keys(this))
    }
}

logger.keys(person)
console.log()