var tabela = document.querySelector("table");

console.log(tabela);
tabela.addEventListener("dblclick",function(event){
	event.target.parentNode.classList.add("fadeOut");
	
	if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }
	
	setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    event.target.parentNode.remove();
});

