// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt("Digite a altura"))
  const largura = Number(prompt("Digite a altura"))
  const calculaAreaRetangulo = altura * largura

  console.log (calculaAreaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoDeNascimento = Number(prompt("Digite o ano de nascimento"))
  const imprimeIdade = anoAtual - anoDeNascimento

  console.log (imprimeIdade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("Qual seu peso?"))
  const altura = Number(prompt("Qual sua altura?"))
  const imprimeImc = peso / (altura * altura)

  console.log (imprimeImc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor01 = prompt("Digite sua 1ª cor favorita")
  const cor02 = prompt("Digite sua 2ª cor favorita")
  const cor03 = prompt("Digite sua 3ª cor favorita")
  const arrayCores = [cor01,cor02,cor03]

  console.log(arrayCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const frase = prompt("Escreva uma frase em letra minuscula:")

  console.log(frase.toLocaleUpperCase())  
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = Number(prompt("Qual o custo do ingresso?"))
  const valorDeCadaIngresso = Number(prompt("Qual o valor do ingresso?"))
  const calculaIngressosEspetaculo = custo / valorDeCadaIngresso

  console.log(calculaIngressosEspetaculo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string01 = prompt("Escreva uma string")
  const string02 = prompt("Escreva outra string")

  console.log (string01.length === string02.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt("Escreva uma string")
  const string2 = prompt("Escreva outra string")

  console.log (string1.toUpperCase() == string2.toLocaleUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual2 = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  const anoRG = Number(prompt("Digite o ano de emissão do RG:"))
  const idade2 = anoAtual2-anoNascimento
  const emissao = anoAtual2-anoRG

  console.log((idade2<=20 && emissao>=5) || (idade2>20 && idade2<=50 && emissao>=10) || (idade2>50 && emissao>=15))
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoQueEstamos = Number(prompt("Digite o ano atual:"))
  const mult400 = anoQueEstamos % 400 == 0
  const mult4 = anoQueEstamos % 4 == 0
  const mult100 = anoQueEstamos % 100 != 0
  const anobissexto = (mult400 || (mult4 && (mult100!=0)))

  console.log(anobissexto)  
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maior18 = prompt("Tem mais de 18 anos?")
  const medioCompleto = prompt("Tem ensino médio completo?")
  const dispHorario = prompt("Tem disponibilidade de horario?")

  console.log(maior18 == "sim" && medioCompleto == "sim" && dispHorario == "sim")
}