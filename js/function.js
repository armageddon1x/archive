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

	// $(".name_tag").hover(
	// 	function(){},
	// 	function(){}
	// 	);

	// if(($(".name_tag").siblings(".name").html())==="FINAL PROJECT"){
		// alias("FINAL PROJECT", "RPG BATTLE");
	// }

	// if(($(".name_tag").siblings(".name").html())==="WEB DEV HW #1"){
		// alias("WEB DEV HW #1","HTML");
	// }

	// var tag=$(this);
	// var sib=$(this).siblings();
	// var html=$(this).siblings(".name").html();

	// $( ".name:contains('FINAL PROJECT')" ).
	alias("FINAL PROJECT", "RPG BATTLE");
	alias("WEB DEV HW #1","HTML");

	function alias(original, new_name){
		$(".name_tag").hover(


			function(){
				// var original=$(this).siblings(".name").text();
				// console.log("html "+$(this).siblings(".name").text());

				//changes the text
				$(this).siblings(".name").text(new_name);
			},
			function(){
				//restores the text
				$(this).siblings(".name").text(original);
			}


		);
	}
	

});