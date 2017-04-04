$(document).ready(function() {
  var count1 = 0
  var count2 = 0
  var trackLength = 45
  $(document).on('keyup', function(event) {
    
    //jugador 1
    if(event.keyCode == 81){
        $($("#player1_strip td")[count1]).removeClass("active");
        if (count1 < trackLength -1) {
          $("#player1_strip").append("<td></td>")
        } else {
          console.log("el jugador 1 ha ganado")
        }
        $($("#player1_strip td")[count1+1]).addClass("active");
        count1++

      }

    //jugador 2
    if(event.keyCode == 80){
        $($("#player2_strip td")[count2]).removeClass("active");
        if (count2 < trackLength -1) {
          $("#player2_strip").append("<td></td>")
        } else {
          console.log("el jugador 2 ha ganado")
        }
        $($("#player2_strip td")[count2+1]).addClass("active");
        count2++

    }
  })
})