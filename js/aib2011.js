$(function() {

	var currentSelection;
	var oldSelection = "home";

	function runEffect(){
		if(currentSelection != oldSelection){
			hideDiv();
		}	
	};
	
	function hideDiv(){
		var options = {};
		$("#"+oldSelection).hide('blind',options,1000,showDiv);
	}
	
	function showDiv(){
		var options = {};
		$("#"+currentSelection).show('blind',options,1000);
		oldSelection = currentSelection;
		//var $l = $("#nav");
		//$l.animate({left: parseInt($l.css('left'),10) == 0 ? -$l.outerWidth()+35 : 0});
	}
			
	
	$(".button").click(function() {
		currentSelection = this.id;
		currentSelection = currentSelection.slice(1);
		runEffect();
		return false;
	});

});