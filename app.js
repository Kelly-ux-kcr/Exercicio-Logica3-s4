//console.log('Ufa funcionou')

const books = require("./database")

const listaDeLivros = books.sort((a,b) => {
    
    return a.paginas - b.paginas})

    console.log(listaDeLivros)

const pegarDados = require('readline-sync')
const livros = require("./database")

const verLivros = pegarDados.question('Voce deseja encontrar um livro pela categoria?(S/N)')

if(verLivros.toLocaleUpperCase() == 'S'){
console.log('Essas são as opções disponiveis:')
console.log('Direito', 'tecnologia')

const qualCategoria = pegarDados.question('Qual categoria você escolhe?')
const listaDeBooks = livros.filter(livros => livros.categoria == qualCategoria)

let livrosLidos = livros.filter(livros => livros.leu == true)
let livrosRecomendados = livros.filter(livros => livros.recomenda == true)

console.log(listaDeLivros)
console.log(livrosLidos)
console.log(livrosRecomendados)

console.table(listaDeLivros)

} else{
console.log('Esses são todos os livros')
console.log(listaDeLivros)

}