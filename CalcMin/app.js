document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.querySelector('#num1')


    const num2 = document.querySelector('#num2')

    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const output = document.querySelector('#output')

    function getInputValue() {
        const value1 = num1.value
        const value2 = num2.value
        return [value1, value2]
    }


    function addHandler() {
        const values = getInputValue()
        const result = values[0] + values[1]

        output.closest('.card').style.display = 'block'
        output.innerHTML = `Результат = ${result}`
        console.log(values[0],values[1])
    }

    function subHandler() {

    }
    // console.log('test',addBtn)

    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)

})


