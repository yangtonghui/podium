//导航栏
(function (){
	var navHtml = '<div class="nav-part">'+
                  '<div class="nav-icon"><span></span></div>'+
                  '<div class="nav-icon"><span></span></div>'+
                  '<div class="nav-icon"><span></span></div>'+
        	      '</div>';   
    $("nav").append(navHtml);
    if($("nav").attr("data-navNum") == "1"){
    	$(".nav-icon").eq(0).children("span").addClass("nav-part-cur1");
    }else if($("nav").attr("data-navNum") == "2"){
    	$(".nav-icon").eq(1).children("span").addClass("nav-part-cur2");
    }else if($("nav").attr("data-navNum") == "3"){
    	$(".nav-icon").eq(2).children("span").addClass("nav-part-cur3");
    }
    $(".nav-icon").eq(0).click(function(){
    	window.location.href="";
    });
    $(".nav-icon").eq(1).click(function(){
    	window.location.href="";
    });
    $(".nav-icon").eq(2).click(function(){
    	window.location.href="";
    });
})();