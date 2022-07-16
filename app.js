//kodu aldığım adres https://github.com/learnmux/Space-Shooter-Game-Using-Javascript
// engellere deydiğinde oyunun bitmesini istedim fakat
//oyundaki engellerin koordinatları ile uçağın koordinatlarını bir türlü aynı kareye getiremedim.
// üstelik hepsini inte parse ettiğim halde. Bende oyunun kuralını 50 puan olunca bitirmek olarak değiştirdim.

var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {//klavyeden basılan tuşları okuyor  ve hangi tuş basıldıysa buna göre hareket sağlıyor
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
 
  else if (e.key == "ArrowRight" && left <= 460) {
    jet.style.left = left + 10 + "px";
  }



  
});



var generaterocks = setInterval(() => {//yukarıdan akacak olan engelleri rastgele olarak atıyor.
  var rock = document.createElement("div");
  rock.classList.add("rocks");
 
  //engellerin 0 ila 450 piksel arasında üretiyor
  rock.style.left = Math.floor(Math.random() * 450) + "px";

  board.appendChild(rock);
}, 1000);

var generatebullets = setInterval(() => {//jesse ve walter için ayrı fonksiyonlar kullandım
  var bullet = document.createElement("div");
  bullet.classList.add("bullets");
 
  //engellerin 0 ila 450 piksel arasında üretiyor
  bullet.style.left = Math.floor(Math.random() * 450) + "px";

  board.appendChild(bullet);
}, 1000);


var moverocks = setInterval(() => {//setinterval milisaniye cinsinden sürekli olarak engelleri hareket ettiriyor.
  var rocks = document.getElementsByClassName("rocks");
  

  if (rocks!= undefined ) {
    for (var i = 0; i < rocks.length; i++) {
     
      var rock = rocks[i]; 
  
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );
   
      //475 => boardheight - rockheight + 25
      if (rocktop >= 475) {
       
      //Scoreboard
      document.getElementById("points").innerHTML =
      parseInt(document.getElementById("points").innerHTML) + 1;
         
         rock.parentElement.removeChild(rock);
        
      }

      if(document.getElementById("points").innerHTML >=50){

        alert("Game Over");
      }
      
    
        rock.style.top = rocktop + 25 + "px";
    }
  }
}, 450);


var movebullets = setInterval(() => {//setinterval milisaniye cinsinden sürekli olarak engelleri aşağı doğru hareket ettriyor.
  var bullets = document.getElementsByClassName("bullets");

  if (bullets!= undefined) {
    for (var i = 0; i < bullets.length; i++) {
    
      
      var bullet= bullets[i]
   

      var bullettop = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("top")
      );
      if (bullettop >= 475) {
       
        //Scoreboard
        document.getElementById("points").innerHTML =
        parseInt(document.getElementById("points").innerHTML) + 5;
       
          bullet.parentElement.removeChild(bullet);
        }
        
      if(document.getElementById("points").innerHTML >=50){//50 puan olmuşsa oyunu bitiriyor

          alert("Game Over");
        }
        bullet.style.top = bullettop + 25 + "px";
    }
  }
}, 450);









////////////////////


