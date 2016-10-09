var getImg1 = document.querySelector(".firstScreen .right .img1"),
	getImg2 = document.querySelector(".firstScreen .right .img2"),
	getImg3 = document.querySelector(".firstScreen .right .img3"),
	turnLeft = document.querySelector(".firstScreen .right .banner1 span i:first-child"),
	turnRight = document.querySelector(".firstScreen .right .banner1 span i:last-child"),
	getImg = [getImg1,getImg2,getImg3],
	date1 = [["09/25","09/24"],["09/25","09/28"],["09/25","09/27"]];
for(var i=1;i<4;i++){
	var content = document.createElement("div");
	content.innerHTML = '<div><img src="./image/img'+i+'-1.jpg"/><span>上线日期 '+date1[i-1][0]+'</span></div><div><img src="./image/img'+i+'-2.jpg"/><span>上线日期 '+date1[i-1][1]+'</span></div>';
	getImg[i-1].appendChild(content);
}
turnLeft.onclick = function(){
	Turn("left",1);//第一排向左滑动
	var timer = setInterval(function(){//第二排向左滑动
		Turn("left",2);
		clearInterval(timer);
	},500);
	var timer1 = setInterval(function(){//第三排向左滑动
		Turn("left",3);
		clearInterval(timer1);
	},1000);
	}
turnRight.onclick = function(){
	Turn("right",1);//第一排向右滑动
	var timer = setInterval(function(){//第一排向右滑动
		Turn("right",2);
		clearInterval(timer);
	},500);
	var timer1 = setInterval(function(){//第一排向右滑动
		Turn("right",3);
		clearInterval(timer1);
	},1000);
}
function Turn(direction,number){
	var imgChange = getImg[number-1].querySelector("div").querySelectorAll("div"),//找到图片外面的div(每张图片在一个div中)
		len = imgChange.length,//一共几张图(2张)
		time = 0,//每次移动的值
		num = 10,//setTimeout的时间(每次的时间)
		k = 0.2;
	if(direction =="right")imgChange[1].style.left = "-580px";//(如果向右移，需要先把第二张图放在第一张图的左面)
	change(num);
	function change(num){
		if(direction=="left"&&time <= -290||direction=="right"&&time >= 290){//判断是否已经平移结束
			var src1 = imgChange[0].innerHTML,
				src2 = imgChange[1].innerHTML,
				sty1 = imgChange[0].style,
				sty2 = imgChange[1].style;
				imgChange[0].innerHTML = src2;//把本来第二个div中的东西放入第一个div中
				imgChange[1].innerHTML = src1;//把本来第一个div中的东西放入第二个div中
			if(direction == "left"){
				imgChange[0].style.transform = "none";//此时两个div都向左移了，清除其移动并更换图片
				imgChange[1].style.transform = "none";//此时两个div都向左移了，清除其移动并更换图片
			}else{
				imgChange[0].style = sty2;//此时两个div向右移了，把第二个的位置给第一个
				imgChange[1].style = sty1;//此时两个div向右移了，把第一个的位置给第二个
			}
			return ;
		}
		var timer = setTimeout(function(){
		// num = num - k;
		clearTimeout(timer);
		if(direction == "left")time = time - 10;
		else time = time + 10;
		for(var i=0;i<len;i++){
			imgChange[i].style.transform = "translateX("+time+"px)";//每次向左或者右移10px
		}
		change(num);
		},num);
	}
}
