// window.alert('1')
const header = document.getElementById('h1')
//const header2 = document.getElementsByTagName('h2')[0]
const header2 = document.querySelector('h2')

//const header2 = document.querySelector('#sub-selector')
//const header3 = header2.nextElementSibling

const h2list = document.querySelectorAll('h2')
//console.dir(h2list)
const heading3 = h2list[h2list.length - 1]

setTimeout(() => {
    addStylesTo(header,'123')
}, 1000)
setTimeout(() => {
    addStylesTo(header2.children[0],'321','gray')
}, 2000)
setTimeout(() => {
    addStylesTo(heading3,'333','red', '2rem')
}, 3000)

function addStylesTo(node, text, color = 'blue',fontSize) {
    node.textContent = text
    node.style.textAlign = 'center'
    node.style.color = color
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

header.onclick = () => {
   if(header.style.color === 'red') {
       header.style.color = '#000'
       header.style.backgroundColor = '#fff'
   } else {
       header.style.color = 'red'
       header.style.backgroundColor = '#000'
   }
}



header2.addEventListener('dbclick', () =>  {
    if(header2.style.color === 'yellow') {
        header2.style.color = '#000'
        header2.style.backgroundColor = '#fff'
    } else {
        header2.style.color = 'white'
        header2.style.backgroundColor = '#000'
    }
})