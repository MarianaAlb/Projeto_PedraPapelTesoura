function mostrarSecao(id) {
  const secoes = document.querySelectorAll("section");

  secoes.forEach((secao) => {
    secao.style.display = "none";
  });

  const secaoAtiva = document.getElementById(id);
  if (secaoAtiva) {
    secaoAtiva.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarSecao("inicio");
});

function escolhaComputador() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  return opcoes[indiceAleatorio];
}

function escolhaUsuario() {
  const radios = document.querySelectorAll('input[name="jogar"]');
  let escolhido = "";
  radios.forEach((radio) => {
      if (radio.checked) {
          escolhido = radio.value;
      }
  });
  return escolhido;
}

let vitorias = 0;
let derrotas = 0;
let empates = 0;

function adivinhar() {
  const escolhaJogador = escolhaUsuario();
  if (!escolhaJogador) {
      alert("Por favor, escolha uma opção antes de jogar!");
      return;
  }

  const escolhaPC = escolhaComputador();
  let resultado = "";

  if (
      (escolhaJogador === "pedra" && escolhaPC === "tesoura") ||
      (escolhaJogador === "tesoura" && escolhaPC === "papel") ||
      (escolhaJogador === "papel" && escolhaPC === "pedra")
  ) {
      resultado = "Parabéns, você ganhou!";
      vitorias++;
  } else if (escolhaJogador === escolhaPC) {
      resultado = "Empatamos!!! hihihi...";
      empates++;
  } else {
      resultado = "Que pena, você perdeu :(";
      derrotas++;
  }

  const resultadosJogo = document.getElementById("resultados-jogo");
  resultadosJogo.textContent = resultado;

  document.getElementById("vitorias").textContent = vitorias;
  document.getElementById("derrotas").textContent = derrotas;
  document.getElementById("tentativas").textContent = vitorias + derrotas + empates;
}

function resetar() {
  document.getElementById("vitorias").textContent = "";
  document.getElementById("derrotas").textContent = "";
  document.getElementById("tentativas").textContent = "";
}