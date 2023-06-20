const scope = require('../index')

window.scope = scope

document.querySelector('#convert').addEventListener('click', () => {
    let input = document.querySelector('#input').value
    let scopeSelector = document.querySelector('#scopeSelector').value
    let output = scope(input, scopeSelector)
    console.log(output)
    document.querySelector('#output').value = output
})