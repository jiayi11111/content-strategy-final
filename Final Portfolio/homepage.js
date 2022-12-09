// let paint = document.getElementById('paint');
// paint.addEventListener("onmouseenter", changetext);
// function changetext() {
//   document.getElementById("atext").innerHTML = "Painting";
// }     
// paint.addEventListener("onmouseleave", changeback);
// function changeback() {
//   document.getElementById("atext").innerHTML = "Project";
// }     


var audio = document.getElementById("sound");
var performer=document.getElementById("per");

performer.addEventListener( "mouseenter", function(){
  audio.play();
 audio.volume = 0.2;
})

performer.addEventListener( "mouseleave", function(){
  audio.pause();
})



toggle = document.querySelectorAll(".toggle")[0];
    console.log(toggle);
    nav = document.querySelectorAll("nav")[0];
    console.log(nav);
    toggle_open_text = 'Menu';
    toggle_close_text = 'Close';
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        
      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
let project=document.getElementById('projectbackground');
let blue=document.getElementById('blue');

let loading=document.getElementById('loading');
let container=document.getElementById('container');
  // document.body.style.backgroundColor = 'white';
// document.body.style.backgroundImage="linear-gradient(to right, #bdc3c7, #2c3e50)"
document.body.style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.2623643207282913) 35%, rgba(186,186,186,1) 100%)";
//change the scale of blue
blue.style.transform="scale(0.7,0.7)";
 blue.style.transition="all 1s ease-in-out";
 //change the x position of blue
  blue.style.left="30px";
  blue.style.transition="all 1s ease-in-out";

  //change the y position of blue
  blue.style.top="30px";
  blue.style.transition="all 1s ease-in-out";

 

   loading.style.transform="scale(0.7,0.7)";
  // loading.style.transition="all 1s ease-in-out";
  // loading.style.right="25px";
  // loading.style.transition="all 1s ease-in-out";
  // loading.style.top="-300px";
  // loading.style.transition="all 1s ease-in-out";

   container.style.transform="scale(0.7,0.7)";
  // container.style.transition="all 1s ease-in-out";
  // container.style.left="-20px";
  // container.style.transition="all 1s ease-in-out";
  // //change container down to 30px  to button

  // container.style.top="100px";
  // container.style.transition="all 1s ease-in-out";



;}
  )
       
      } else {
        toggle.innerHTML = toggle_open_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.background = 'black';
  blue.style.transform="scale(1,1)";
  blue.style.transition="all 1s ease-in-out";
  blue.style.left="0px";
  blue.style.transition="all 1s ease-in-out";
blue.style.top="0px";
blue.style.transition="all 1s ease-in-out";
  
 
  // blue.style.transition="all 1s ease-in-out";
   loading.style.transform="scale(1,1)";
  loading.style.transition="all 1s ease-in-out";
  // loading.style.right="0px";
  // loading.style.transition="all 1s ease-in-out";
  // loading.style.top="0px";
  // loading.style.transition="all 1s ease-in-out";
 container.style.transform="scale(1,1)";
 container.style.transition="all 1s ease-in-out";
  // container.style.left="0px";
  // container.style.transition="all 1s ease-in-out";
  // container.style.top="0px";
  // container.style.transition="all 1s ease-in-out";

}
  )
       
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);



    const CANVAS = document.getElementById('canvas');
 const CTX = CANVAS.getContext('2d');

const DEBUG = false;
const FPS = 30;
const BALL_RADIUS =11;
const INIT_BALL_COUNT = 1;
const MAGIC_NUM = 4;
const LIFETIME = 1000 * 15;
let balls = [];

class Ball {
  constructor(x, y) {
    this.radius = BALL_RADIUS;
    this.x = x || random_num(0 + this.radius, CANVAS.width - this.radius);
    this.y = y || random_num(0 + this.radius, CANVAS.height - this.radius);
    this.velocity_x = random_num(-1, 15);
    this.velocity_y = random_num(-1, 10);
    this.gravity = Math.max(Math.random(), .5);
    this.friction = Math.max(Math.random(20), .5);
    this.create_time = Date.now();
    this.color_hex = '#' + [...Array(6)].map(() => random_num(0, 16).toString(16)).join('');
    this.opacity = 220;
    this.fading = false;
    this.fade_interval_id;
    if (random_num(-1, 1)) {
      this.velocity_x = ~this.velocity_x+1 ;
    }
    if (random_num(-1, 1)) {
      this.velocity_y = ~this.velocity_y+1 ;
    }
  }
}

