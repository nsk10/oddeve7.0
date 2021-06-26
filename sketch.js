var bg;
var c1,c2;
var bimg,yimg;
var start,startimg;
var nos=[],noimg;
var logo;
var form,game;
var name,input;
var gamestate = "start";
var pn,cn,pt=0,ct=0;
var t1,t2;

function preload(){
  bimg = loadImage ("img/bc.png");
  yimg = loadImage ("img/yc.png");
  startimg = loadImage ("img/start.png");
  bg = loadImage ("img/cs.png");
  noimg = loadImage ("img/no..png")
  logo = loadImage ("img/7.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form();
  game = new Game();

}

function draw() {
  background(bg);  

  if(gamestate === "start"){
    game.start();
  }

  if(gamestate === "play"){
     game.play();
  }
  if(gamestate === "end"){
    game.end();
 }

}
