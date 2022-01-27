var prompt = require("prompt-sync")();

let i = 0;

const nome = prompt("Insira seu nome: ");
console.log(
  `Olá, ${nome}! \n        Você está prestes a entrar em uma jornada mágica!`
);
console.log();
console.log(`Você é um simples humano, sem nenhuma habilidade especial, talento ou conhecimento, que vive em uma terra cheia de magos, dragões, animais mágicos e outras maravilhas.
A única coisa que você tem é um artefato que faz com que seus atributos físicos e técnicas de combate aumentem à medida que ele vai absorvendo magia ao redor dele.`);
console.log();
console.log(`Seu sonho sempre foi se tornar um mago e havia uma lenda de um Cálice Sagrado que continha água com poderes mágicos e quem bebesse dessa água,
poderia se tornar um mago ou se tornar um mais poderoso ainda.`);
console.log();
console.log(`Rumores rondavam toda a cidade sobre o Cálice estar sendo mantido em uma base orc. Assim como os seres humanos, existem orcs magos e guerreiros.
Portanto, para você realizar o seu sonho, você decidiu enfrentar os orcs e recuperar o Cálice Sagrado.`);
console.log();
console.log(`Responda 'sim' ou 'nao' para seguir a jornada: `);
console.log();
let resposta1 = prompt(
  "Você criou aliados durante a sua jornada para te ajudar a derrotar os orcs? "
);
while (resposta1 != "sim" && resposta1 != "nao") {
  console.log("Responda apenas sim ou nao!");
  resposta1 = prompt(
    "Você criou aliados durante a sua jornada para te ajudar a derrotar os orcs? "
  );
}
if (resposta1 == "sim") {
  i++;
}
console.log();
let resposta2 = prompt(
  "Você esteve em algumas batalhas para aumentar os atributos do seu artefato para melhorar suas habilidades? "
);
while (resposta2 != "sim" && resposta2 != "nao") {
  console.log("Responda apenas sim ou nao!");
  resposta2 = prompt(
    "Você esteve em algumas batalhas para aumentar os atributos do seu artefato para melhorar suas habilidades? "
  );
}
if (resposta2 == "sim") {
  i++;
}
console.log();
let resposta3 = prompt(
  "Você encontrou a base orc e identificou as armadilhas mágicas e físicas ao seu redor? "
);
while (resposta3 != "sim" && resposta3 != "nao") {
  console.log("Responda apenas sim ou nao!");
  resposta3 = prompt(
    "Você encontrou a base orc e identificou as armadilhas mágicas e físicas ao seu redor? "
  );
}
if (resposta3 == "sim") {
  i++;
}
console.log();
let resposta4 = prompt(
  "Você enfrentou os orcs com os seus aliados e com a ajuda do seu dispositivo de habilidades? "
);
while (resposta4 != "sim" && resposta4 != "nao") {
  console.log("Responda apenas sim ou nao!");
  resposta4 = prompt(
    "Você enfrentou os orcs com os seus aliados e com a ajuda do seu dispositivo de habilidades? "
  );
}
if (resposta4 == "sim") {
  i++;
}
console.log();
let resposta5 = prompt("Você achou o Cálice Sagrado? ");
while (resposta5 != "sim" && resposta5 != "nao") {
  console.log("Responda apenas sim ou nao!");
  resposta5 = prompt("Você achou o Cálice Sagrado? ");
}
if (resposta5 == "sim") {
  i++;
}
console.log();
console.log();
if (i == 0) {
  console.log("Você falha miseravelmente.");
}
if (i == 1 || i == 2) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
}
if (i == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
}
if (i == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
}
if (i == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}
