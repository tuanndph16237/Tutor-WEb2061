var h3 = document.querySelector('h3')
var button = document.querySelector('button')
var ul = document.querySelector('ul')
var input = document.querySelector('input')

button.onclick = function() {
    ul.innerHTML += ''
    input.value = ""
}
