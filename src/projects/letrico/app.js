// const { words } = require("./words.json");
import { words } from "./words.json";

// LETRICO COLORS GENERATOR
for (let i = 1; i <= 7; i++) {
  switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
      document.querySelector(`.let-${i}`).style.color = "green";
      break;
    case 2:
      document.querySelector(`.let-${i}`).style.color = "rgb(217, 183, 7)";
      break;
    case 3:
      document.querySelector(`.let-${i}`).style.color = "red";
      break;
    default:
      break;
  }
}

// API para gerar palavras aleatórias
const makeRandomWord = async () => {
  try {
    let res = await fetch("https://api.dicionario-aberto.net/random");
    let data = await res.json();

    while (data.word.length !== 5) {
      res = await fetch("https://api.dicionario-aberto.net/random");
      data = await res.json();
    }

    console.log("Palavra aleatória: ", data.word);
  } catch (e) {
    console.log("error: ", e);
  }
};

const keyword = words[Math.floor(Math.random() * words.length)]; // PALAVRA-CHAVE SORTEADA
// const form = document.querySelector("form");
// const chute = document.getElementById("chute");
// const chutar = document.getElementById("chutar"); // botão de submit do chute

let guess = [],
  wordCount = 0;

// form.addEventListener("submit", (e) => submitHandler(e, chute.value));

export function submitHandler(e) {
  e.preventDefault();

  const letras = ["A", "B", "C", "D", "E"];

  let chuteValue = e.target.elements.chute.value.toLowerCase();

  let msg;
  // if there's a message
  const message = document.getElementById("message");
  if (message.children.length > 0) {
    message.removeChild(document.querySelector("p"));
  }

  // LÓGICA PARA VERIFICAÇÃO DE PALAVRA
  if (
    wordCount != 7 &&
    (chuteValue.length != 5 || words.includes(chuteValue) === false)
  ) {
    if (chuteValue.length != 5) {
      console.log("Chute uma palavra de 5 letras");

      msg = document.createElement("p");
      msg.innerText = "Chute uma palavra de 5 letras!";
    } else if (words.includes(chuteValue) === false) {
      console.log("Palavra inválida! Tente outra palavra!");

      msg = document.createElement("p");
      msg.innerText = "Palavra inválida! Tente outra palavra!";
    }
    if (!chuteValue) {
      console.log("Insira uma palavra para chutar!");

      msg = document.createElement("p");
      msg.innerText = "Insira uma palavra para chutar!";
    }
  } else if (wordCount < 6) {
    wordCount++;
    guess.push(chuteValue);
    console.log("Seus chutes: ", guess);
  }

  if (chuteValue != "") chute.value = ""; // chuteValue não precisa ser redefinido

  switch (wordCount) {
    case 1:
      for (let i = 0; i < 5; i++) {
        // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - PRIMEIRA PALAVRA/TENTATIVA
        document.querySelector(`#first${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();

        // para 'marcar' a próxima tentativa
        document
          .querySelector(`#second${letras[i]}`)
          .classList.add("btn", "btn-light", "border-dark");
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      // Nesse caso, verifica se a palavra-chave (keyword) contém a primeira letra ([0]) do último elemento do array guess (guess[length-1], no caso, o último chute)
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`first${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`first${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`first${letras[i]}`).style.background = "red";
        }
      }
      break;

    case 2:
      // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - SEGUNDA PALAVRA/TENTATIVA
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#second${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();

        document
          .querySelector(`#third${letras[i]}`)
          .classList.add("btn", "btn-light", "border-dark");
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`second${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`second${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`second${letras[i]}`).style.background =
            "red";
        }
      }
      break;

    case 3:
      // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - TERCEIRA PALAVRA/TENTATIVA
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#third${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();

        document
          .querySelector(`#fourth${letras[i]}`)
          .classList.add("btn", "btn-light", "border-dark");
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`third${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`third${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`third${letras[i]}`).style.background = "red";
        }
      }
      break;

    case 4:
      // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - QUARTA PALAVRA/TENTATIVA
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#fourth${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();

        document
          .querySelector(`#fifth${letras[i]}`)
          .classList.add("btn", "btn-light", "border-dark");
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`fourth${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`fourth${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`fourth${letras[i]}`).style.background =
            "red";
        }
      }
      break;

    case 5:
      // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - QUINTA PALAVRA/TENTATIVA
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#fifth${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();

        document
          .querySelector(`#sixth${letras[i]}`)
          .classList.add("btn", "btn-light", "border-dark");
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`fifth${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`fifth${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`fifth${letras[i]}`).style.background = "red";
        }
      }
      break;

    case 6:
      // PARA ADICIONAR VISUALMENTE A PALAVRA INSERIDA - SEXTA PALAVRA/TENTATIVA
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#sixth${letras[i]}`).textContent =
          guess[guess.length - 1][i].toUpperCase();
      }

      // LÓGICA PARA A VERIFICAÇÃO DAS LETRAS INSERIDAS
      for (let i = 0; i < 5; i++) {
        if (keyword.includes(guess[guess.length - 1][i]) == true) {
          if (keyword[i] == guess[guess.length - 1][i]) {
            document.getElementById(`sixth${letras[i]}`).style.background =
              "green";
          } else {
            document.getElementById(`sixth${letras[i]}`).style.background =
              "yellow";
          }
        } else {
          document.getElementById(`sixth${letras[i]}`).style.background = "red";
        }
      }

      // CASO NENHUMA DAS TENTATIVAS SEJAM CORRETAS
      if (guess[guess.length - 1] != keyword) {
        wordCount++;
        console.log("Suas tentativas acabaram :(");
        console.log("Palavra correta era: ", keyword);

        msg = document.createElement("p");
        msg.innerText = `Suas tentativas acabaram! A palavra correta era: ${keyword}`;

        chute.disabled = "true";
        chutar.disabled = "true";
      }

      break;
  }

  // CASO A TENTATIVA ESTEJA CORRETA
  if (guess[guess.length - 1] == keyword) {
    console.log("Parabéns, vc ganhou!");

    msg = document.createElement("p");
    msg.innerText = "Parabéns, você ganhou!";

    chute.disabled = "true";
    chutar.disabled = "true";
    guess = [];
    wordCount = 7;
  }

  if (msg) message.appendChild(msg);
}
