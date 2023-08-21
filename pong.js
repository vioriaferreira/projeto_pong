//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;





//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDosOponente = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound("trilha,mp3");
  raquetada = loadSond("raquetada,mp3");
  ponto = loadSond("ponto.mp3");
}
                   
     function setup() {
      createCanvas (600, 400);
    trilha.loop();
     }
    
     function draw() {
       background(0);
       mostraBolinha();
       movimentarBolinha();
       verificarColisãoBorda();
       mostrarRaquete(raquete, yRaquete);
       moviventarMinhasRaquete();
       //verificaçãoColisão();
       verificarColisãoRaquete(xRaquete, yRaquete);
       mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
       movimentaRaqueteOponente();
       verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
       incluiPlacar();
       marcarPonto();
}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0) {
    velocidadeYBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadYBolinha *= -1;
  }
}

function mostrarRaquete(x,y){
  rect(x, y, raqueteComprimento,
      raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete
}
