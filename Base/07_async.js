// Event Loop

// const timeout = setTimeout( () => {
//     clearTimeout(timeout)
//     console.log('After timeout')
// }, 2500)
//
// const interval = setInterval( () => {
//
//     console.log('After timeout')
//     clearInterval(timeout)
// }, 1000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback,wait)
// }
// delay( () => {
//     console.log('Affter to second')},2000
// )
const delay =(wait = 1000) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
        // resolve()
            reject('Что то не так')
        }, wait)
    })
return promise
}

// delay(2500)
// .then( () => {
//     console.log('After 2 seconds')
// })
// .catch(err => console.error('Eror',err))
// .finally(() => console.log('Final'))

const getData = () => new Promise (resolve => resolve([
    1,1,2,3,5,8,13
]))
//
// getData().then(data => console.log(data))

async function asyncEx() {
try {
    await delay (3000)
    const data = await getData()
    console.log('Data',data)
} catch (e) {
    console.log(e)
} finally {
    console.log('Error 404')
}
}

asyncEx()