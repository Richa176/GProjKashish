const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,
  world,
  backgroundImg,
  waterSound,
  pirateLaughSound,
  backgroundMusic,
  cannonExplosion;
var canvas, angle, tower, ground, cannon, boat;
var balls = [];
var boats = [];
var score = 0;
var boatAnimation = [];
var boatSpritedata, boatSpritesheet;

var brokenBoatAnimation = [];
var brokenBoatSpritedata, brokenBoatSpritesheet;

var waterSplashAnimation = [];
var waterSplashSpritedata, waterSplashSpritesheet;

var isGameOver = false;
var isLaughing = false;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();

 
}

function keyPressed() {
  
}

function showCannonBalls(ball, index) {
  
}



// function gameOver() {
//   swal(
//     {
//       title: `Game Over!!!`,
//       text: "Thanks for playing!!",
//       imageUrl:
//         "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
//       imageSize: "150x150",
//       confirmButtonText: "Play Again"
//     },
//     function(isConfirm) {
//       if (isConfirm) {
//         location.reload();
//       }
//     }
//   );
// }
