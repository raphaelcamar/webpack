import Title from './components/title'
import Image from './components/image'
import Button from './components/button'
import warning from './templates/warning.html'
import './styles/warning.css'
import frase from './files/frase.txt'
import descricao from './files/descricao.json'

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página")

image.insertBobImage()
button.create()

// Babel spread

const obj = { a: 1, b: 2, c: 3 }

let { a, b, ...teste } = obj

console.log(teste)

//template html

const body = document.querySelector('body');
body.innerHTML += warning

const fraseJS = frase

console.log(fraseJS)

// JSON

const pessoa = descricao

console.log(pessoa)