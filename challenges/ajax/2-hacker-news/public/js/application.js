$(document).ready(function() {
  // Votar
  $('.vote-button').on('click', function(e){
      e.preventDefault();

     var url = this.href
    var button = this

     var request = $.ajax({
          method: "GET",
          url: url
      })
    request.done(function(response){
      $(button).parent().find('.points').html(response.votes)
      $(button).addClass("voted")
    })
  })
  // Publicar Post
  $('form').on('submit', function(event){
  	event.preventDefault()
  	var title = $(this).find('input[name="title"]').val()
  	var url = this.action
  	var data = $(this).serialize()

  	$.ajax({
  		method: 'POST',
  		url: url,
  		data: data 
  	}).done(function(response){
  		$('.post-container').append(response)
  	})
  })
//Delete Post
	$('.delete').on('click'), function(event){
		event.preventDefault()
		var url = this.href

		$.ajax({
  		method: 'DELETE',
  		url: url,
  	}).done(function(response){
  		console.log(response)
  	})
	}


});