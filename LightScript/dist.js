function calcVal(a,b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

const [sum,sub = 'Вычитания нет',mult,...other] = calcVal(42,10)

// const sum = result[0]
// const sub = result[1]

// const [sum,sub] = result


//console.log(sum,mult,other,sub)

const person = {
    //name: 'Max',
    age: 20,
    adress: {
        country: 'UK',
        city: 'Kiev'
    }
}

const {name: firstName='Noname',age,car = 'Машины нет '} = person

console.log(firstName,age,car)
