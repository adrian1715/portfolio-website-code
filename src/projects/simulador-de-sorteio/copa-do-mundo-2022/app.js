var ul = document.querySelector("ul");
const grupos = ["A", "B", "C", "D", "E", "F", "G", "H"];

// PARA CRIAR O PARÁGRAFO COM O NOME DOS GRUPOS
for (let i = 0; i < 8; i++) {
  const grupo = document.createElement("p");
  const bold = document.createElement("b");
  ul = document.querySelector(`#grupo-${grupos[i]}`);

  bold.innerText = `Grupo ${grupos[i]}`;

  grupo.append(bold);
  ul.prepend(grupo); // .prepend adiciona o elemento ao topo da tag-mãe

  grupo.style.listStyle = "none";
  grupo.style.marginTop = "10px";
  grupo.classList.add("mb-2");
}

const sorteioTime1 = document.querySelector("#time-copa");
const sorteioTudo1 = document.querySelector("#tudo-copa");
const limpar = document.querySelector("#limpar");

var num,
  num2,
  a = 0;
var repetidos = [];

const pote1 = [],
  poteCopy1 = [];
const pote2 = [],
  poteCopy2 = [];
const pote3 = [],
  poteCopy3 = [];
const pote4 = [],
  poteCopy4 = [];

const repetidos2 = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
};

// TRANSFERINDO AS LIS PARA AS VARIÁVEIS POTE (fazendo uma cópia dos times para transferir aos grupos)
for (let j = 0; j < 8; j++) {
  pote1.push(document.querySelector(`#a1${grupos[j]}`));
  poteCopy1[j] = pote1[j].cloneNode(true); // copia os lis dos times na variável pote para a variável poteCopy (para que os times sorteados não sejam removidos de suas listas originais (potes ul) )
}
for (let j = 0; j < 8; j++) {
  pote2.push(document.querySelector(`#b2${grupos[j]}`));
  poteCopy2[j] = pote2[j].cloneNode(true);
}
for (let j = 0; j < 8; j++) {
  pote3.push(document.querySelector(`#c3${grupos[j]}`));
  poteCopy3[j] = pote3[j].cloneNode(true);
}
for (let j = 0; j < 8; j++) {
  pote4.push(document.querySelector(`#d4${grupos[j]}`));
  poteCopy4[j] = pote4[j].cloneNode(true);
}

// PARA EDITAR OS LIS DOS TIMES APÓS SEREM SORTEADOS;
for (let i = 0; i < poteCopy1.length; i++) {
  poteCopy1[i].style.listStyle = "none"; // li
  poteCopy1[i].children[0].style.height = "25px";
  poteCopy1[i].children[1].style.display = "inline-block"; // span
}
for (let i = 0; i < poteCopy2.length; i++) {
  poteCopy2[i].style.listStyle = "none";
  poteCopy2[i].style.marginTop = "5px";
  poteCopy2[i].children[0].style.height = "25px";
  poteCopy2[i].children[1].style.display = "inline-block";
}
for (let i = 0; i < poteCopy3.length; i++) {
  poteCopy3[i].style.listStyle = "none";
  poteCopy3[i].style.marginTop = "5px";
  poteCopy3[i].children[0].style.height = "25px";
  poteCopy3[i].children[1].style.display = "inline-block";
}
for (let i = 0; i < poteCopy4.length; i++) {
  poteCopy4[i].style.listStyle = "none";
  poteCopy4[i].style.marginTop = "5px";
  poteCopy4[i].children[0].style.height = "25px";
  poteCopy4[i].children[1].style.display = "inline-block";
}

// QATAR cabeça de chave grupo A
document.querySelector(".A1").replaceWith(poteCopy1[0]);
document.getElementById("grupo-A").classList.add("asia");
poteCopy1[0].children[1].children[0].innerText = "";
for (let i = 0; i < 3; i++) {
  const catarBandeira = poteCopy1[0].children[0].cloneNode(true);
  catarBandeira.style.marginLeft = "5px";
  document.getElementsByClassName("A1")[0].replaceWith(catarBandeira);
}

