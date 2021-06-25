```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12) {
    let macasMenorq12 = quantidade * 1.30
    return macasMenorq12
  }else if (quantidade >= 12){
    let macasMaiorq12 = quantidade * 1
    return macasMaiorq12
  }
}
```javascript