let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h3", "Recomendador de Série");
  createSpan("Sua idade:");
  campoIdade = createInput("");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("#9AC9DE0A");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 100, 15));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "High School Musical: A Série: O Musical";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia ) {
          return "Heartstopper";          
        } else{
         return "Cobra Kai";
        }
      } else {
        if (gostaDeFantasia) {
          return "Ninguém Mandou";
        } else {
          return "Naruto";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Bluey";
    } else {
      return "Mecanimais ";
    }
  }
}