function sorteiaTime1() {
  if (a < 32) a++;

  // POTE 1
  if (a < 8) {
    // sorteia o time do pote atual
    num = Math.floor(Math.random() * 7 + 2);
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 7 + 2);
    }

    // para adicionar o time sorteado
    document.querySelector(`.${grupos[a]}1`).replaceWith(poteCopy1[num - 1]);

    // para adicionar a bandeira do time sorteado na tabela do grupo
    for (let i = 0; i < 3; i++) {
      const novaBandeira = poteCopy1[num - 1].children[0].cloneNode(true);
      novaBandeira.style.marginLeft = "5px";
      document
        .getElementsByClassName(`${grupos[a]}1`)[0]
        .replaceWith(novaBandeira);
    }

    // para adicionar o continente do time sorteado ao grupo
    document
      .getElementById(`grupo-${grupos[a]}`)
      .classList.add(poteCopy1[num - 1].classList[0]);

    // para o time sorteado não se repetir
    repetidos.push(num);
  }

  // POTE 2
  if (a > 7 && a < 16) {
    // para sortear a posição dos times sorteados em seus respectivos grupos
    num2 = Math.floor(Math.random() * 3 + 2);
    switch (a) {
      case 8: // GRUPO A
        repetidos = []; // limpa os times repetidos do pote anterior

        while (repetidos2.A.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.A.push(num2);
        break;
      case 9: // GRUPO B
        while (repetidos2.B.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.B.push(num2);
        break;
      case 10: // GRUPO C
        while (repetidos2.C.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.C.push(num2);
        break;
      case 11: // GRUPO D
        while (repetidos2.D.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.D.push(num2);
        break;
      case 12: // GRUPO E
        while (repetidos2.E.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.E.push(num2);
        break;
      case 13: // GRUPO F
        while (repetidos2.F.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.F.push(num2);
        break;
      case 14: // GRUPO G
        while (repetidos2.G.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.G.push(num2);
        break;
      case 15: // GRUPO H
        while (repetidos2.H.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.H.push(num2);
        break;
    }

    num = Math.floor(Math.random() * 8 + 1);
    // verificação de sorteios repetidos
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`.${grupos[a - 8]}${num2}`)
      .replaceWith(poteCopy2[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 8]}`)
      .classList.add(poteCopy2[num - 1].classList[0]);

    for (let i = 0; i < 3; i++) {
      const novaBandeira = poteCopy2[num - 1].children[0].cloneNode(true);

      if (poteCopy2[num - 1].id === "b2F") {
        // bandeira quadrada da suíça
        novaBandeira.style.marginLeft = "10px";
      } else {
        novaBandeira.style.marginLeft = "5px";
      }

      document
        .getElementsByClassName(`${grupos[a - 8]}${num2}`)[0]
        .replaceWith(novaBandeira);
    }

    repetidos.push(num);
  }

  // POTE 3
  if (a > 15 && a < 24) {
    // para sortear a posição dos times sorteados em seus respectivos grupos
    num2 = Math.floor(Math.random() * 3 + 2);
    switch (a) {
      case 16: // GRUPO A
        repetidos = []; // para limpar/zerar o armazenador de números repetidos sorteados

        while (repetidos2.A.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.A.push(num2);
        break;
      case 17: // GRUPO B
        while (repetidos2.B.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.B.push(num2);
        break;
      case 18: // GRUPO C
        while (repetidos2.C.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.C.push(num2);
        break;
      case 19: // GRUPO D
        while (repetidos2.D.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.D.push(num2);
        break;
      case 20: // GRUPO E
        while (repetidos2.E.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.E.push(num2);
        break;
      case 21: // GRUPO F
        while (repetidos2.F.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.F.push(num2);
        break;
      case 22: // GRUPO G
        while (repetidos2.G.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.G.push(num2);
        break;
      case 23: // GRUPO H
        while (repetidos2.H.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.H.push(num2);
        break;
    }

    num = Math.floor(Math.random() * 8 + 1);
    // verificação de sorteios repetidos
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`.${grupos[a - 16]}${num2}`)
      .replaceWith(poteCopy3[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 16]}`)
      .classList.add(poteCopy3[num - 1].classList[0]);

    for (let i = 0; i < 3; i++) {
      const novaBandeira = poteCopy3[num - 1].children[0].cloneNode(true);
      novaBandeira.style.marginLeft = "5px";
      document
        .getElementsByClassName(`${grupos[a - 16]}${num2}`)[0]
        .replaceWith(novaBandeira);
    }

    repetidos.push(num);
  }

  // POTE 4
  if (a > 23 && a < 32) {
    // para sortear a posição dos times sorteados em seus respectivos grupos
    num2 = Math.floor(Math.random() * 3 + 2);
    switch (a) {
      case 24: // GRUPO A
        repetidos = [];

        while (repetidos2.A.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.A.push(num2);
        break;
      case 25: // GRUPO B
        while (repetidos2.B.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.B.push(num2);
        break;
      case 26: // GRUPO C
        while (repetidos2.C.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.C.push(num2);
        break;
      case 27: // GRUPO D
        while (repetidos2.D.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.D.push(num2);
        break;
      case 28: // GRUPO E
        while (repetidos2.E.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.E.push(num2);
        break;
      case 29: // GRUPO F
        while (repetidos2.F.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.F.push(num2);
        break;
      case 30: // GRUPO G
        while (repetidos2.G.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.G.push(num2);
        break;
      case 31: // GRUPO H
        while (repetidos2.H.includes(num2) === true) {
          num2 = Math.floor(Math.random() * 3 + 2);
        }
        repetidos2.H.push(num2);
        break;
    }

    num = Math.floor(Math.random() * 8 + 1);
    // verificação de sorteios repetidos
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`.${grupos[a - 24]}${num2}`)
      .replaceWith(poteCopy4[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 24]}`)
      .classList.add(poteCopy4[num - 1].classList[0]);

    for (let i = 0; i < 3; i++) {
      const novaBandeira = poteCopy4[num - 1].children[0].cloneNode(true);
      novaBandeira.style.marginLeft = "5px";
      document
        .getElementsByClassName(`${grupos[a - 24]}${num2}`)[0]
        .replaceWith(novaBandeira);
    }

    repetidos.push(num);
  }

  // ao terminar o sorteio
  if (a === 31) {
    console.log("Sorteio finalizado!");
  }
}

sorteioTime1.addEventListener("click", sorteiaTime1);

sorteioTudo1.addEventListener("click", function sorteiaTudo1() {
  for (let i = 0; i < 31; i++) {
    sorteiaTime1();
  }
});

limpar.addEventListener("click", function limpar() {
  console.clear();

  a = 0;
  repetidos = [];
  repetidos2.A = [];
  repetidos2.B = [];
  repetidos2.C = [];
  repetidos2.D = [];
  repetidos2.E = [];
  repetidos2.F = [];
  repetidos2.G = [];
  repetidos2.H = [];

  for (let i = 0; i < 8; i++) {
    var gru = document.querySelector(`#grupo-${grupos[i]}`);

    if (gru.classList.contains("europa2")) gru.classList.remove("europa2");

    for (let j = 0; j < 4; j++) {
      gru.classList.remove(gru.children[1 + j].classList[0]);

      var newLi = document.createElement("li");
      newLi.setAttribute("class", `${grupos[i]}${j + 1}`);
      gru.children[1 + j].replaceWith(newLi);
    }

    // para limpar as bandeiras dos cabeças-de-chave
    for (let j = 1; j <= 5; j += 2) {
      var newSpan = document.createElement("span");
      newSpan.setAttribute("class", `${grupos[i]}1`);

      if (i === 0) break; // para não limpar a bandeira do catar (pois este nunca mudará de lugar)

      if (j === 5) {
        gru.children[5].children[j].children[1].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}1`;
      } else {
        gru.children[5].children[j].children[0].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}1`;
      }
    }

    // limpa bandeiras pote 2
    for (let j = 1; j <= 6; j += 2) {
      var newSpan = document.createElement("span");
      newSpan.setAttribute("class", `${grupos[i]}2`);

      if (j === 3) j = 4;

      if (j != 6) {
        gru.children[5].children[j].children[1].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}2`;
      } else {
        gru.children[5].children[j].children[0].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}2`;
      }
    }

    // limpa bandeiras pote 3
    for (let j = 2; j < 7; j++) {
      var newSpan = document.createElement("span");
      newSpan.setAttribute("class", `${grupos[i]}3`);

      if (j === 4) j = 6;

      if (j === 2) {
        gru.children[5].children[j].children[0].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}3`;
      } else {
        gru.children[5].children[j].children[1].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}3`;
      }
    }

    // limpa bandeiras pote 4
    for (let j = 2; j < 6; j++) {
      var newSpan = document.createElement("span");
      newSpan.setAttribute("class", `${grupos[i]}4`);

      if (j === 3) j = 4;

      if (j === 2) {
        gru.children[5].children[j].children[1].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}4`;
      } else {
        gru.children[5].children[j].children[0].replaceWith(newSpan);
        newSpan.innerText = `${grupos[i]}4`;
      }
    }
  }

  document.querySelector(".A1").replaceWith(poteCopy1[0]);
  document.querySelector("#grupo-A").classList.add("asia");
  poteCopy1[0].children[1].children[0].innerText = "";
});
