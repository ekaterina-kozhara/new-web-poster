$( ".blinkingCircle" ).click(function() {
	$(function(){
				$("#blinkingCircle").hide();
				setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},250)},1000);
			});

	setTimeout(function(){
	  $( ".blinkingCircle2" ).css( {"opacity": "1" } )
	  $( ".blinkingCircle2" ).css( "width", "3000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( "height", "3000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( {"background-color": "#FFE3E3" } )
		$( ".blinkingCircle2" ).css( {"z-index": "-60" } )
  }, 4000);

	// setTimeout(function(){
	// 		$( ".line" ).css( {"display": "block" } )
	// 		$( ".line" ).css( {"transition": "1s"} )
	// 		$( ".line" ).css( {"z-index": "2" } )
	// 		$( ".first" ).css( {"transition": "3s"} )
	// }, 6000);

	setTimeout(function(){
			$( ".tracker" ).css( {"width": "110vw" } )
	}, 4000);

	// setTimeout(function(){
	// 		$( ".miniLogo" ).css( {"z-index": "4" } )
	// }, 4000);

	setTimeout(function(){
	    $( ".first" ).css( {"display": "none" } )
			$( ".first" ).css( {"transition": "3s"} )
	}, 4000);

	setTimeout(function(){
			$( ".miniLogo" ).css( {"margin-right": "200px" } )
			$( ".miniLogo" ).css( {"margin-top": "70px" } )
			$( ".miniLogo" ).css( {"letter-spacing": "0.4em" } )
			$( ".miniLogo" ).css( {"font-family": "Sansation_Bold" } )
			$( ".miniLogo" ).css( {"z-index": "4" } )
			$( ".miniLogo" ).css( {"transition": "1s"} )
	}, 4000);

	setTimeout(function(){
			$( ".concert, .food, .piano, .send" ).css( {"opacity": "1" } )
			$( ".concert, .food, .piano, .send" ).css( {"transition": "4s"} )
	}, 6000);
})

$( ".concert" ).click(function() {
	$( ".concert" ).css( {"opacity": "0"} )
	$( ".circle1" ).css( {"opacity": "1" } )
	$( ".circleWords" ).css( {"opacity": "1" } )
	$( ".circleDown" ).css( {"opacity": "1" } )
})

$( ".send, .piano, .food" ).click(function() {
	$( ".send, .piano, .food" ).css( {"opacity": "0"} )	
})

// anime({
//   targets: '.path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1000,
//   delay: 8000,
//   direction: 'alternate',
//   // loop: true
// });

// setTimeout(function(){
// 	$( ".concert" ).css( {"z-index": "3" } )
// 	$( ".concert" ).css( {"transition": "1s"} )
// }, 6000);
