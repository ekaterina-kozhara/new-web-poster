	// setTimeout(function(){
	// 		$( ".background" ).css( {"background-color": "#FFE3E3" } )
	// 	  $( ".background" ).css( {"transition": "3s"} )
	// }, 4000);

	// setTimeout(function(){
	// 		$( ".blinkingCircle" ).css( {"width": "2000px" } )
	// 		$( ".blinkingCircle" ).css( {"height": "2000px" } )
	// 	  $( ".blinkingCircle" ).css( {"transition": "40s"} )
	// }, 4200);
	// setTimeout(function(){
	// 		$( ".blinkingCircle" ).css( {"opacity": "0" } )
	// 		$( ".blinkingCircle" ).css( {"transition": "30s"} )
	// }, 6000);




	//----------------

$( ".blinkingCircle" ).click(function() {
	$(function(){
				$("#blinkingCircle").hide();
				setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},400)},1000);
			});

	setTimeout(function(){
	  $( ".blinkingCircle2" ).css( {"opacity": "1" } )
	  $( ".blinkingCircle2" ).css( "width", "2000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( "height", "2000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( {"background-color": "#FFE3E3" } )
		$( ".blinkingCircle2" ).css( {"z-index": "-60" } )
  }, 4000);
	setTimeout(function(){
			$( ".tracker" ).css( {"width": "110vw" } )
	}, 4000);

	setTimeout(function(){
	    $( ".first" ).css( {"display": "none" } )
			$( ".first" ).css( {"transition": "3s"} )
	}, 4000);

	setTimeout(function(){
			$( ".miniLogo" ).css( {"margin-right": "200px" } )
			$( ".miniLogo" ).css( {"margin-top": "90px" } )
			$( ".miniLogo" ).css( {"letter-spacing": "0.4em" } )
			$( ".miniLogo" ).css( {"font-family": "Sansation_Bold" } )
			$( ".miniLogo" ).css( {"transition": "1s"} )
	}, 4000);

	setTimeout(function(){
			$( ".concert, .food, .piano, .send" ).css( {"opacity": "1" } )
			$( ".concert, .food, .piano, .send" ).css( {"transition": "1s"} )
	}, 6000);
})

// setTimeout(function(){
// 	$( ".concert" ).css( {"z-index": "3" } )
// 	$( ".concert" ).css( {"transition": "1s"} )
// }, 6000);
