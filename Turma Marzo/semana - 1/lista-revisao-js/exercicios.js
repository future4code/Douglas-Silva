// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    return array.sort((a,b) =>{
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    return array.filter (item => item % 2 == 0) 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return (array.filter (item => item % 2 == 0)).map(item => item ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1,num2)
    let maiorDivisivelPorMenor = num2 % num2 === 0
    let diferenca = Math.max(num1,num2) - Math.min(num1,num2)
    
    const entradas = {`maiorNumero: ${maiorNumero}, maiorDivisivelPorMenor: ${maiorDivisivelPorMenor}, diferenca:${diferenca}`}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}