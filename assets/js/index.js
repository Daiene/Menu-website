const listaSelecaoBotoes = document.querySelectorAll(".botao");
const carrosselPrincipal = document.querySelectorAll(".carousel");

listaSelecaoBotoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();

        const carrosselPrincipalAberto = document.querySelector(".aberto");
        carrosselPrincipalAberto.classList.remove("aberto");

        const idLancheSelecionado = botao.attributes.id.value;

        const idDoCarrosselParaAbrir = "carousel-" + idLancheSelecionado;

        const CarrosselParaAbrir = document.getElementById(idDoCarrosselParaAbrir);
        CarrosselParaAbrir.classList.add("aberto");

        const lancheAtivoNasOpcoes = document.querySelector (".ativo");
        lancheAtivoNasOpcoes.classList.remove("ativo");

        const lancheSelecionadoNasOpcoes = document.getElementById(idLancheSelecionado);
        lancheSelecionadoNasOpcoes.classList.add("ativo");
    })
})