(function(){
	function dataReaderSuccess(returnData){
		$.each(returnData.data.noticelist,function(i,n){
			var prizeListHtml = '<li>'+
								'<div class="prize-list-img">'+
								'<img src="'+n.imageUrl+'" alt="">'+
								'</div>'+
								'<div class="prize-list-text">'+
								'<p class="prize-list-title">'+n.title+'</p>'+
								'<p class="prize-list-sponsor"><span>主办方:</span>'+n.sponsor+'</p>'+
								'<div class="prize-list-time">'+
								'<div>活动时间:</div>'+
								'<div>'+
								'<span>'+n.startDate+' - '+n.endDate+'</span></br>'+
								'<span>'+n.startTime+' - '+n.endTime+'</span>'+
								'</div>'+
								'</div>'+
								'</div>'+
								'</li>';
			$("#prizeList").append(prizeListHtml);
		});
		actsEvent();
	}
	function dataReaderFail(){
		$("html").append('<p class="error-tips">数据加载失败，请刷新页面</p>');
		$(".loading").hide();
	}
	function actsEvent(){
		$("#prizeList li").click(function(event) {
			alert();
			//window.location = "";
		});
	}
	function ajaxRender(){
		$.ajax({
			url: 'json/openPrize.json',
			type: 'POST',
			dataType: 'json',
			success:function(returnData){
				if(returnData.status == 200){
					dataReaderSuccess(returnData);
				}else{
					dataReaderFail();
				}
			},
			error:function(){
				dataReaderFail();
			}
		});	
	}
	ajaxRender();
})();