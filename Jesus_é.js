let palavra;

function setup() {
  createCanvas(600, 600);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Jesus é o caminho", "Jesus é a verdade", "Jesus é a vida"];
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length

  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 200);
}
