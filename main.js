let calcular = document.getElementById("calcular");
let limpar = document.getElementById("limpar");
let classificacao = ''

calcular.addEventListener("click", calculaImc);
limpar.addEventListener("click", limpaCampos);

function calculaImc() {
    let nome = document.getElementById("nome").value;
    let peso = (document.getElementById("peso").value);
    let altura = (document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    if (nome !== '' || peso !== '' || altura !== '') {
        let imc = peso / (altura * altura);
        resultado.innerText = (`Olá ${nome} seu imc é ${imc.toFixed(2)} \n`);
        classificaImc(imc);
    } else {
        window.alert("Preencha todos os campos!");
    }
}

function classificaImc(imc) {
    if (imc < 18.5) { resultado.innerText += ("Abaixo do peso") }
    if (imc >= 18.5 && imc <= 24.9) { resultado.innerText += ("Peso normal") }
    if (imc > 24.9 && imc <= 29.9) { resultado.innerText += ("Sobrepeso") }
    if (imc > 29.9 && imc < 34.9) { resultado.innerText += ("Obesidade Grau I") }
    if (imc > 35 && imc <= 39.9) { resultado.innerText += ("Obesidade Grau II") }
    if (imc >= 40) { resultado.innerText += ("Obesidade Grau III") }

}

function limpaCampos() {
    nome.value = '';
    peso.value = '';
    altura.value = '';
    resultado.innerText = '';
}