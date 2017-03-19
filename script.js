var canvas = document.getElementById("backgroundCanvas");
var context = canvas.getContext("2d");

var keys = []

var Coordinates = {
    
};

var world = { 
    width: 1000,
    height: 700,
    Gravity: 2 
};

var player = {
    x: 10,
    y: 70,
    width: 75,
    height: 180,
    speed: 5,
    Jump: 5

};

function init(){
   Animloop();
   console.log(player.x);
}

function update(){
   player.x++;
}

function render(){
   context.fillRect(player.x, player.y, player.width, player.height);
   //context.clearRect(0, 0, world.width, world.height);
   //context.fillRect(player.x, player.y, player.width, player.height);
 
}

function Animloop(){
   requestAnimationFrame(function(){
       Animloop();
       render();
   });
   
}

init();

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
  function( callback ){
   window.setTimeout(callback, 1000 / 60);
};

})();

setInterval(function(){ update(); }, 1000/1000);
