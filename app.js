alert('Boas vindas ao jogo do número secreto!');

let numero = parseInt(prompt('Digite até que número você quer que vá'))

let numeroSecreto = parseInt(Math.random() * numero + 1)
console.log(numeroSecreto)
let chute 
let tentativa = 0

// console.log('Resultado da comparação: ' + numeroSecreto + ', chute: ' + chute)

while (numeroSecreto != chute) {
    tentativa++
    chute = prompt(`Escolha um número entre 1 e ${numero}, tentativa número ${tentativa}`)
    if (numeroSecreto == chute) {
        // console.log('Você acertou! O número era ' + numeroSecreto)
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa' //operador ternário

alert(`Você acertou o número era ${numeroSecreto} com ${tentativa} ${palavraTentativa}`)

/* ALURA */

// if (tentativa > 1) {
//     alert(`Você acertou o número era ${numeroSecreto} com ${tentativa} tentativas`);
// } else {
//     alert(`Você acertou o número era ${numeroSecreto} com ${tentativa} tentativa`);
// }

// alert('Boas vindas ao nosso site')

// let nome = 'Lua'
// let idade = 25
// let numeroDeVendas = 50
// let saldoDisponivel = 1000
// alert('Erro! Preencha todos os campos')

// let mensagemDeErro = 'Erro! Preencha todos os campos.'
// alert(mensagemDeErro)

// nome = prompt('Digite seu nome')
// idade = prompt('Digite sua idade')

// if (idade >= 18) {
//     console.log(nome)
//     console.log(idade)
//     console.log('Pode tirar habilitação')
// }

// let diaSemana = prompt('Digite o dia da semana');

// if (diaSemana == 'sabado') {
//     console.log('Bom fim de semana!');
// } if (diaSemana == 'domingo') {
//     console.log('Bom fim de semana!');
// } else {
//     console.log('Boa semana!');
// }

// let pontos = 90

// if (pontos >= 100) {
//     console.log('Parabéns você venceu!');
// } else {
//     console.log('Tente novamente para ganhar.');
// }

// let numero = prompt('Digite um número');

// if (numero >= 0) {
//     console.log('O número é positivo');
// } else {
//     console.log('O número é negativo');
// }

// let saldo = 1500
// alert(`O saldo da sua conta é ${saldo}`);

// let nome = prompt('Insira o seu nome');
// alert(`Seja bem vindo ${nome}`);

// let numero = 0
// while (numero < 10) {
//     numero++
//     console.log(numero)
// }

// let contador = 10
// while (contador > 0) {
//     contador--
//     console.log(contador+1)
// }

// let num = prompt('Digite um número');
// while (num > 0) {
//     num--
//     console.log(num);
// }

// let pneu = 0
// let n = prompt('Digite um número: ');
// while (pneu < n) {
//     pneu++
//     console.log(pneu)
// }

// console.log('Bem vindo')

// let nome = prompt('Digite seu nome')
// console.log(`Bem vindo ${nome}!`)
// alert(`Bem vindo ${nome}!`)

// let pergunta = prompt('Qual a linguagem de programação você mais gosta?')
// console.log(pergunta)

// let valor1 = parseInt(prompt('Digite o primeiro valor'))
// let valor2 = parseInt(prompt('Digite o segundo valor'))
// let soma = (valor1 + valor2);
// let subtracao = valor1 - valor2;
// console.log(`A soma entre ${valor1} e ${valor2} é ${soma}`)
// console.log(`A diferença entre ${valor1} e ${valor2} é ${subtracao}`)

// let idade = prompt('Digite sua idade')
// if (idade >= 18) {
//     console.log('Você é maior de idade')
// } else {
//     console.log('Você é menor de idade')
// }

// let numero = prompt('Digite o número')
// if (numero == 0) {
//     console.log('O número é igual a zero')
// } else {
//     if (numero > 0) {
//         console.log('O número é positivo')
//     } else {
//         console.log('O número é negativo')
//     }
// }

// let imp = 0
// while (imp < 10) {
//     imp++
//     console.log(imp)
// }

// let nota = 8;
// if (nota >= 7) {
//     console.log('Aprovado')
// } else {
//     console.log('Reprovado')
// }

// let aleatorio1 = Math.random()
// let aleatorio2 = parseInt(Math.random() * 10 + 1)
// let aleatorio3 = parseInt(Math.random() * 1000 + 1)

// console.log(aleatorio1)
// console.log(aleatorio2)
// console.log(aleatorio3)