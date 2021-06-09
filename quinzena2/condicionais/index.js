// const numero1 = Number(prompt("Insira o primeiro número:"))
// const numero2 = Number(prompt("Insira o segundo número:"))

// if (numero1 === numero2) {
//     console.log("Os números são iguais")
// }else if (numero2 > numero1){
//         console.log("O segundo é maior que o primeiro")
// }else{
//     console.log("O primeiro número é maior que o segundo")
// }

// let condicao = true
// let segundaCondicao = !condicao

// if(segundaCondicao) {
//     console.log("Entrou no if")
// }else{
//     console.log("Entrou no else")
// }

// const minhaFuncao = (valor, segundoValor) => {
//     let novoValor = valor || segundoValor
//     return novoValor
// }

// console.log(minhaFuncao(false, false))

// const minhaFuncao2 = (valor, segundoValor) => {
//     let novoValor = valor && segundoValor
//     if(novoValor) {
//         let a =  novoValor
//     }
//     return a
// }

// console.log(minhaFuncao2(true, true))

// const minhaFuncao = (obj) => {
//     let novoObj = {...obj, vida: 50}
//     return novoObj
// }

// console.log(minhaFuncao({nome: "Bulbassaur", tipo: "Planta, vida: 10"}))

// const minhaFuncao = (arr) => {
//     let novoArr = [...arr].pop()
//     console.log(arr)
//     console.log(novoArr)
// }

// console.log(minhaFuncao([1,2,3,4,5]))

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     // break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	// let mensagem = "Essa mensagem é secreta!!!"
// }else mensagem = "Essa mensagem é secreta!!!"

// console.log(mensagem)

// 1
// const idadeUsuario = Number(prompt("Qual sua idade?"))
// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir")
// }else console.log("Você não pode dirigir.")

// 2
// const qualTurnoEstuda = prompt("Qual turno do dia estuda? (M (matutino) ou V (Vespertino) ou N (Noturno)")
// if (qualTurnoEstuda === "M") {
//     console.log("Bom dia!")
// }else if (qualTurnoEstuda === "V") {
//     console.log("Boa tarde!")
// }else if (qualTurnoEstuda === "N") {
//     console.log("Boa Noite!")
// }else {console.log("Preencha uma das opções")}

// 3
// const qualTurnoEstuda = prompt("Qual turno do dia estuda? (M (matutino) ou V (Vespertino) ou N (Noturno)")
// switch (qualTurnoEstuda) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;    
//     case "N":
//         console.log("Boa Noite!")
//         break;

//     default:
//         console.log("Preencha uma das opções")
//         break;
// }

// 4
// const generoFilme = prompt ("Qual o gênero de filme que vão assistir?") //=== "fantasia"
// const precoIngresso = prompt ("Qual o preço do ingresso?")
// if (generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
// }else {console.log("Escolha outro filme :(")}

// Desafio - 1
const generoFilme = prompt ("Qual o gênero de filme que vão assistir?") //=== "fantasia"
const qualLanchinho = prompt ("qual lanchinho vai comprar (pipoca, chocolate, doces, etc)?") //=== "fantasia"
const precoIngresso = prompt ("Qual o preço do ingresso?")
if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log(`Bom filme!`)
    console.log(`Aproveite o(a) seu(a) ${qualLanchinho}!`)
}else {console.log("Escolha outro filme :(")}

