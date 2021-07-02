~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const array = 0
  for(let num of arrayDeNumeros){
    if(num === numeroEscolhido) {
      array++
    }
  }
  if(array === 0){
    return `Número não encontrado`
  }
  return `O Número ${numeroEscolhido} aparece ${array.length}x`
}

~~~