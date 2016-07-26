//活动列表页
(function(){
	function dataReadSuccess(returnData){
        $.each(returnData.data.podiumList,function(i,n) {
            var listHtml = '<div class="act-list" data-listNum="'+n.podiumId+'">'+
                           '<img src="'+n.imageUrl+'">'+
                           '<div class="act-list-state">'+
                           '<span class="list-state-icon" data-flag="'+n.activityStatus+'"></span>'+
                           '</div>'+
                           '<div class="act-list-context">'+
                           '<p class="act-list-title">'+n.title+'</p>'+
                           '<div class="act-list-time">'+
                           '<div>活动时间:</div>'+
                           '<div>'+
                           '<span>'+n.startDate+'</span>'+
                           ' - '+
                           '<span>'+n.endDate+'</span>'+
                           '<span>'+n.startTime+'-'+n.endTime+'</span>'+
                           '</div>'+
                           '</div>'+
                           '</div>'+
                           '</div>';
            $("#actsListPart").append(listHtml);
        });
        iconState();
        actsEvent();
	}
    function iconState(){
        $(".list-state-icon").each(function(){
            if($(this).attr("data-flag") == 0){
                $(this).addClass("icon-state0").html("已结束");
            }else if($(this).attr("data-flag") == 1){
                $(this).addClass("icon-state1").html("未开始");
            }else if($(this).attr("data-flag") == 2){
                $(this).addClass("icon-state2").html("进行中");
            }
        });
    }
	function dataReadFail(){
		$("#actsListPart").append('<p class="error-tips">数据加载失败，请刷新页面</p>');
		$(".loading").hide();
	}  
	function noData(){
		$("#actsListPart").append('<p class="error-tips">没有数据...</p>');
		$(".loading").hide();
	}  
	function actsEvent(){
		$(".act-list").click(function(){
			window.location.href = "actDetail.html?id="+ $(this).attr("data-listNum");
		});
	}     
    function ajaxRender(){
    	$.ajax({
    		url: 'json/actList.json',
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
    $(window).scroll(function(){
        if($(window).scrollTop()+$(window).height() == $(document).height()){
            ajaxRender(); 
        }
    });
})();