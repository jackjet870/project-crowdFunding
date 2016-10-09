var arr = [1,2,3,4,5,6];
arr.forEach(function(item){
	ajax(item);
})
function ajax(floor){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		// console.log(["未打开请求","请求打开","请求发送成功","服务端成功接收请求","服务端响应成功"][xhr.readyState]);
		if(xhr.readyState === 4 && xhr.status === 200){
			var options = JSON.parse(xhr.responseText);
			options.data.forEach(function(item,index){
				if(index == 0){
					var con1 = document.createElement("div");
					con1.className = "con1";
					con1.innerHTML = '<h1>'+item.name+'</h1><a>已筹金额¥'+item.sum+'</a><div>查看项目＞</div><img src="'+item.image+'"/>';
					document.querySelector(".floor"+floor+" .content").appendChild(con1);
				}
				else{
					var con = document.createElement("div");
					con.className = "con";
					con.innerHTML = '<div class="img"></div><a class="name">'
					+item.name+'</a><div class="con-lab"></div><div class="persent"><div class="per"></div></div><div class="rate">'
					+item.rate+'%<span>达成率</span></div><div class="sum">'
					+item.sum+'<span>已筹金额</span></div><div class="amount">'
					+item.amount+'<span>支持人数</span></div><a class="cover"><b></b></a>';
					document.querySelector(".floor"+floor+" .content").appendChild(con);
					var setCon = document.querySelectorAll(".floor"+floor+" .content .con");
					item.label.forEach(function(item){
						var label = document.createElement("div");
						label.className = "label";
						label.innerText = item;
						setCon[index-1].querySelector(".con-lab").appendChild(label);
					})
					setCon[index-1].querySelector(".img").style.backgroundImage = "url("+item.image+")";
					var per = setCon[index-1].querySelector(".persent .per");
					if(item.rate >= 100)item.rate = 100;
					per.style.width = item.rate+"%";
				}
			})	
		};
	}
	xhr.open("get","http://www.ikindness.cn/api/test/getFund?type="+floor,1);
	xhr.send(null);
}