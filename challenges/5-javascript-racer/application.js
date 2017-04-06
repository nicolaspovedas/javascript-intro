$(document).ready(function() {
  
  //Boton Start y Contador
  $("#start").on('click', function(event){
    number.innerHTML = 3
    countdown()
  })

  var update_countdown = function() {
    number.innerHTML -= 1;
  }

  var countdown = function() {
      setTimeout(update_countdown, 1000);
      setTimeout(update_countdown, 2000);
      setTimeout(update_countdown, 3000);
  }

  // Boton Restart
  $("#restart").on('click', function(event){
    number.innerHTML = 3
    window.location.reload()
  })


  var number = document.querySelector(".counter");
  var trackLength = 45
  var count1 = 0
  var count2 = 0
  
    $(document).on('keyup', function(event) {
  
        function pushForward(){
          var count = 0
              return function (player, count){
                $($(`#${player}_strip td`)[count]).removeClass("active");
                if (count < trackLength -1) {
                  $("#player1_strip").append("<td></td>")
                } else {
                  console.log(`El ${player} ha ganado`)
                }
                $($(`#${player}_strip td`)[count+1]).addClass("active");
                ++count
                return count
            }
        }

            //jugador 1
            if(event.keyCode == 81 && number.innerHTML == 0){
              count1 = pushForward("player1", count1)
              }

            //jugador 2
            if(event.keyCode == 80 && number.innerHTML == 0){
              count2 = pushForward("player2", count2)
            }
           })
        })
