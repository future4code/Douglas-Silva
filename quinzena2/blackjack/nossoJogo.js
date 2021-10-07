/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const jogo = (confirm("Quer iniciar uma nova rodada?"))

if (jogo) {
   const nomeJogador = prompt("Qual seu nome?")
   console.log(`Olá ${nomeJogador}! Bem vindo(a) ao jogo de Blackjack!`)

   const carta1User = comprarCarta()
   const carta2User = comprarCarta()
   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()

   const pontuacaoUser = carta1User.valor + carta2User.valor
   const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   
   console.log(`${nomeJogador} - cartas: ${carta1User.texto} ${carta2User.texto} - ${pontuacaoUser}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)
   
   if (pontuacaoUser === pontuacaoComputador) {
      console.log("Empate!")
   }else if (pontuacaoComputador > pontuacaoUser) {
      console.log("O Computador ganhou!")
   }else if (pontuacaoUser > pontuacaoComputador ){
      console.log(`O ${nomeJogador} ganhou!`)
   }

}else {
   console.log("O jogo acabou.")
}