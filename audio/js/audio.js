
$(function(){
	$(".musicList").on("click","li",function(){
		getMusic($(this));
	});
	
	//上一首
	$(".pre").on("click",preMusic);
	//下一首
	$(".next").on("click",nextMusic);

	//暂停
	$(".musicControl .pause").on("click",musicStatus);
	
	//快进快退
	$(".musicControl .timer .right").on("click",function(event){
		var e = EventUtil.getEvent(event);
		var musicTimer = (e.offsetX/300*($("audio")[0].duration));
		$("audio").get(0).currentTime = musicTimer;
		setTimer(musicTimer.toFixed(0),e.offsetX);
	});
	
	//单曲循环
	$(".xh").on("click",function(){
		//console.log($("audio")[0].loop);
		if($("audio")[0].loop){
			$("audio")[0].loop = false;
		}else{
			$("audio")[0].loop = true;
		}
	});
	
	//音量调节
	$(".sound").on("click",function(){
		$(".musicControl .control .right").find(".changeSound").fadeToggle();
	});
	$(".musicControl .control .right ").on("click",".changeSound",function(event){
		var e = EventUtil.getEvent(event);
		//EventUtil.stopPropagation(e);
		temp = ((100-e.offsetY)/100).toFixed(2);
		$("audio")[0].volume = temp;
		$(".musicControl .control .right .cs").css("height",e.offsetY);
		$(".musicControl .control .right .yl").text((temp*100).toFixed(0));
		if (e.offsetY == 100) {
			$("audio")[0].muted  = true;
			$(".musicControl .sound").css("background-image","url(img/JY.png)");
		}else{
			$("audio")[0].muted  = false;
			$(".musicControl .sound").css("background-image","url(img/sound.png)");
		}
	});
});

//时间显示
var delay;
var dotimer;
function setTime(){
	clearTimeout(delay);
	var totalTime = 0;
	var timeWidth = 0;
	var remain = 0;
	$("audio")[0].onloadedmetadata=function(){
		//delay = setTimeout(function(){
			totalTime = $("audio")[0].duration.toFixed(0);
			var minute = Math.floor(totalTime/60);
			var second = totalTime-minute*60;
			$(".musicControl .timer .not").text(minute+":"+second);
		//},500);
		clearInterval(dotimer);
		dotimer = setInterval(function(){
			remain= $("audio")[0].currentTime.toFixed(0);
			timeWidth = remain*300/totalTime;
			setTimer(remain,timeWidth);
		},1000);
	};
}

//设置进度条和已播放时间
function setTimer(remain,timeWidth){
	var minute = Math.floor(remain/60);
	var second = remain-minute*60;
	if(second<10){
		second = "0"+second;
	}
	$(".musicControl .timer .do").text(minute+":"+second);
	$(".musicControl .timer .time").css("width",timeWidth);
	if(timeWidth+1 >= 300){
		//clearInterval(dotimer);
		nextMusic();
	}　
}

//点击上一首
function preMusic(){
	var oldMusic = $(".musicName").text();
	for(var i = 0; i < $(".musicList li").length; i++){
		var temp = $(".musicList li").eq(i).find("h2").text();
		if(temp == oldMusic){
			if(i == 0){
				getMusic($(".musicList").find("li").eq($(".musicList li").length-1));
			}else{
				getMusic($(".musicList li").eq(i).prev());
			}
			break;
		}
	}
}

//点击下一首
function nextMusic(){
	var oldMusic = $(".musicName").text();
	for(var i = 0; i < $(".musicList li").length; i++){
		var temp = $(".musicList li").eq(i).find("h2").text();
		if(temp == oldMusic){
			if(i == $(".musicList li").length-1){
				getMusic($(".musicList").find("li").eq(0));
			}else{
				getMusic($(".musicList li").eq(i).next());
			}
			break;
		}
	}
}
 
//获取音乐名字
function getMusic(dom){
	$("audio").remove();
	var name = dom.find("h2").text();
	var info = dom.find("p").html();
	creatMusic(name,info);
}

//创建audio事件
function creatMusic(name,info){
	var music = document.createElement("audio");
	var src = "music/"+name+".mp3";
	music.src = decodeURI(src);
	music.autoplay = true;
	//music.loop = true;
	$("body").append(music);
	$(".musicName").text(name);
	$(".musicAuthor").html(info);
	setTime();
	/*$(".musicControl .pause").css("background-image","url(img/on.png)");*/
	musicStatus();
}

//播放状态
function musicStatus(){
	if($("audio")[0].paused){  //已经暂停
		$("audio")[0].play();
		$(".musicControl .pause").css("background-image","url(img/on.png)");
		$(".headImg").css("animation","xuanzhuan 8s linear infinite");
		$(".stick").css("transform","rotate(8deg)");
	}else{  //没暂停
		$("audio")[0].pause();
		$(".musicControl .pause").css("background-image","url(img/pause.png)");
		$(".headImg").css("transform",$(".headImg").css("animation"));
		$(".headImg").css("animation","");
		$(".stick").css("transform","rotate(-8deg)");
	}
}

