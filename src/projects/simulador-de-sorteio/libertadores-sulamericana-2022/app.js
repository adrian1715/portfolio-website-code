// LIBERTADORES
var ul = document.querySelector("ul");
var grupos = ["A", "B", "C", "D", "E", "F", "G", "H"];

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
}

const sorteioTime1 = document.querySelector("#time-liberta");
const sorteioTudo1 = document.querySelector("#tudo-liberta");
const limpar = document.querySelector("#limpar");

var num,
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

// GRUPOS: A-H (array 0-7)

// TRANSFERINDO AS LIS PARA AS VARIÁVEIS POTE
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

// palmeiras cabeça de chave grupo A
document.querySelector("#A1").replaceWith(poteCopy1[0]);
document.getElementById("grupo-A").classList.add(poteCopy1[0].classList[0]);
poteCopy1[0].children[1].children[0].innerText = "";

function sorteiaTime1() {
  a++;

  // POTE 1
  if (a < 8) {
    num = Math.floor(Math.random() * 7 + 2);

    // PARA EVITAR SORTEIO DE TIMES REPETIDOS
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 7 + 2);
    }

    // PARA ADICIONAR O TIME SORTEADO
    document.querySelector(`#${grupos[a]}1`).replaceWith(poteCopy1[num - 1]);

    // PARA ADICIONAR A CLASSE DO TIME SORTEADO À UL (GRUPO)
    document
      .getElementById(`grupo-${grupos[a]}`)
      .classList.add(poteCopy1[num - 1].classList[0]);

    repetidos.push(num);
  }

  // POTE 2
  if (a > 7 && a < 16) {
    num = Math.floor(Math.random() * 8 + 1);

    if (a === 8) repetidos = [];

    // verificação de sorteios repetidos
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#${grupos[a - 8]}2`)
      .replaceWith(poteCopy2[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 8]}`)
      .classList.add(poteCopy2[num - 1].classList[0]);

    repetidos.push(num);
  }

  // POTE 3
  if (a > 15 && a < 24) {
    num = Math.floor(Math.random() * 8 + 1);

    if (a === 16) repetidos = [];

    // verificação de sorteios repetidos
    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#${grupos[a - 16]}3`)
      .replaceWith(poteCopy3[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 16]}`)
      .classList.add(poteCopy3[num - 1].classList[0]);

    repetidos.push(num);
  }

  // POTE 4
  if (a > 23 && a < 32) {
    num = Math.floor(Math.random() * 8 + 1);

    if (a === 24) repetidos = [];

    while (repetidos.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#${grupos[a - 24]}4`)
      .replaceWith(poteCopy4[num - 1]);
    document
      .getElementById(`grupo-${grupos[a - 24]}`)
      .classList.add(poteCopy4[num - 1].classList[0]);

    repetidos.push(num);
  }
}

sorteioTime1.addEventListener("click", sorteiaTime1);

sorteioTudo1.addEventListener("click", function sorteiaTudo1() {
  for (let i = 0; i < 32; i++) {
    sorteiaTime1();
  }
});

limpar.addEventListener("click", function limpar() {
  console.clear();

  a = 0;
  repetidos = [];

  for (let i = 0; i < 8; i++) {
    var gru = document.querySelector(`#grupo-${grupos[i]}`);
    for (let j = 0; j < 4; j++) {
      gru.classList.remove(gru.children[1 + j].classList[0]);

      var newLi = document.createElement("li");
      newLi.setAttribute("id", `${grupos[i]}${j + 1}`);
      gru.children[1 + j].replaceWith(newLi);
    }
  }

  document.querySelector("#A1").replaceWith(poteCopy1[0]);
  document.getElementById("grupo-A").classList.add("Brasil");
  poteCopy1[0].children[1].children[0].innerText = "";
});

// SUL-AMERICANA
// para gerar os grupos de A a H
for (let i = 0; i < 8; i++) {
  const grupo = document.createElement("p");
  const bold = document.createElement("b");
  ul = document.querySelector(`#sula-grupo-${grupos[i]}`);

  bold.innerText = `Grupo ${grupos[i]}`;

  grupo.append(bold);
  ul.prepend(grupo); // .prepend adiciona o elemento ao topo da tag-mãe

  grupo.style.listStyle = "none";
  grupo.style.marginTop = "10px";
}

const sorteioTime2 = document.querySelector("#time-sula");
const sorteioTudo2 = document.querySelector("#tudo-sula");
const limpar2 = document.querySelector("#limpar-sula");

var b = 0;
var repetidos2 = [];

const sulaPote1 = [],
  sulaPoteCopy1 = [];
const sulaPote2 = [],
  sulaPoteCopy2 = [];
const sulaPote3 = [],
  sulaPoteCopy3 = [];
const sulaPote4 = [],
  sulaPoteCopy4 = [];

// GRUPOS: A-H (array 0-7)

