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


const controls = document.querySelectorAll(".control");
const xSalada = document.querySelectorAll("#cartao-x-salada");
const xBacon = document.querySelectorAll("#cartao-x-bacon");
const xFrango = document.querySelectorAll("#cartao-x-frango");
const xTudo = document.querySelectorAll("#cartao-x-tudo");
const maxXSalada = xSalada.length;
const maxBacon = xBacon.length;
const maxFrango = xFrango.length;
const maxTudo = xTudo.length;
let currentItem = 0;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    const idDoCardPrincipal = document.querySelector(".current-item");
    const idValueDoCardASerExibido = idDoCardPrincipal.attributes.id.value;

    if (idValueDoCardASerExibido === "cartao-x-salada") {
      //Para o carrossel do x-salada
      if (currentItem >= maxXSalada) {
        currentItem = 0;
      }
    
      if (currentItem < 0) {
        currentItem = 1;
      }   
    }

    if (idValueDoCardASerExibido === "cartao-x-bacon") {
      //Para o carrossel do x-bacon
      if (currentItem >= maxBacon) {
        currentItem = 0;
      }
    
      if (currentItem < 0) {
        currentItem = 1;
      }   
    }

    if (idValueDoCardASerExibido === "cartao-x-frango") {
      //Para o carrossel do x-frango
      if (currentItem >= maxFrango) {
        currentItem = 0;
      }
    
      if (currentItem < 0) {
        currentItem = 1;
      }   
    }

    if (idValueDoCardASerExibido === "cartao-x-tudo") {
      //Para o carrossel do x-tudo
      if (currentItem >= maxTudo) {
        currentItem = 0;
      }
    
      if (currentItem < 0) {
        currentItem = 1;
      }   
    }


    //Para rolar entre um item e outro do carrossel do x-salada
    xSalada.forEach((item) => item.classList.remove("current-item"));

    xSalada[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    xSalada[currentItem].classList.add("current-item");

    
    //Para rolar entre um item e outro do carrossel do x-bacon
    xBacon.forEach((item) => item.classList.remove("current-item"));

    xBacon[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    xBacon[currentItem].classList.add("current-item");


    //Para rolar entre um item e outro do carrossel do x-frango
    xFrango.forEach((item) => item.classList.remove("current-item"));

    xFrango[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    xFrango[currentItem].classList.add("current-item");


    //Para rolar entre um item e outro do carrossel do x-tudo
    xTudo.forEach((item) => item.classList.remove("current-item"));

    xTudo[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    xTudo[currentItem].classList.add("current-item");

  });
});