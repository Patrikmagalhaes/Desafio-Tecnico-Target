//Este programa verifica se um número é da sequência de Fibonacci, ultilizei a formula de Binet





let numeroTeste = 13

//Se alguma dessas raízes ou as duas forem um número inteiro, o número é Fibonacci
function vericaFibonacci(quadrado1, quadrado2, resultado1, resultado2) {

    let inteiro1 = Math.round(quadrado1)
    let inteiro2 = Math.round(quadrado2)

    if (inteiro1 * inteiro1 === resultado1 || inteiro2 * inteiro2 === resultado2) {
        console.log(`O número ${numeroTeste} é Fibonacci`)
    } else {
        console.log(`O número ${numeroTeste} não é Fibonacci`)
    }
}

//multiplica o número por si mesmo e por 5, e depois soma e subtrai 4
function calcularNumero(numero) {
    const resultado1 = (numero * numero * 5) + 4
    const resultado2 = (numero * numero * 5) - 4

    calculaRaiz(resultado1, resultado2)
}

calcularNumero(numeroTeste)

//obetem o resultado das raizes
function calculaRaiz(raiz1, raiz2) {
    const resultadoRaiz1 = Math.sqrt(raiz1)
    const resultadoRaiz2 = Math.sqrt(raiz2)

    vericaFibonacci(resultadoRaiz1, resultadoRaiz2, raiz1, raiz2)
}
