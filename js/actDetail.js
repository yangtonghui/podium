(function(){
	function dataReadSuccess(returnData){
		$.each(returnData.data.imageList,function(i,n){
			var imgHtml = "<img src="+n.image+">"
			$(".datail-ad-box").append(imgHtml);
		});
		if(returnData.data.activityIntro !=""){
			var introHtml = '<div class="deatil-intro">'+
							'<div class="deatil-intro-title">'+
							'活</br>动</br>介</br>绍'+
							'<span class="intro-trangle"></span>'+
							'</div>'+
							'<div class="deatil-intro-text">'+
							'<p>'+returnData.data.activityIntro+'</p>'+
							'</div>'+
							'</div>';
			$("#detailActIntro").append(introHtml);
		}
		actsEvent(returnData);
	}
	function actsEvent(returnData){
		$(".deatil-intro").click(function(){
			if($(this).css("right") != "-0.512rem"){
				$(this).animate({"right":"-0.512rem"},300)
				.find(".intro-trangle").animate({
					"-webkit-transform":"rotate(180deg)",
				    "transform":"rotate(180deg)" 
				},300);
			}else{
				$(this).animate({"right":"-11.5rem"},300)
				.find(".intro-trangle").animate({
					"-webkit-transform":"rotate(0deg)",
				    "transform":"rotate(0deg)" 
				},300);
			}
		});
		
		var startTime = returnData.data.startTimeStamp,
			endTime = returnData.data.stopTimeStamp,
			nowTime = returnData.data.requestServerTimeStamp;
		if(startTime<=nowTime && nowTime<= endTime){
			$(".btn-go").addClass("btn-goto").click(function(){
				alert();
			});
		}
	}
	function dataReadFail(){
		$("html").append('<p class="error-tips">数据加载失败，请刷新页面</p>');
		$(".loading").hide();
	}  
	function ajaxRender(){
		$.ajax({
			url: 'json/actDetail.json',
			type: 'POST',
			dataType: 'json',
			success:function(returnData){
				if(returnData.status == 200){
					dataReadSuccess(returnData);
				}else{
					dataReadFail();
				}
			},
			error:function(){
				dataReadFail();
			}
		});
	}
	ajaxRender();
})();