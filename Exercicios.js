/*1. Escreva um trecho de código para imprimir os números pares definidos por um intervalode valores inteiro
s não-negativos inicioe fim.Utilize versões com fore while*/
//for
for (var i_1 = 1; i_1 <= 10; i_1++) {
    while ((i_1 % 2) == 0) {
        console.log('valores pares ' + i_1);
        break;
    }
}
var j = 1;
//while
while (j <= 10) {
    if ((j % 2) == 0) {
        console.log('valores pares ' + j);
    }
    j++;
}
/*2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?*/
var i = 0;
while (i != 10) {
    i += 0.2;
    break;
}
console.log(i);
/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.Não use funções auxiliares de Math.Utilize corretamente a declaração
de tipos nos parâmetros e no resultado da função.*/
function min(x, y) {
    if (x === void 0) { x = 2; }
    if (y === void 0) { y = 3; }
    if (x > y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
min();
/*4. Escreva uma função pow(x,y)que calcula o valor de 푥푦, ou seja, x elevado a potência y. Assuma que os valores de xeysão números inteirosnão negativose que 푥0=1para qualquer valor de x.Apresente uma versão iterativa e uma versão recursiva para a função.Não utilize o operador **.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
function pow(base, exp) {
    var res = 1;
    for (var i_2 = 0; i_2 < exp; i_2++) {
        res *= base;
    }
    console.log(res);
    return res;
}
pow(10, 2);
/*5. Escreva uma função toMaiusculaPrimeira(s)que recebe uma string s(assuma qualquer string não vazia) e retorna a mesma string com a primeira letra em maiúscula.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
function toMaiusculaPrimeira(frase) {
    frase = frase.toLowerCase().replace(/(?:^|\s)\S/g, function (toMaiusculaPrimeira) {
        return toMaiusculaPrimeira.toUpperCase();
    });
    console.log(frase);
}
toMaiusculaPrimeira("fun deu certo");
/*6. Escreva uma função getMax(arr)que recebe um array de número inteiros e retorna o maior elemento encontrado no array. Assuma que o array não está vazio.Não utilize funções auxiliares de outros objetos disponibilizados
pelo TypeScript.Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.*/
function getMax(a) {
    if (a === void 0) { a = [1, 2, 3]; }
    var maior = 0;
    for (var i_3 = 0; i_3 < a.length; i_3++) {
        if (a[i_3] > maior) {
            maior = a[i_3];
        }
    }
}
/*7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cadanúmeropresenteem um determinado array contendo números inteiros.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
function presence(arr) {
    var result = new Map();
    arr.forEach(function (val, index) {
        var actual = val;
        var counter = 0;
        arr.forEach(function (v) {
            if (actual == v)
                counter++;
        });
        result.set(val, counter);
    });
    return result;
}
console.log(presence([2, 2, 2, 3, 4, 5, 6, 7, 8]));
