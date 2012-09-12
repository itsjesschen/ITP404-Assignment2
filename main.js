
(function($){
 var numberLikes = 0;
$('#gallery').on('click','.like' ,function(e)
{
	var $this =  $(this);
	if ( $this.hasClass("like")){ // only allows users to "like" when picture is unliked
		//console.log($(e.target));
		$this.parent().addClass('active').removeClass('photo');
		console.log($this.parent());
		//Adds like counts
 		numberLikes = 1 + parseInt($('.like-count').text());
 		$('.like-count').text(numberLikes);

 		//changes like to 'liked!' and remove
 		//$this.replaceWith( '<a href="#" class="liked!">Liked!</a>');
 		$this.replaceWith( '<h3> liked! <h3>');
	}
});

})(jQuery);
