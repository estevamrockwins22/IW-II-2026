const container = document.getElementById("container");

function criarCard(titulo, descricao, funcao) {
    const card = document.createElement("div");
    card.className = "card";

    const resultado = document.createElement("div");
    resultado.className = "resultado";

    const botao = document.createElement("button");
    botao.innerText = "Ver resultado";

    botao.onclick = () => {
        resultado.innerHTML = funcao();
    };

    card.innerHTML = `<h2>${titulo}</h2><p>${descricao}</p>`;
    card.appendChild(botao);
    card.appendChild(resultado);

    container.appendChild(card);
}

/* FUNÇÕES */

function ex1() {
    let n = Number(prompt("Digite um número:"));
    return n % 2 === 0 ? "Par" : "Ímpar";
}

function ex2() {
    let idade = Number(prompt("Digite sua idade:"));
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

function ex3() {
    let res = "";
    for (let i = 1; i <= 10; i++) res += i + "<br>";
    return res;
}

function ex4() {
    let n = Number(prompt("Digite um número:"));
    let res = "";
    while (n >= 0) {
        res += n + "<br>";
        n--;
    }
    return res;
}

function ex5() {
    let n = Number(prompt("Digite um número:"));
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${n} x ${i} = ${n * i}<br>`;
    }
    return res;
}

function ex6() {
    let n = Number(prompt("Digite um número:"));
    let soma = 0;
    for (let i = 1; i <= n; i++) soma += i;
    return "Resultado: " + soma;
}

function ex7() {
    let n = Number(prompt("Digite um número:"));
    if (n < 2) return "Não é primo";
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return "Não é primo";
    }
    return "É primo";
}

function ex8() {
    let user, senha;
    do {
        user = prompt("Usuário:");
        senha = prompt("Senha:");
    } while (user !== "admin" || senha !== "1234");
    return "Login realizado";
}

function ex9() {
    let total = 0, n;
    do {
        n = Number(prompt("Número (negativo para parar):"));
        if (n >= 0) total += n;
    } while (n >= 0);
    return "Total: " + total;
}

function ex10() {
    let segredo = Math.floor(Math.random() * 10) + 1;
    let palpite;
    do {
        palpite = Number(prompt("Adivinhe (1 a 10):"));
        if (palpite < segredo) alert("Muito baixo");
        else if (palpite > segredo) alert("Muito alto");
    } while (palpite !== segredo);
    return "Acertou! Número: " + segredo;
}

function ex11() {
    let n = Number(prompt("Digite um número:"));
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return "Fatorial: " + f;
}

function ex12() {
    let nota;
    do {
        nota = Number(prompt("Nota (0 a 10):"));
    } while (nota < 0 || nota > 10);
    return "Nota válida: " + nota;
}

function ex13() {
    let n1 = Number(prompt("Nota 1:"));
    let n2 = Number(prompt("Nota 2:"));
    let n3 = Number(prompt("Nota 3:"));

    let media = (n1 + n2 + n3) / 3;
    return `Média: ${media}<br>${media >= 7 ? "Aprovado" : "Reprovado"}`;
}

function ex14() {
    let valor = Number(prompt("Valor:"));
    let cedulas = [100, 50, 20, 10, 5, 2, 1];
    let res = "";

    for (let c of cedulas) {
        let qtd = Math.floor(valor / c);
        if (qtd > 0) {
            res += `${qtd} nota(s) de R$${c}<br>`;
            valor %= c;
        }
    }
    return res;
}

function ex15() {
    let n = Number(prompt("Digite um número:"));
    let res = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) res += i + "<br>";
    }
    return res;
}


criarCard("1. Par ou Ímpar", "Verifique se o número é par ou ímpar.", ex1);
criarCard("2. Maioridade", "Descubra se é maior de idade.", ex2);
criarCard("3. Contagem", "Mostra números de 1 a 10.", ex3);
criarCard("4. Regressiva", "Contagem até 0.", ex4);
criarCard("5. Tabuada", "Tabuada de 1 a 10.", ex5);
criarCard("6. Somatório", "Soma até o número.", ex6);
criarCard("7. Primo", "Verifica número primo.", ex7);
criarCard("8. Login", "Sistema simples de login.", ex8);
criarCard("9. Soma", "Soma números positivos.", ex9);
criarCard("10. Adivinhação", "Jogo de adivinhar número.", ex10);
criarCard("11. Fatorial", "Calcula fatorial.", ex11);
criarCard("12. Nota", "Validação de nota.", ex12);
criarCard("13. Média", "Calcula média.", ex13);
criarCard("14. Caixa", "Simula saque.", ex14);
criarCard("15. Ímpares", "Mostra números ímpares.", ex15);