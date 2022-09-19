
function makecanvas() {
   //1. get object
   var c = document.getElementById("canvas1");
   var ctx = c.getContext("2d");
   //2. set parameter
   ctx.moveTo(0, 0);
   ctx.lineTo(200, 100);
   //3. make shape
   ctx.stroke();
}
function makeCircle() {
   //1. get object
   var c = document.getElementById("canvas2");
   var ctx = c.getContext("2d");
   //2. set param
   ctx.beginPath();
   ctx.arc(100,50,40,0,2*Math.PI);
   //3. make shape
   ctx.stroke();
}
function writeText() { 
   //1.get object
   var c = document.getElementById("canvas3");
   var ctx = c.getContext("2d");
   //2. set param
   ctx.font = "30px Arial";
   //3. draw shape
   ctx.fillText("I love HTML5.", 10, 50);
   ctx.strokeText("I love HTML5", 10,50);

}
function fillLinearGradient() {
   var c = document.getElementById("canvas4");
   var ctx = c.getContext("2d");
   // Create gradient
   var grd = ctx.createLinearGradient(0, 0, 200, 0);
   grd.addColorStop(0, "red");
   grd.addColorStop(.5, "white");
   grd.addColorStop(1, "red");

   // Fill with gradient
   ctx.fillStyle = grd;
   ctx.fillRect(0, 0, 200, 100);
}
function fillCircleGradient() {
   var c = document.getElementById("canvas5");
   var ctx = c.getContext("2d");
   // Create gradient
   var grd = ctx.createRadialGradient(75, 50, 5, 100, 60, 130);
   grd.addColorStop(0, "red");
   grd.addColorStop(1, "white");
   // Fill with gradient
   ctx.fillStyle = grd;
   ctx.fillRect(0, 0, 200, 100);
}

function fillImage() { 
   var c = document.getElementById("canvas6");
   var ctx = c.getContext("2d");
   var img = document.getElementById("img1");
   ctx.drawImage(img, 10, 10, 200,100);
}
function createShape() {
   var c = document.getElementById("canvas7");
   var ctx = c.getContext("2d");

   ctx.strokeStyle = "#ff0000";
   ctx.fillStyle = "#ff0000";
   ctx.lineWidth = 2;

   ctx.beginPath();
   ctx.moveTo(50, 20);
   ctx.lineTo(70, 40);
   ctx.lineTo(100, 40);
   ctx.lineTo(100, 80);
   ctx.lineTo(120, 80);
   ctx.lineTo(120, 20);
   ctx.lineTo(50, 20);
   ctx.stroke();
   ctx.fill();
}
function makeMultipleCircle() {
   var c = document.getElementById("canvas8");
   var ctx = c.getContext("2d");
   ctx.fillStyle = "blue";
   //first circle
   ctx.beginPath();
   ctx.arc(100, 10, 10, 0, 2 * Math.PI);
   ctx.fill();
   ctx.closePath();
   //second circle
   ctx.fillStyle= "red";
   ctx.beginPath();  
   ctx.arc(100, 35, 15, 0, 2 * Math.PI);
   ctx.fill();
   ctx.closePath();
   //thirdCircle
   ctx.fillStyle= "black";
   ctx.beginPath();  
   ctx.arc(100, 75, 25, 0, 2 * Math.PI);
   ctx.fill();
   ctx.closePath();
}
function fillAnimation() {
   var c = document.getElementById("canvas9");
   var ctx = c.getContext("2d");
   var posX = 0;
   var posY = 0;
   setInterval(function () {
      posX += 1;
      posY += 1;
      //fill canvas with black color
      ctx.fillStyle = "Black";
      ctx.fillRect(0, 0, c.width, c.height);
      //create circle
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(posX, 50, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      //second cicle
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(80, posY, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
       //third cicle
       ctx.fillStyle = "blue";
       ctx.beginPath();
       ctx.arc(120,posY-10, 10, 0, 2 * Math.PI);
       ctx.fill();
   }, 30)
}

function allowDrop(ev) {
   ev.preventDefault();
}

function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
}
//video tools



function playPause() { 
   var myVideo = document.getElementById("video1"); 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
   var myVideo = document.getElementById("video1"); 
    myVideo.width = 560; 
} 

function makeSmall() { 
   var myVideo = document.getElementById("video1"); 
    myVideo.width = 320; 
} 

function makeNormal() { 
   var myVideo = document.getElementById("video1"); 
    myVideo.width = 420; 
} 