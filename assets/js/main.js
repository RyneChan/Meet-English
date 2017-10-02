var bg = $C('.bg'), p1ImgLogo1 = $C('.img_logo1'), p1ImgText1 = $C('.img_text1'), p1ImgLogo2 = $C('.img_logo2'), p1ImgText2 = $C('.img_text2'), wrapP1 = $C('.wrap-p1'), wrapP2 = $C('.wrap-p2'), wrapP3 = $C('.wrap-p3'), lisbox1 = $C('.lisbox1'), wordShowC = $C('.wordShowC'), wordShowE = $C('.wordShowE'), speedF = $C('.speed-fast'), speedM = $C('.speed-mid'), speedS = $C('.speed-slow'), wordIndex1 = $C('.wordIndex1'),wordIndex2 = $C('.wordIndex2'),support = $C('.support'), support2 = $C('.support2'), money = $C('.money'), vban = $C('.vban'), landscape = $C('.landscape'), rrandom = $C('.random'),guiling = $C('.zero'),stop = $C('.stop'),bbody = $C('body');
		//赞助点击事件
		support.onclick = function (){
			money.style.display = 'block';
			alert('赞助我吧，就算一杯咖啡也好。(长按可以扫描二维码，点击图片消失)')
		}
		money.onclick = function(){
			money.style.display = 'none';
		}
		//版本更新事件
		support2.onclick = function (){
			vban.style.display = 'block';
			vban.innerHTML = `
				</br>
				<span> &nbsp &nbsp v0.2版本更新</span></br>
				<span> &nbsp &nbsp已经更新完成四级A的所有词汇</span></br>
				<span> &nbsp &nbsp v0.2.1版本更新</span></br>
				<span> &nbsp &nbsp优化程序。添加了横屏检测。</span></br>
				<span> &nbsp &nbsp添加新功能：随机，归零以及暂停开始</span></br>

			`
		}
		vban.onclick = function(){
			vban.style.display = 'none';
		}

		//横屏检测
		var orientation = window.matchMedia("(orientation: portrait)");
		var orientations = false;
		window.onresize = function(){
			//横屏检测
			if(!orientation.matches && !orientations){
				landscape.style.display = 'block';
				bbody.className = 'landscape';
				console.log(bbody);
				console.log(orientation.matches);
				orientations = true;
				alert('暂不支持横屏，请切换竖屏继续使用。')
				
			}else{
				landscape.style.display = 'none';
				bbody.className = '';
				orientations = false;
				console.log(bbody);
				console.log(orientation.matches);
			
			}
		}
		//设置背景尺寸
		bg.style.height = window.innerHeight+"px";

		//屏幕1
		p1ImgLogo1.style.top =((window.innerHeight - (parseInt(document.documentElement.style.fontSize)*16))/2)  +'px';
		p1ImgText1.style.top =((window.innerHeight - (parseInt(document.documentElement.style.fontSize)*16)+parseInt(document.documentElement.style.fontSize)*10)/2)  +'px';
		//logo点击后进入了第二屏幕
		p1ImgLogo1.onclick=function(){
			wrapP1.style.display = 'none';
			wrapP2.style.display = 'block';
			p1ImgLogo2.style.display = 'block';
			p1ImgText2.style.display = 'block';
		};
		//选择后进入了单词页面，调用了start开始函数
		var speed = 1500;
		var Windex = 0;//当前单词下标
		var randomword = false;//是否随机
		var timeWord = null;
		lisbox1.onclick=function(){
		speedM.style.fontSize = '1.5rem';
		speedS.style.fontSize = '1rem';
		speedF.style.fontSize = '1rem';
		wrapP2.style.display = 'none';
		wrapP3.style.display = 'block';
		timeWord = setInterval(findWord,speed);
		};
		function findWord(){
			wordIndex1.innerHTML = Windex;
			wordIndex2.innerHTML = CwordA.length;
			wordShowC.innerHTML = CwordA[Windex];
			wordShowE.innerHTML = EwordA[Windex];
			Windex++;
			if(Windex>CwordA.length-1){
				Windex = 0;
			}
			if(randomword){
				Windex = Math.floor(Math.random()*(CwordA.length));
			}

		}
		rrandom.onclick = function(){
			randomword = !randomword;
			if(randomword){
			rrandom.style.borderRadius = '50%';
			}else{
			rrandom.style.borderRadius = '25%';

			}
		}
		guiling.onclick = function(){
			Windex = 0;
			wordShowC.innerHTML = CwordA[Windex];
			wordShowE.innerHTML = EwordA[Windex];
			wordIndex1.innerHTML = Windex;
			wordIndex2.innerHTML = CwordA.length;
		}
		var zanting = false;
		stop.onclick = function(){
			zanting = !zanting;
			if(zanting){
			stop.innerHTML = '开始';
			stop.style.borderRadius = '50%';
			clearInterval(timeWord);
			}else{
			stop.innerHTML = '暂停';
			stop.style.borderRadius = '25%';
			timeWord = setInterval(findWord,speed);

			}
		}
		//不同速度执行不同的操作
		speedF.onclick = function(){
			speed = 1000;
			clearInterval(timeWord)
			timeWord = setInterval(findWord,speed);
			console.log(1);
			speedM.style.fontSize = '1rem';
			speedS.style.fontSize = '1rem';
			speedF.style.fontSize = '1.5rem';

		}
		speedM.onclick = function(){
			speed = 1500;
			clearInterval(timeWord)
			timeWord = setInterval(findWord,speed)
			console.log(2);
			speedM.style.fontSize = '1.5rem';
			speedS.style.fontSize = '1rem';
			speedF.style.fontSize = '1rem';

		}
		speedS.onclick = function(){
			speed = 2000;
			clearInterval(timeWord)
			timeWord = setInterval(findWord,speed)
			console.log(3);
			speedM.style.fontSize = '1rem';
			speedS.style.fontSize = '1.5rem';
			speedF.style.fontSize = '1rem';

		}