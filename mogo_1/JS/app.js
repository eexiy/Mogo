$(function(){

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffSet = $(window).scrollTop();


		//Header fixed

	checkScroll(scrollOffSet);

	$(window).on("scroll", function() {

		scrollOffSet = $(this).scrollTop();

		checkScroll(scrollOffSet);

	});

	function checkScroll(scrollOffSet) {

		if ( scrollOffSet >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}


	//Smooth scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		blockId = $this.data('scroll'),
		blockOffSet = $(blockId).offset().top;

		$("#nav a").removeClass("active");

		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffSet
		}, 500);
	});

	// Menu nav togglee

	$("#nav__toggle").on("click", function(event) {
		event.preventDefault();


		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	// Collapse

	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		blockId = $this.data('collapse');

		$this.toggleClass("active");

	});








});