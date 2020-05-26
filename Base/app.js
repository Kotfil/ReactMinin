// window.alert('1')
const header = document.getElementById('h1')
//const header2 = document.getElementsByTagName('h2')[0]
const header2 = document.querySelector('h2')

//const header2 = document.querySelector('#sub-selector')
//const header3 = header2.nextElementSibling

const h2list = document.querySelectorAll('h2')
console.dir(h2list)
const heading3 = h2list[h2list.length - 1]

setTimeout(() => {
    addStylesTo(header,'123','white')
}, 1000)
setTimeout(() => {
    addStylesTo(header2,'321','gray')
}, 2000)
setTimeout(() => {
    addStylesTo(heading3,'333','red')
}, 3000)

function addStylesTo(node, text, color = 'blue') {
    node.textContent = text
    node.style.textAlign = 'center'
    node.style.color = color
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
}
