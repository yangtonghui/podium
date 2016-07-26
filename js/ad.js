(function(){
	var adHtml = '<div class="list-ad list-adpos">'+
	             '<div class="ad-list-box">'+
	             '<img class="ad-phone" src="images/ad-phone.png">'+
	             '<img class="ad-gift" src="images/ad-gift.png">'+
	             '</div>'+
	             '<img class="ad-delete" src="images/ad-delete.png">'+
	             '<div class="download-app"></div>'+
	             '<div class="ad-hide"></div>'+
	             '</div>';      
    $("#addShowPart").append(adHtml); 
    var alertHtml = '<div class="download-bg" style="display:none">'+
                    '<div class="download-alert">'+
    				'<p>生活不仅需要远方</br>也需要给自己当下的奖励</p>'+
    				'<button class="download-btn">下载颁奖台APP</button>'+
    				'</div>'+
    				'</div>';
    $("body").append(alertHtml);
    $(".ad-hide").click(function(event){
    	$(".list-ad").hide();
    }); 
    //点击下载
    $(".download-app").click(function(event){ 
    	$(".download-bg").show();
    	$("html,body").css("overflow","hidden");
   	}); 
   	//黑背景点击隐藏
   	$(".download-bg").click(function(event){
   		$(this).hide();
   		$("html,body").css("overflow","auto");
   	});
   	//点击下载APP
   	$(".download-btn").click(function(event) {
   		//跳转到下载页  IOS与Android的判别
   		
   	});
})();