function init() {
  CANVAS.style.position = 'absolute';
  CANVAS.style.top = 0;
  CANVAS.style.left = 0;

  CANVAS.addEventListener('mouseover', hover_handler);
  CANVAS.addEventListener('mousemove', move_handler);
  CANVAS.addEventListener('click', click_handler);
  window.addEventListener('resize', draw_canvas);

  for (let i = 0; i < INIT_BALL_COUNT; i++) {
    balls.push(new Ball());
  }

  setInterval(draw_canvas, 1000 / FPS);
}

function draw_canvas() {
  clear_canvas();
  set_canvas_size();
  for (let i = 0; i < balls.length; i++) {
    draw_ball(balls[i])
    move_ball(balls[i])
  }
}

function clear_canvas() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function set_canvas_size() {
  CANVAS.height = window.innerHeight;
  CANVAS.width = window.innerWidth;
}

function draw_ball(ball) {
    // let radius= random(5,20);
  CTX.beginPath();
  CTX.fillStyle = ball.color_hex + ball.opacity.toString(16);
  CTX.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  CTX.fill();

  if (DEBUG) draw_ball_text(ball);
}

function draw_ball_text(ball) {
  let x = Math.round(ball.x);
  let y = Math.round(ball.y);
  let vx = Math.round(ball.velocity_x);
  let vy = Math.round(ball.velocity_y);

  let text = `x: ${x}, y: ${y}, vx: ${vx}, vy: ${vy}`;

  CTX.font = '16px Arial';
  CTX.fillText(text, ball.x + ball.radius + 5, ball.y);

  CTX.beginPath();
  CTX.moveTo(ball.x - ball.radius, ball.y + ball.radius);
  CTX.lineTo(ball.x + ball.radius, ball.y + ball.radius);
  CTX.stroke();
}

function move_ball(ball) {
  if (ball.y + ball.radius >= CANVAS.height) {
    if (ball.velocity_y > 0) {
      ball.velocity_y = (~ball.velocity_y + 1);
    }
    ball.velocity_y = ball.velocity_y * ball.gravity;
    ball.velocity_x = ball.velocity_x * ball.friction;
  }
  ball.y += ball.velocity_y;
  if (ball.y + ball.radius < CANVAS.height - MAGIC_NUM) {
    ball.velocity_y += 1;
  }

  if (ball.x + ball.radius >= CANVAS.width || ball.x - ball.radius <= 0) {
    ball.velocity_x = ~ball.velocity_x + 1;
    ball.velocity_x = ball.velocity_x * ball.friction;
  }
  ball.x += ball.velocity_x;

  if (ball.fading) {
    return;
  }
  if (
    Math.floor(ball.velocity_x) === 0 &&
    Math.floor(ball.velocity_y) === 0 &&
    ball.y + ball.radius > CANVAS.height - MAGIC_NUM
  ) {
    fade_ball(ball);
  } else {
    if (Date.now() - ball.create_time > LIFETIME) {
      fade_ball(ball);
    }
  }
}

function fade_ball(ball) {
  ball.fading = true;
  if (ball.fade_interval_id === undefined) {
    ball.fade_interval_id = setInterval(() => {
      fade_ball(ball)
    }, 1);
  }
  ball.opacity -= 2;
  if (ball.opacity <= 4) {
    clearInterval(ball.fade_interval_id);
    delete_ball(ball);
  }
}

function delete_ball(ball) {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i] === ball) {
      balls.splice(i, 1);
      break;
    }
  }
  draw_canvas();
}

function random_num(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function hover_handler(mouse) {
  balls.push(new Ball(mouse.x, mouse.y));

  
//   balls.push(new Ball(Pmouse.x, Pmouse.y));
}

function click_handler(mouse) {
    balls.push(new Ball(mouse.x, mouse.y));
  //   balls.push(new Ball(Pmouse.x, Pmouse.y));
  }

  function move_handler(mouse) {
    // let x=random(20,600);
    // let y =random(20,600);
    balls.push(new Ball(mouse.x, mouse.y));
  //   balls.push(new Ball(Pmouse.x, Pmouse.y));
  }

init();

// let loading = document.querySelector(".loading");
// let letters = loading.textContent.split("");
//  loading.textContent = "";
// letters.forEach((letter, i) => {
//   let span = document.createElement("span");
//    span.textContent = letter;
//    span.style.animationDelay = `${i / 30}s`;
//    loading.append(span);
// });
