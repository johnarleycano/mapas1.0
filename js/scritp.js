

$(document).ready(function() {
		alert("ingreso");
	// $("a.cargar").live('click', function(event){
		$('body').on('click', 'uno', function(){

	     event.preventDefault();
	     var url = $(this).attr("href");
	     var div = "#"+$(this).attr("name");
	 		console.log(div);
	     $(div).load(url);
	     return false;
	});

});



