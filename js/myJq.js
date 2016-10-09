var arr = [1,2,3,4,5,6];
arr.forEach(function(floor){
	$.ajax({
		type : "get",
		url : "http://www.ikindness.cn/api/test/getFund",
		data : {
			type : floor
		},
		success : function(data){
			data.data.forEach(function(item,index){
				if(index == 0){
					$("<div></div>").addClass("con1").html('<h1>'
						+item.name+'</h1><a>已筹金额¥'
						+item.sum+'</a><div>查看项目＞</div><img src="'
						+item.image+'"/>').appendTo($(".floor"+floor+" .content"));
				}
				else{
					$("<div></div>").addClass("con").html('<div class="img"></div><a class="name">'
					+item.name+'</a><div class="con-lab"></div><div class="persent"><div class="per"></div></div><div class="rate">'
					+item.rate+'%<span>达成率</span></div><div class="sum">'
					+item.sum+'<span>已筹金额</span></div><div class="amount">'
					+item.amount+'<span>支持人数</span></div><a class="cover"><b></b></a>').appendTo(".floor"+floor+" .content");
					item.label.forEach(function(item){
						$("<div></div>").addClass("label").text(item).appendTo($(".floor"+floor+" .content .con:eq("+(index-1)+") .con-lab"));
					})
					$(".floor"+floor+" .content .con:eq("+(index-1)+") .img").css("backgroundImage","url("+item.image+")");
					if(item.rate >= 100)item.rate = 100;
					$(".floor"+floor+" .content .con:eq("+(index-1)+") .persent .per").css("width",item.rate+"%");
				}
			})
		}
	})
});

// var hotData = [
// 	{
// 		name : "云马智行车mini2",
// 		introduce : "星际迷航纪念版限量发售",
// 		rate : 4710,
// 		url : "url(./image/hot1.jpg)"
// 	},
// 	{
// 		name : "阳光智能双肩包",
// 		introduce : "终于遇见你 nCHAO阳光智能双肩包",
// 		rate : 2266,
// 		url : "url(./image/hot2.jpg)"
// 	},
// 	{
// 		name : "喜马拉雅智能灯",
// 		introduce : "智能感应,极简全能",
// 		rate : 2132,
// 		url : "url(./image/hot3.jpg)"
// 	},
// 	{
// 		name : "翡翠玉刃陶瓷刀具",
// 		introduce : "翡翠玉石与氧化稿精尖集合的新材料陶瓷刀具————玉刃",
// 		rate : 3208,
// 		url : "url(./image/hot4.jpg)"
// 	},
// 	{
// 		name : "潮我看荧光杯",
// 		introduce : "NONOO潮我看荧光杯,年轻就要自带光芒",
// 		rate : 859,
// 		url : "url(./image/hot5.jpg)"
// 	},
// 	{
// 		name : "阳光智能双肩包",
// 		introduce : "终于遇见你 nCHAO阳光智能双肩包",
// 		rate : 4710,
// 		url : "url(./image/hot6.jpg)"
// 	},
// 	{
// 		name : "东方普罗旺斯",
// 		introduce : "东方普罗旺斯 薰衣草主题设计典范之作",
// 		rate : 1094,
// 		url : "url(./image/hot7.jpg)"
// 	},
// 	{
// 		name : "先锋热浪暖气片",
// 		introduce : "先锋热浪第三代暖气片,全屋取暖不干燥更省电",
// 		rate : 913,
// 		url : "url(./image/hot8.jpg)"
// 	}
// ];
// function CreatHot(data){
// 	var getHotCon = $(".hot .hot-con");
// 	data.forEach(function(item,index){
// 		getHotCon.append('<div class="con"><h1>'
// 			+item.name+'</h1><span>'
// 			+item.introduce+'</span><a>达成率</a><div>'
// 			+item.rate+'%</div></div>').find(".con").eq(index).css("backgroundImage", item.url);
// 	});
// }
// CreatHot(hotData);
// var hotLeft = $(".hot .content .left"),
// 	hotRight = $(".hot .content .right"),
// 	hotCon = $(".hot .content .hot-con");
// hotLeft.click(function(){
// 	hotRight.css("display" , "block");
// 	hotBar("left");
// 	if(parseInt(hotCon.css("left")) >= 0)hotLeft.css("display","none");
// });
// hotRight.click(function(){
// 	hotLeft.css("display" , "block");
// 	hotBar("right");
// 	if(parseInt(hotCon.css("left")) <= -726)hotRight.css("display","none");
// });
// function hotBar(direction){
// 	var distance = direction == "right" ? -242 : 242;
// 	var dis = 0;
// 	// console.log();
// 	hotCon.css("left",(parseInt(hotCon.css("left"))+distance)+"px");
// 	console.log(hotCon.css("left"));
// }
