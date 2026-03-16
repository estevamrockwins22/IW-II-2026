function parOuImpar(){

    let num = Number(document.getElementById("num1").value)
    
    if(num % 2 === 0){
    document.getElementById("res1").innerText = "Par"
    }else{
    document.getElementById("res1").innerText = "Ímpar"
    }
    
    }
    
    
    function maioridade(){
    
    let idade = Number(document.getElementById("idade").value)
    
    if(idade >= 18){
    document.getElementById("res2").innerText = "Maior de idade"
    }else{
    document.getElementById("res2").innerText = "Menor de idade"
    }
    
    }
    
    
    function contar(){
    
    let texto = ""
    
    for(let i = 1; i <= 10; i++){
    texto += i + " "
    }
    
    document.getElementById("res3").innerText = texto
    
    }
    
    
    function regressiva(){
    
    let num = Number(document.getElementById("num2").value)
    let texto = ""
    
    while(num >= 0){
    texto += num + " "
    num--
    }
    
    document.getElementById("res4").innerText = texto
    
    }
    
    
    function tabuada(){
    
    let num = Number(document.getElementById("num3").value)
    let texto = ""
    
    for(let i = 1; i <= 10; i++){
    texto += num + " x " + i + " = " + (num*i) + " | "
    }
    
    document.getElementById("res5").innerText = texto
    
    }
    
    
    function somatorio(){
    
    let num = Number(document.getElementById("num4").value)
    let soma = 0
    
    for(let i = 1; i <= num; i++){
    soma += i
    }
    
    document.getElementById("res6").innerText = soma
    
    }
    
    
    function primo(){
    
    let num = Number(document.getElementById("num5").value)
    let primo = true
    
    for(let i = 2; i < num; i++){
    if(num % i === 0){
    primo = false
    }
    }
    
    if(num <= 1){
    primo = false
    }
    
    if(primo){
    document.getElementById("res7").innerText = "É primo"
    }else{
    document.getElementById("res7").innerText = "Não é primo"
    }
    
    }
    
    
    function login(){
    
    let user = document.getElementById("user").value
    let senha = document.getElementById("senha").value
    
    if(user === "admin" && senha === "1234"){
    document.getElementById("res8").innerText = "Login correto"
    }else{
    document.getElementById("res8").innerText = "Login incorreto"
    }
    
    }
    
    
    let somaTotal = 0
    
    function somarPositivo(){
    
    let num = Number(document.getElementById("num6").value)
    
    if(num >= 0){
    somaTotal += num
    document.getElementById("res9").innerText = "Soma: " + somaTotal
    }else{
    document.getElementById("res9").innerText = "Total final: " + somaTotal
    }
    
    }
    
    
    let numeroSecreto = Math.floor(Math.random()*10)+1
    
    function adivinhar(){
    
    let chute = Number(document.getElementById("num7").value)
    
    if(chute > numeroSecreto){
    document.getElementById("res10").innerText = "Muito alto"
    }else if(chute < numeroSecreto){
    document.getElementById("res10").innerText = "Muito baixo"
    }else{
    document.getElementById("res10").innerText = "Acertou"
    }
    
    }
    
    
    function fatorial(){
    
    let num = Number(document.getElementById("num8").value)
    let fat = 1
    
    for(let i = 1; i <= num; i++){
    fat *= i
    }
    
    document.getElementById("res11").innerText = fat
    
    }
    
    
    function validarNota(){
    
    let nota = Number(document.getElementById("nota").value)
    
    if(nota >= 0 && nota <= 10){
    document.getElementById("res12").innerText = "Nota válida"
    }else{
    document.getElementById("res12").innerText = "Nota inválida"
    }
    
    }
    
    
    function media(){
    
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    
    let m = (n1+n2+n3)/3
    
    if(m >= 7){
    document.getElementById("res13").innerText = "Média: "+m+" (Aprovado)"
    }else{
    document.getElementById("res13").innerText = "Média: "+m+" (Reprovado)"
    }
    
    }
    
    
    function caixa(){
    
    let valor = Number(document.getElementById("valor").value)
    
    let n100 = Math.floor(valor/100)
    valor %= 100
    
    let n50 = Math.floor(valor/50)
    valor %= 50
    
    let n20 = Math.floor(valor/20)
    valor %= 20
    
    let n10 = Math.floor(valor/10)
    valor %= 10
    
    let n5 = Math.floor(valor/5)
    valor %= 5
    
    let n2 = Math.floor(valor/2)
    valor %= 2
    
    let n1 = valor
    
    document.getElementById("res14").innerText =
    "100:"+n100+" 50:"+n50+" 20:"+n20+" 10:"+n10+" 5:"+n5+" 2:"+n2+" 1:"+n1
    
    }
    
    
    function impares(){
    
    let num = Number(document.getElementById("num9").value)
    let texto = ""
    
    for(let i=1;i<=num;i++){
    if(i%2!==0){
    texto += i + " "
    }
    }
    
    document.getElementById("res15").innerText = texto
    
    }