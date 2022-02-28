/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */
export function somentePares(numeros: number[]): number[] {
    let pares = numeros.filter((numeros) => numeros % 2 == 0);
    return pares;
}
exports.somentePares = somentePares;
console.log(somentePares([1, 2, 3, 4]));


/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
 */
export function somaNumeros(numeros: number[]): number {
    let soma = numeros.reduce((soma, elemento) => soma + elemento, 0);
    return soma;
}
exports.somaNumeros = somaNumeros;
somaNumeros([1, 2, 3, 4, 5]);

/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
 */
export function elevarAoQuadrado(numeros: number[]): number[] {
    let elevar = numeros.map((quadrado) => quadrado * quadrado);
    return elevar;

}

exports.elevarAoQuadrado = elevarAoQuadrado;
console.log(elevarAoQuadrado([1, 2, 3, 4]));
