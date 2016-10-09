var hotData = [
	{
		name : "云马智行车mini2",
		introduce : "星际迷航纪念版限量发售",
		rate : 4710,
		url : "url(./image/hot1.jpg)"
	},
	{
		name : "阳光智能双肩包",
		introduce : "终于遇见你 nCHAO阳光智能双肩包",
		rate : 2266,
		url : "url(./image/hot2.jpg)"
	},
	{
		name : "喜马拉雅智能灯",
		introduce : "智能感应,极简全能",
		rate : 2132,
		url : "url(./image/hot3.jpg)"
	},
	{
		name : "翡翠玉刃陶瓷刀具",
		introduce : "翡翠玉石与氧化稿精尖集合的新材料陶瓷刀具————玉刃",
		rate : 3208,
		url : "url(./image/hot4.jpg)"
	},
	{
		name : "潮我看荧光杯",
		introduce : "NONOO潮我看荧光杯,年轻就要自带光芒",
		rate : 859,
		url : "url(./image/hot5.jpg)"
	},
	{
		name : "阳光智能双肩包",
		introduce : "终于遇见你 nCHAO阳光智能双肩包",
		rate : 4710,
		url : "url(./image/hot6.jpg)"
	},
	{
		name : "东方普罗旺斯",
		introduce : "东方普罗旺斯 薰衣草主题设计典范之作",
		rate : 1094,
		url : "url(./image/hot7.jpg)"
	},
	{
		name : "先锋热浪暖气片",
		introduce : "先锋热浪第三代暖气片,全屋取暖不干燥更省电",
		rate : 913,
		url : "url(./image/hot8.jpg)"
	}
];
function CreatHot(data){
	var getHotCon = document.querySelector(".hot .hot-con");
	data.forEach(function(item,index){
		getHotCon.innerHTML += '<div class="con"><h1>'+item.name+'</h1><span>'+item.introduce+'</span><a>达成率</a><div>'+item.rate+'%</div></div>';
		getHotCon.querySelectorAll(".con")[index].style.backgroundImage = item.url;
	});
}
CreatHot(hotData);
var hotLeft = document.querySelector(".hot .content .left"),
	hotRight = document.querySelector(".hot .content .right"),
	hotCon = document.querySelector(".hot .content .hot-con");
hotLeft.onclick = function(){
	hotRight.style.display = "block";
	hotBar("left");
	if(parseInt(hotCon.style.left) >= 0)this.style.display = "none";
}
hotRight.onclick = function(){
	hotLeft.style.display = "block";
	hotBar("right");
	if(parseInt(hotCon.style.left) <= -726)this.style.display = "none";
}
function hotBar(direction){
	var distance = direction == "right" ? -242 : 242;
	var dis = 0;
	dis = parseInt(hotCon.style.left)+distance;
	console.log(dis);
	hotCon.style.left = dis+"px";
	console.log(hotCon.style.left);
}