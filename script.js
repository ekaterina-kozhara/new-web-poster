	$(function(){
				$("#blinkingCircle").hide();
				setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},400)},1000);
			});

	setTimeout(function(){
	    $( ".first" ).css( {"display": "none" } )
			$( ".first" ).css( {"transition": "3s"} )
	}, 4000);

	setTimeout(function(){
			$( ".background" ).css( {"background-color": "#FFE3E3" } )
		  $( ".background" ).css( {"transition": "3s"} )
	}, 4000);

	setTimeout(function(){
			$( ".blinkingCircle" ).css( {"width": "2000px" } )
			$( ".blinkingCircle" ).css( {"height": "2000px" } )
		  $( ".blinkingCircle" ).css( {"transition": "40s"} )
	}, 4200);
	setTimeout(function(){
			$( ".blinkingCircle" ).css( {"opacity": "0" } )
			$( ".blinkingCircle" ).css( {"transition": "30s"} )
	}, 6000);

	setTimeout(function(){
			$( ".tracker" ).css( {"width": "110vw" } )
	}, 4100);

	setTimeout(function(){
			$( ".miniLogo" ).css( {"margin-right": "200px" } )
			$( ".miniLogo" ).css( {"letter-spacing": "0.4em" } )
			$( ".miniLogo" ).css( {"font-family": "Sansation_Bold" } )
			$( ".miniLogo" ).css( {"transition": "1s"} )
	}, 4700);

	setTimeout(function(){
			$( ".concert, .food, .piano, .send" ).css( {"opacity": "1" } )
			$( ".concert, .food, .piano, .send" ).css( {"transition": "1s"} )
	}, 6000);