// TRANSFERINDO AS LIS PARA AS VARIÁVEIS POTE
for (let j = 0; j < 8; j++) {
  sulaPote1.push(document.querySelector(`#sulaa1${grupos[j]}`));
  sulaPoteCopy1[j] = sulaPote1[j].cloneNode(true); // copia os lis dos times na variável sulaPote para a variável sulaPoteCopy (para que os times sorteados não sejam removidos de suas listas originais (sulaPotes ul) )
}
for (let j = 0; j < 8; j++) {
  sulaPote2.push(document.querySelector(`#sulab2${grupos[j]}`));
  sulaPoteCopy2[j] = sulaPote2[j].cloneNode(true);
}
for (let j = 0; j < 8; j++) {
  sulaPote3.push(document.querySelector(`#sulac3${grupos[j]}`));
  sulaPoteCopy3[j] = sulaPote3[j].cloneNode(true);
}
for (let j = 0; j < 8; j++) {
  sulaPote4.push(document.querySelector(`#sulad4${grupos[j]}`));
  sulaPoteCopy4[j] = sulaPote4[j].cloneNode(true);
}

// PARA EDITAR OS LIS DOS TIMES APÓS SEREM SORTEADOS;
for (let i = 0; i < sulaPoteCopy1.length; i++) {
  sulaPoteCopy1[i].style.listStyle = "none"; // li
  sulaPoteCopy1[i].children[0].style.height = "25px";
  sulaPoteCopy1[i].children[1].style.display = "inline-block"; // span
}
for (let i = 0; i < sulaPoteCopy2.length; i++) {
  sulaPoteCopy2[i].style.listStyle = "none";
  sulaPoteCopy2[i].style.marginTop = "5px";
  sulaPoteCopy2[i].children[0].style.height = "25px";
  sulaPoteCopy2[i].children[1].style.display = "inline-block";
}
for (let i = 0; i < sulaPoteCopy3.length; i++) {
  sulaPoteCopy3[i].style.listStyle = "none";
  sulaPoteCopy3[i].style.marginTop = "5px";
  sulaPoteCopy3[i].children[0].style.height = "25px";
  sulaPoteCopy3[i].children[1].style.display = "inline-block";
}
for (let i = 0; i < sulaPoteCopy4.length; i++) {
  sulaPoteCopy4[i].style.listStyle = "none";
  sulaPoteCopy4[i].style.marginTop = "5px";
  sulaPoteCopy4[i].children[0].style.height = "25px";
  sulaPoteCopy4[i].children[1].style.display = "inline-block";
}

function sorteiaTime2() {
  // POTE 1
  if (b < 8) {
    num = Math.floor(Math.random() * 8 + 1);

    // verificação de sorteios repetidos
    while (repetidos2.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#sula-${grupos[b]}1`)
      .replaceWith(sulaPoteCopy1[num - 1]);
    document
      .getElementById(`sula-grupo-${grupos[b]}`)
      .classList.add(sulaPoteCopy1[num - 1].classList[0]);

    repetidos2.push(num);
  }

  // POTE 2
  if (b > 7 && b < 16) {
    num = Math.floor(Math.random() * 8 + 1);

    if (b === 8) repetidos2 = [];

    // verificação de sorteios repetidos
    while (repetidos2.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#sula-${grupos[b - 8]}2`)
      .replaceWith(sulaPoteCopy2[num - 1]);
    document
      .getElementById(`sula-grupo-${grupos[b - 8]}`)
      .classList.add(sulaPoteCopy2[num - 1].classList[0]);

    repetidos2.push(num);
  }

  // POTE 3
  if (b > 15 && b < 24) {
    num = Math.floor(Math.random() * 8 + 1);

    if (b === 16) repetidos2 = [];

    // verificação de sorteios repetidos2
    while (repetidos2.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#sula-${grupos[b - 16]}3`)
      .replaceWith(sulaPoteCopy3[num - 1]);
    document
      .getElementById(`sula-grupo-${grupos[b - 16]}`)
      .classList.add(sulaPoteCopy3[num - 1].classList[0]);

    repetidos2.push(num);
  }

  // POTE 4
  if (b > 23 && b < 32) {
    num = Math.floor(Math.random() * 8 + 1);

    if (b === 24) repetidos2 = [];

    // verificação de sorteios repetidos2
    while (repetidos2.includes(num) === true) {
      num = Math.floor(Math.random() * 8 + 1);
    }

    document
      .querySelector(`#sula-${grupos[b - 24]}4`)
      .replaceWith(sulaPoteCopy4[num - 1]);
    document
      .getElementById(`sula-grupo-${grupos[b - 24]}`)
      .classList.add(sulaPoteCopy4[num - 1].classList[0]);

    repetidos2.push(num);
  }
  b++;
}

sorteioTime2.addEventListener("click", sorteiaTime2);

sorteioTudo2.addEventListener("click", function sorteiaTudo2() {
  for (let i = 0; i < 32; i++) {
    sorteiaTime2();
  }
});

limpar2.addEventListener("click", function limpar2() {
  b = 0;
  repetidos2 = [];

  for (let i = 0; i < 8; i++) {
    var gru = document.querySelector(`#sula-grupo-${grupos[i]}`);
    for (let j = 0; j < 4; j++) {
      gru.classList.remove(gru.children[1 + j].classList[0]);

      var newLi = document.createElement("li");
      newLi.setAttribute("id", `sula-${grupos[i]}${j + 1}`);
      gru.children[1 + j].replaceWith(newLi);
    }
  }
});
