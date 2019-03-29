function atualizaCaracteres() {
	
	var campoPostagem = document.querySelector("#corpo-postagem");
    campoPostagem.addEventListener("input", atualizaCaracteres);
    console.log(campoPostagem);
	    
    var postagem = document.querySelector("#corpo-postagem").value;
    campoPostagem.addEventListener(atualizaCaracteres);
    var caracteres = postagem.length;

    console.log("atualizacaracteres");
    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
    /*
    var campoPostagem = document.querySelector("#corpo-postagem");
    campoPostagem.addEventListener(atualizaCaracteres, "input");
     
    var campoPostagem = document.querySelector("#corpo-postagem");
    campoPostagem.addEventListener(atualizaCaracteres);
     
    var campoPostagem = document.querySelector("#corpo-postagem");
    campoPostagem.addEventListener("click", atualizaCaracteres);
     
    var campoPostagem = document.querySelector("#corpo-postagem");
    campoPostagem.addEventListener("input", atualizaCaracteres);
    */
}