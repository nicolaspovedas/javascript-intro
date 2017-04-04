$(document).ready(function() {
	
  //vista
    function createDie() {
    	$('.dice').append('<div class="die">0</div>');
  	}
  	function showNum(die, value){
  		return $(die).text(value)
  	}

  	//modelo
  	function rand(){
  		return Math.floor((Math.random()*6)+1)
  	}

    }
//Controller
  	f
    unction rollDie() {
    	$('.die').each(function(k, die) {
      	var value = rand();
      	showNum(die, value)
      });
    $('#roller button.add').on('click', createDie);
  	$('#roller button.roll').on('click', rollDie);
})


