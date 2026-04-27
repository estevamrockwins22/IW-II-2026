// Ex 1
function ex1() {
    const texto = document.getElementById('input1').value;
    document.getElementById('res1').innerText = texto;
}

// Ex 2
function ex2() {
    const nome = document.getElementById('input2').value;
    document.getElementById('res2').innerText = `Olá, ${nome}!`;
}

// Ex 3
function ex3() {
    const idade = document.getElementById('input3').value;
    const p = document.getElementById('res3');
    p.innerText = idade >= 18 ? "Maior de idade" : "Menor de idade";
}

// Ex 4
function ex4() {
    const cores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff'];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}

// Ex 5
function ex5() {
    document.body.classList.toggle('dark-mode');
}

// Ex 6 e 7
function ex6() {
    const input = document.getElementById('input6');
    const ul = document.getElementById('lista6');
    
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerText = input.value;
        // Exercício 7: Remover ao clicar
        li.onclick = function() { this.remove(); };
        ul.appendChild(li);
        input.value = "";
    }
}

// Ex 8
function ex8() {
    const num = document.getElementById('input8').value;
    const p = document.getElementById('res8');
    p.innerText = num % 2 === 0 ? "Par" : "Ímpar";
}

// Ex 9
function ex9() {
    const senha = document.getElementById('input9').value;
    const p = document.getElementById('res9');
    p.innerText = senha.length >= 6 ? "Senha Válida" : "Mínimo 6 caracteres";
    p.style.color = senha.length >= 6 ? "green" : "red";
}

// Ex 10 - Desafio
let total = 0;
function atualizarContador() {
    document.getElementById('contador').innerText = total;
}

function adicionarSistema() {
    const input = document.getElementById('nomeSistema');
    const ul = document.getElementById('listaSistema');

    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerText = input.value;

        const btnRemover = document.createElement('button');
        btnRemover.innerText = "Remover";
        btnRemover.className = "item-btn";
        
        btnRemover.onclick = function() {
            li.remove();
            total--;
            atualizarContador();
        };

        li.appendChild(btnRemover);
        ul.appendChild(li);
        
        total++;
        atualizarContador();
        input.value = "";
    }
}