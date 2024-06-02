$(document).ready(function(){
	$(".scroll-down-btn").on("click", function(){
		TweenMax.to(window, 1, {scrollTo:$(".home-page").height()});
	});
	$(".sidebar-overlay").on("click", function(){
		TweenMax.to($(".sidebar"), 1, {ease:Back.easeIn, right:$(this).width()*-1});
		TweenMax.to($(".sidebar-overlay"), 1, {ease:Back.easeOut, display:"none", opacity:0});
	});
	$(".signupBtn").on("click", function(){
		TweenMax.to($(".loginWrap"), 0.5, {ease:Back.easeOut, display:"block", opacity:1});
	});
	$(".closeReg").on("click", function(){
		TweenMax.to($(".loginWrap"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
	});
	$(".product-tab").on("click", function(){
		$(this).removeClass("inactive");
		$(this).addClass("active");
		$(this).siblings().addClass("inactive");
		$(this).siblings().removeClass("active");
		if($(this).hasClass("quick-link")){
			TweenMax.set($(this).parent().siblings(".quick"),{css:{display:"block"}}); 
			TweenMax.to($(this).parent().siblings(".quick"), 0.5, {ease:Back.easeOut, opacity:1});
			TweenMax.set($(this).parent().siblings(".custom"),{css:{display:"none"}}); 
			TweenMax.to($(this).parent().siblings(".custom"), 0.5, {ease:Back.easeOut, opacity:0});
		}else{
			TweenMax.set($(this).parent().siblings(".custom"),{css:{display:"block"}}); 
			TweenMax.to($(this).parent().siblings(".custom"), 0.5, {ease:Back.easeOut, display:"block", opacity:1});
			TweenMax.set($(this).parent().siblings(".quick"),{css:{display:"none"}}); 
			TweenMax.to($(this).parent().siblings(".quick"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
		}
	});
	$("#loan-link").on("mouseenter", function(){
		TweenMax.to($("#loan-sub-menu"), 0.5, {ease:Back.easeOut, display:"block", opacity:1});
		TweenMax.to($("#cal-sub-menu"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
	});
	$("#cal-link").on("mouseenter", function(){
		TweenMax.to($("#loan-sub-menu"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
		TweenMax.to($("#cal-sub-menu"), 0.5, {ease:Back.easeOut, display:"block", opacity:1});
	});
	$(".nav-link-submenu").on("mouseleave", function(){
		TweenMax.to($("#cal-sub-menu"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
		TweenMax.to($("#loan-sub-menu"), 0.5, {ease:Back.easeOut, display:"none", opacity:0});
	});
	$(".social-tab").on("mouseenter", function(){
		TweenMax.to($(this), 0.5, {ease:Back.easeOut, left:"-25px"});
	});
	$(".social-tab").on("mouseleave", function(){
		TweenMax.to($(this), 0.5, {ease:Back.easeIn, left:"-134px"});
	});

	function tlComplete(tl){
		tl.restart();
	};

	var tl = new TimelineMax({
		onComplete:tlComplete,
		onCompleteParams: ["{self}"]
	});

	tl.insert( TweenMax.staggerTo(".news-item", 5, {	
		top:"-250px",
    	ease: SlowMo.ease.config(0.7, 0.7, false)
    }, 5) );

    var $slides	= $(".testim-item");
    var currentSlide = 0;
    
	TweenMax.set($slides.filter(":gt(0)"), {left:"100%"});	
	TweenMax.delayedCall(2, nextSlide);				

	function nextSlide(){					
		TweenMax.to( $slides.eq(currentSlide), 1, {left:"-100%", ease:Back.easeIn} );		
		
		if (currentSlide < $slides.length - 1) {
			currentSlide++;
		}
		else {
			currentSlide = 0;
		}
											
		TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "100%"}, {delay:1, left:"0%", ease:Back.easeOut} );
		TweenMax.delayedCall(4, nextSlide);								
	} 

});