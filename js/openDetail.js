(function(){
	function dataReadSuccess(returnData){
		$.each(returnData.data.list,function(i,n){
			var numHtml = '<div class="prize-title">'+
						  '<span>'+n.winningDate+'</span>'+
						  '<span>'+n.winners+'</span>'+
				          '</div>';
			$(".prize-numshow").append(numHtml);
		});
		$(".datail-banner").append('<img src="'+returnData.data.imageUrl+'">');
		$(".prize-num").css({
			"background":returnData.data.imageUrl,
			"background-size":"100% auto",
			"-webkit-background-size":"100% auto"
		});
	}
	function dataReadFail(){
		$(".prize-numshow").append('<p class="error-tips">数据加载失败，请刷新页面</p>');
	}
	function noData(){
		$(".prize-numshow").append('<p class="error-tips">暂时没有中奖纪录</p>');
	}	
	function ajaxRender(){
		$.ajax({
			url: 'json/openDetail.json',
			type: 'POST',
			dataType: 'json',
			success:function(returnData){
				if(returnData.status == 200){
					if(returnData.data.length == 0){
						noData();
					}else{
						dataReadSuccess(returnData);
					}
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