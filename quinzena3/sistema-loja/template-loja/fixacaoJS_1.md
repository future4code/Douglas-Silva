~~~javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 salarioFixo = 2000
    if(qtdeCarrosVendidos > 0) {
        const valorCarro = valorTotalVendas / qtdeCarrosVendidos
        const comissaoFinal = qtdeCarrosVendidos * (100 + (valorCarro * 0.05))
        const salarioFinalMes = comissaoFinal + salarioFixo
        return salarioFinalMes
    } else {
        return salarioFixo
    }
}
~~~javascript