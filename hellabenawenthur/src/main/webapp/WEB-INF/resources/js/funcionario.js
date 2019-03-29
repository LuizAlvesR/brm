function calculoIcmsPacientes() {
	var pacientes = document.querySelectorAll(".paciente");

	for(var i = 0; i < pacientes.length ; i++){
	    var paciente = pacientes[i];
	    var tdPeso = paciente.querySelector(".info-peso");
	    var tdAltura = paciente.querySelector(".info-altura");

	    var tdImc = paciente.querySelector(".info-imc");

	    var peso = tdPeso.textContent;
	    var altura = tdAltura.textContent;

	    var alturaEhValida = true;
	    var pesoEhValido = true;

	    if(peso <= 0 || peso > 1000){
	        console.log("Peso inválido");
	        tdImc.textContent = "Peso inválido!";
	        pesoEhValido = false;
	    }

	    if(altura <= 0 || altura >= 1000){
	        console.log("Altura inválida");
	        tdImc.textContent = "Altura inválida!";
	        alturaEhValida = false;
	    }

	    if(pesoEhValido && alturaEhValida){
	        var imc = peso / ( altura * altura);    
	        tdImc.textContent = imc;
	    }    
	}
} 

function validacoes() {
	var titulo = document.querySelector(".titulo");
	var paciente = document.querySelector("#primeiro-paciente");
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var pesoEhValido = true;
	var alturaEhValida = true;


	if (peso <= 0 || peso >= 1000) {
	    console.log("Peso inválido!");
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	}

	if (altura <= 0 || altura >= 3.00){
	    console.log("Altura inválida!");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	}

	if (alturaEhValida && pesoEhValido){
	    var imc = peso / (altura * altura);
	    tdImc.textContent = imc;
	}

	var setorTI = true;
	var gerente = false;
	if(setorTI == true || gerente == true){
	    console.log("Acesso permitido");
	}else{
	    console.log("Acesso negado")
	}


	if(setorTI == true && gerente == true){
	    console.log("Acesso permitido");
	}else{
	    console.log("Acesso negado")
	}
	console.log(imc);



	var alturaEhValida = true;
	var pesoEhValido = true;

	if (peso <= 0 || peso > 1000) {
	    console.log("Peso inválido!");
	    tdPeso.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("paciente-invalido");

	}

	if (altura <= 0 || altura >= 3) {
	    console.log("Altura inválida!");
	    tdAltura.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura);
	    tdImc.textContent = imc.toFixed(2);
	} else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	}

	var produtos = document.querySelectorAll(".produto");

	console.log(produtos.length);
	for( var i=0 ; i < produtos.length ; i++){
		var produto = produtos[i];
	    var nomeDoProduto = produto.textContent;
	    console.log(nomeDoProduto);
	}

	var paragrafo = document.querySelector("#latim");
	paragrafo.style.color = "blue";
	paragrafo.style.backgroundColor = "red";

	var titulos = document.querySelectorAll("h2");
	console.log(1);
	 
	for(var i = 0 ; i <  titulos.length ; i++){
	    var titulo = titulos[i];
	    titulo.classList.add("titulo");
	    console.log(2);
	}
	 
	for(var i = 0 ; i <  titulos.length ; i++){
	    var titulo = titulos[i];
	    titulo.classList.add(".titulo");
	    console.log(3);
	}
	 
}

/* esta função isola a responsabilidade de converter cada elemento do DOM em um convidado.
Esse convidado é um objeto JavaScript com as propriedade nome e idade. 
Se alguém em nosso código quiser ler facilmente a lista de convidados, 
basta chamar esse método que retornará uma lista de objetos já mastigada para se trabalhar.
    */
var convidados = criaListaDeConvidados();
var totalDasIdades = calculaTotalDasIdades(convidados);
exibeTotalDasIdades(totalDasIdades);

function criaListaDeConvidados() {

    var itens = document.querySelectorAll('.convidado');

    var convidados = [];

    for(var i = 0; i < itens.length; i++) {

        var convidado = {
            nome:  itens[i].querySelector('.nome').textContent,
            idade: parseInt(itens[i].querySelector('.idade').textContent)
        };

        convidados.push(convidado);
    }

    return convidados;
}

/* essa função tem como responsabilidade extrair o total da lista de convidados retornando-o para quem chamá-la. 
Isso é interessante, porque quem receber o resultado pode querer exibir na tela com um `alert`,
`console.log` ou até mesmo atualizando essa informação em algum elemento da página.*/

function calculaTotalDasIdades(convidados) {

    var total = 0;

    for(var i = 0; i < convidados.length; i++) {

        total+=convidados[i].idade;
    }

    return total;

}

   /* essa função tem como responsabilidade receber um total qualquer e exibí-lo no HTML */
function exibeTotalDasIdades(total) {
   // document.querySelector('.total').textContent = total;    
}

/* usando nossas funções. Veja que uma pessoa fora do universo da programação 
está mais inclinada a entender o que essas instruções fazem devido aos nomes autoexplicativos. */

