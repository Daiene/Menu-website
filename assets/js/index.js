const listaSelecao = document.querySelectorAll('.botao');
const cardapioOpcoes = document.querySelectorAll('.cardapio-opcoes');

listaSelecao.forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();

        const cartaoAberto = document.querySelector('.aberto');
        cartaoAberto.classList.remove('aberto');

        const idCartaoSelecionado = botao.attributes.id.value;

        const idDoCartaoParaAbrir = 'carousel-' + idCartaoSelecionado;

        const cartaoParaAbrir = document.getElementById(idDoCartaoParaAbrir);
        cartaoParaAbrir.classList.add('aberto');

        const lancheAtivoNasOpces = document.querySelectorAll('.ativo');
        lancheAtivoNasOpces.classList.remove('ativo');

        const lancheSelecionadoNasOpcoes = document.getElementById(idCartaoSelecionado);
        lancheSelecionadoNasOpcoes.classList.add('ativo');
    })
})