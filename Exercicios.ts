/*1. Escreva um trecho de código para imprimir os números pares definidos por um intervalode valores inteiro
s não-negativos inicioe fim.Utilize versões com fore while*/

//for
for (let i = 1; i <= 10; i++) {
    while ((i % 2) == 0) {
        console.log('valores pares ' + i)
        break
    }
}

let j: number = 1;

//while
while (j <= 10) {

    if ((j % 2) == 0) {
        console.log('valores pares ' + j);

    }
    j++;
}


/*2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?*/
let i: number = 0;
while (i != 10) {
    i += 0.2;
    break
}
console.log(i);


/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.Não use funções auxiliares de Math.Utilize corretamente a declaração 
de tipos nos parâmetros e no resultado da função.*/
function min(x: number = 2, y: number = 3) {
    if (x > y) {
        console.log(x)
    } else {
        console.log(y)
    }
}
min()
/*4. Escreva uma função pow(x,y)que calcula o valor de 푥푦, ou seja, x elevado a potência y. Assuma que os valores de xeysão números inteirosnão negativose que 푥0=1para qualquer valor de x.Apresente uma versão iterativa e uma versão recursiva para a função.Não utilize o operador **.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/ 

function pow(base: number, exp: number) {

    let res = 1

    for (let i = 0; i < exp; i++) {
        res *= base;
    }

    console.log(res)
    return res

}
pow (10,2)
/*5. Escreva uma função toMaiusculaPrimeira(s)que recebe uma string s(assuma qualquer string não vazia) e retorna a mesma string com a primeira letra em maiúscula.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/

function toMaiusculaPrimeira(s: string = "s") {
    return console.log(s.toUpperCase());
}
toMaiusculaPrimeira();

/*6. Escreva uma função getMax(arr)que recebe um array de número inteiros e retorna o maior elemento encontrado no array. Assuma que o array não está vazio.Não utilize funções auxiliares de outros objetos disponibilizados 
pelo TypeScript.Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.*/
function getMax(a: number[] = [1, 2, 3]) {
    let maior = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > maior) {
            maior = a[i];
        }
    }
}
/*7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cadanúmeropresenteem um determinado array contendo números inteiros.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
function presence(arr: number[]): Map<number, number> {
    let result = new Map<number, number>();

    arr.forEach((val: number, index: number) => {
        let actual = val;
        let counter = 0;
        arr.forEach((v: number) => {
            if (actual == v) counter++;
        })
        result.set(val, counter);
    })
    return result;
}

console.log(presence([2, 2, 2, 3, 4, 5, 6, 7, 8]));



