var paciente = document.querySelector("#primeiro-paciente");
var tdImc = paciente.querySelector(".info-imc");
var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);

if (!pesoEhValido || !alturaEhValida) {
	console.log("Peso inválido!");
	tdImc.textContent = "Peso e ou altura inválido!";
	paciente.classList.add("paciente-invalido");
} else {
	var imc = calculaImc(peso, altura);
	tdImc.textContent = imc.fixedTo(2);
}

function calculaImc(peso, altura) {

	var imc = 0;

	imc = peso / (altura * altura);

	console.log(imc);
	return imc.toFixed(2);
}

function validaPeso(peso) {

	if (peso >= 0 && peso <= 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {

	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}
