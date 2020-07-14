const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const resultadoElement = document.querySelector("#resultado");

function calculaImc() {


    var resultado = parseFloat(peso.value) / parseFloat(altura.value * altura.value);
    // console.log(resultado.toFixed(2));
    var elemento = document.createElement("div");
    if (resultado < 18.5) {
        elemento.innerHTML = `<p>O seu IMC é ${resultado.toFixed(2)}</p>` + "<p>Sua classificação é MAGREZA.</p>";
        resultadoElement.appendChild(elemento);
    } else if (resultado >= 18.5 && resultado < 24.9) {
        elemento.innerHTML = `<p>O seu IMC é ${resultado.toFixed(2)}</p>` + "<p>Sua classificação é NORMAL.</p>";
        resultadoElement.appendChild(elemento);
    } else if (resultado >= 24.9 && resultado < 29.9) {
        elemento.innerHTML = `<p>O seu IMC é ${resultado.toFixed(2)}</p>` + "<p>Sua classificação é SOBREPESO.</p>";
        resultadoElement.appendChild(elemento);
    } else if (resultado >= 29.9 && resultado < 39.9) {
        elemento.innerHTML = `<p>O seu IMC é ${resultado.toFixed(2)}</p>` + "<p>Sua classificação é OBESIDADE.</p>";
        resultadoElement.appendChild(elemento);
    } else {
        elemento.innerHTML = `<p>O seu IMC é ${resultado.toFixed(2)}</p>` + "<p>Sua classificação é OBESIDADE GRAVE.</p>";
        resultadoElement.appendChild(elemento);
    }

    peso.value = '';
    altura.value = '';

    event.preventDefault();
}