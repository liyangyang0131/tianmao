window.onload=function(){
	var show1 = document.getElementsByClassName('hidden1-show1');
	var show2 = document.getElementsByClassName('hidden1');

	for(var i = 0;i<show1.length;i++){
		show1[i].index=i;
		show1[i].onmouseover=function(){
			show2[this.index].style.display='block';
		}
		show1[i].onmouseout=function(){
			show2[this.index].style.display='none';
		}
	}

	var show3 = document.getElementsByClassName('item-item-show1');
	var show4 = document.getElementsByClassName('item-item-show2');
	var show5 = document.getElementsByClassName('item-item-show3');
	

	for(var i = 0;i<show3.length;i++){
		show3[i].index = i;
		show3[i].onmouseover=function(){
			show4[this.index].style.display='block';
			show5[this.index].style.display='block';

			show4[this.index].style.webkitAnimationName='aa';
		}
		show3[i].onmouseout=function(){
			show4[this.index].style.display='none';
			show5[this.index].style.display='none';

			// show5[this.index].style.webkitAnimationName='bb';
		}
	}
	var comeback = document.getElementById('comeback');
	var timer1;
	comeback.onclick = function(){
		var nowTop = document.body.scrollTop;
		var cha = nowTop/(100/1);
		clearInterval(timer1);
		timer1 = setInterval(function(){
			nowTop -= cha;
			document.body.scrollTop = nowTop;
			if(nowTop < 0){
				clearInterval(timer1);
			}
		},1);
	}
	

	var show6 = document.getElementsByClassName('shop-show');
	var show7 = document.getElementsByClassName('hidden3');
	var show8 = document.getElementsByClassName('hidden2');
	var show9 = document.getElementsByClassName('fushu');

	var jingxuanmarket=document.getElementById('jingxuanmarket');
	var fushu = document.getElementById('fushu-fs');

	for(var i = 0;i<show6.length;i++){
		show6[i].index=i;
		show6[i].onmouseover=function(){
			show7[this.index].style.display='block';
			show8[this.index].style.display='block';
			show8[this.index].style.position='absolute';
			show8[this.index].style.top='0';
			show8[this.index].style.left='0';
			jingxuanmarket.style.display='none';
			show9[this.index].style.display='block';
			show9[this.index].style.position='relative';
			show9[this.index].style.top='0';
			show9[this.index].style.right='0';
			fushu.style.display='none';

		}
		show6[i].onmouseout=function(){
			show7[this.index].style.display='none';
			show8[this.index].style.display='none';
			jingxuanmarket.style.display='block';
			show9[this.index].style.display='none';
			fushu.style.display='block';
		}
	}
	//拉动滚动条出现顶部栏
	var scollHeader = document.getElementById('scoll-header');
	var timerId;
	document.onscroll = function(){
		clearInterval(timerId);
		if(document.body.scrollTop < 600){
			scollHeader.style.display = 'none';
		}else{
			timerId = setTimeout(function(){
				scollHeader.style.display = 'block';
			},1000);
		}
	}

	//banner轮播
	var chang = document.getElementById('chang'),
		circleA = document.getElementsByClassName('circle-item'),
		lb = document.getElementsByClassName('lb');
	var timer;
	var index = 1;
	var previous = circleA[0];
	var limit = 2000;

	circleA[0].style.background = '#ccc';
	var fn = function(){
		previous.style.background = '#333';
		circleA[index].style.background = '#ccc';
		previous = circleA[index];

		chang.style.marginLeft = -810*index +'px';
		index++;
		if( index > circleA.length-1 ){
			index = 0;
		}
	};
	timer = setInterval(fn,limit);
	for(var i = 0;i<circleA.length;i++){
		circleA[i].index = i;
		circleA[i].onmouseover = function(){
			clearInterval(timer);

			previous.style.background = '#333';
			this.style.background = '#ccc';
			previous = this;

			this.style.background = '#ccc';
			
			chang.style.marginLeft = -810*this.index+'px';
			index = this.index; 
		}
		circleA[i].onmouseout = function(){
			clearInterval(timer);
			// this.style.background = '#333';
			timer = setInterval(fn,limit);
		}
	}

	chang.onmouseover = function(){
		this.style.cursor = 'pointer';
		clearInterval(timer);
	}
	chang.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(fn,limit);
	}

};