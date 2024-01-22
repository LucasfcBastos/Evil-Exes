const botons = document.querySelectorAll(".boton");
const characters = document.querySelectorAll(".character");

botons.forEach((boton, indice) => {
	boton.addEventListener("click", () => {
		desselecionarboton();
		desselecionarcharacter();

		boton.classList.add("selected");
		characters[indice].classList.add("selected");
	});
});

function desselecionarcharacter() {
	const personagemcharacter = document.querySelector(".character.selected");
	personagemcharacter.classList.remove("selected");
}

function desselecionarboton() {
	const botonSelecionado = document.querySelector(".boton.selected");
	botonSelecionado.classList.remove("selected");
}
