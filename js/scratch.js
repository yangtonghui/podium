(function(){
	var lottery = document.getElementById("lottery");
	var lheight = $("#cardContainer").height();
	var lwidth = $("#cardContainer").width();
	lottery.height = lheight;
	lottery.width = lwidth;
	var ltx = lottery.getContext("2d");
	var img = document.getElementById("img");
	ltx.fillStyle=ltx.createPattern(img,"repeat");
	ltx.fillRect(0,0,lwidth,lheight);
	ltx.globalCompositeOperation = 'destination-out';
	img.onload = function(){
		lottery.addEventListener("touchmove",function(e){
			var y = e.touches[0].clientY - $("#cardContainer").offset().top;
			var x = e.touches[0].clientX - $("#cardContainer").offset().left;
			ltx.beginPath(); 
			ltx.arc(x,y,40,0,Math.PI*2,true); 
			ltx.fillStyle="white"; 
			ltx.closePath(); 
			ltx.fill(); 
			var opacity = getOpacity(ltx,lwidth,lheight);
			if(opacity>=40){
				alert();
			}
		});
	}

	function getOpacity(ctx,width,height){
		 var imgData = ctx.getImageData(0, 0, width, height),
            pixles = imgData.data,
            transPixs = [];
        for (var i = 0, j = pixles.length; i < j; i += 4) {
            var a = pixles[i + 3];
            if (a < 128) {
                transPixs.push(i);
            }
        }
        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
	}

})();