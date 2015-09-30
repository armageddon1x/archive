$(function(){

	//load sound
	var beep=document.createElement("audio");
	beep.setAttribute("src","sounds/beep.mp3");

	//beep when hover
	$(".beep").hover(
		function(e){
			beep.play();
			$(this).css("cursor","pointer")
		},
		function(e){
			beep.pause();
			beep.currentTime=0;
		}
	);

	//emphasize project number on hover
	$(".number_tag").hover(
		function(){
			//highlight color of project number
			$(this).parent().parent().children(".info").children(".number").css("background","white")
			$(this).parent().parent().children(".info").children(".number").css("color","black")
		},
		function(){
			//restores color of project number
			$(this).parent().parent().children(".info").children(".number").css("color","#0076E5")
			$(this).parent().parent().children(".info").children(".number").css("background","black")
		}
	);

	//alias renaming on hover is here
	alias("FRONT END #1","USING SASS/SCSS")
	alias("SIDE PROJECT #2","DRUM KIT")
	alias("SIDE PROJECT #1","ARCHIVE")
	alias("FINAL PROJECT", "RPG BATTLE");
	alias("WEB DEV HW #10","BUSINESS WEBSITE");
	alias("WEB DEV HW #9","JAVASCRIPT CLOCK");
	alias("WEB DEV HW #8","MEDIA QUERY");
	alias("WEB DEV HW #7","CAUSES WEBSITE");
	alias("WEB DEV HW #6","JQUERY NOTES");
	alias("WEB DEV HW #5","JAVASCRIPTE NOTES");
	alias("WEB DEV HW #4","PERSONAL WEBSITE");
	alias("WEB DEV HW #3","CSS LAYOUTS");
	alias("WEB DEV HW #2","HTML + CSS");
	alias("WEB DEV HW #1","HTML BASICS");

	function alias(original, new_name){
		$(".name_tag").hover(
			function(){
				if($(this).siblings(".name").text()===original){
					//changes the text
					$(this).siblings(".name").text(new_name);
				}
			},
			function(){
				if($(this).siblings(".name").text()===new_name){
					//restores the text
					$(this).siblings(".name").text(original);
				}
			}
		);
	}
	
});