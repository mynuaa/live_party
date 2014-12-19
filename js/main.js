var ajaxLag=3000,
	lastpos=-1,
	timeout=5000,
	firstAjax=1,
	len=[],
	list=[
		["\\:\\)","wx"],
		["\\:\\~","pz"],
		["\\:B","se"],
		["\\:\\|","fd"],
		["8\\-\\)","dy"],
		["\\:<","ll"],
		["\\:\\$","hx"],
		["\\:X","bz"],
		["\\:Z","shui"],
		["\\:'\\(","dk"],
		["\\:\\-\\|","gg"],
		["\\:@","fn"],
		["\\:P","tp"],
		["\\:Q","zk"],
		["\\:T","tuu"],
		["\\,@P","tx"],
		["\\,@\\-D","ka"],
		["\\:d","baiy"],
		["\\,@o","am"],
		["\\:g","jie"],
		["\\|\\-\\)","kun"],
		["\\:\\!","jk"],
		["\\:L","lh"],
		["\\:>","hanx"],
		["\\:\\,@","db"],
		["\\,@f","fendou"],
		["\\:D","cy"],
		["\\:O","jy"],
		["\\:\\(","ng"],
		["\\:\\+","kuk"],
		["\\-\\-b","lengh"],
		["\\,@\\!","shuai"],
		["\\!\\!\\!","kl"],
		["xx","qiao"],
		["bye","zj"],
		["wipe","ch"],
		["dig","kb"],
		["handclap","gz"],
		["&\\-\\(","qd"],
		["\\:\\-S","zhm"],
		["\\?","yiw"],
		["\\,@x","xu"],
		["\\,@@","yun"],
		["\\:8","zhem"],
		["basketb","lq"],
		["oo","pp"],
		["coffee","coffee"],
		["eat","eat"],
		["pig","pig"],
		["rose","mg"],
		["fade","dx"],
		["B\\-\\)","huaix"],
		["<@","zhh"],
		["@>","yhh"],
		["\\:\\-O","hq"],
		[">\\-\\|","bs"],
		["P\\-\\(","wq"],
		["\\:'\\|","kk"],
		["X\\-\\)","yx"],
		["\\:\\*","qq"],
		["@x","xia"],
		["8\\*","kel"],
		["pd","cd"],
		["<W>","xg"],
		["heart","xin"],
		["break","xs"],
		["cake","cake"],
		["li","li"],
		["bome","zhd"],
		["kn","kn"],
		["footb","zq"],
		["ladybug","pch"],
		["shit","shit"],
		["moon","yl"],
		["sun","ty"],
		["gift","lw"],
		["hug","yb"],
		["beer","pj"],
		["weak","ruo"],
		["share","ws"],
		// ["v","v"],
		["@\\)","bq"],
		["jj","gy"],
		["@@","qt"],
		["bad","cj"],
		["lvu","aini"],
		["no","no"],
		["ok","ok"],
		["love","aiq"],
		["<L>","fw"],
		["jump","tiao"],
		["strong","qiang"],
		["shake","fad"],
		["<O>","oh"],
		["circle","zhq"],
		["kotow","kt"],
		["turn","ht"],
		["skip","tsh"],
		["oY","oY"],
		["#\\-0","jd"],
		["hiphot","hiphop"],
		["kiss","xw"],
		["<&","zuotj"],
		["&>","youtj"],
	],
	emoji=["415","056","057","414","405","106","418","417","40d","40a","404","105","409","40e","402","108","403","058","407","401","40f","40b","406","413","411","412","410","107","059","416","408","40c","11a","10c","32c","32a","32d","328","32b","022","023","327","329","32e","32f","335","334","021","337","020","336","13c","330","331","326","03e","11d","05a","00e","421","420","00d","010","011","41e","012","422","22e","22f","231","230","427","41d","00f","41f","14c","201","115","428","51f","429","424","423","253","426","111","425","31e","31f","31d","001","002","005","004","51a","519","518","515","516","517","51b","152","04e","51c","51e","11c","536","003","41c","41b","419","41a","04a","04b","049","048","04c","13d","443","43e","04f","052","053","524","52c","52a","531","050","527","051","10b","52b","52f","528","01a","134","530","529","526","52d","521","523","52e","055","525","10a","109","522","019","054","520","306","030","304","110","032","305","303","118","447","119","307","308","444","441","436","437","438","43a","439","43b","117","440","442","446","445","11b","448","033","112","325","312","310","126","127","008","03d","00c","12a","00a","00b","009","316","129","141","142","317","128","14b","211","114","145","144","03f","313","116","10f","104","103","101","102","13f","140","11f","12f","031","30e","311","113","30f","13b","42b","42a","018","016","015","014","42c","42d","017","013","20e","20c","20f","20d","131","12b","130","12d","324","301","148","502","03c","30a","042","040","041","12c","007","31a","13e","31b","006","302","319","321","322","314","503","10e","318","43c","11e","323","31c","034","035","045","338","047","30c","044","30b","043","120","33b","33f","341","34c","344","342","33d","33e","340","34d","339","147","343","33c","33a","43f","34b","046","345","346","348","347","34a","349","036","157","038","153","155","14d","156","501","158","43d","037","504","44a","146","50a","505","506","122","508","509","03b","04d","449","44b","51d","44c","124","121","433","202","135","01c","01d","10d","136","42e","01b","15a","159","432","430","431","42f","01e","039","435","01f","125","03a","14e","252","137","209","154","133","150","320","123","132","143","50b","514","513","50c","50d","511","50f","512","510","50e","21c","21d","21e","21f","220","221","222","223","224","225","210","232","233","235","234","236","237","238","239","23b","23a","23d","23c","24d","212","24c","213","214","507","203","20b","22a","22b","226","227","22c","22d","215","216","217","218","228","151","138","139","13a","208","14f","20a","434","309","315","30d","207","229","206","205","204","12e","250","251","14a","149","23f","240","241","242","243","244","245","246","247","248","249","24a","24b","23e","532","533","534","535","21a","219","21b","02f","024","025","026","027","028","029","02a","02b","02c","02d","02e","332","333","24e","24f","537"],
	dom={
		dm:document.getElementById("dm"),
		toggle:document.getElementById("toggle"),
		floatDM:document.getElementById("floatDM"),
		text:document.getElementById("sendText")
	};
// 转义符号表情
function transfer(content){
	// QQ表情
	for(var i=0;i<list.length;i++)
		content=content.replace(
			RegExp("\\/\\:"+list[i][0],"g"),
			'<img src="./source/plugin/NewPlaneWall/img/face/'+list[i][1]+'.gif">'
		);
	// Emoji
	for(var i=0;i<emoji.length;i++){
		content=content.replace(
			eval('RegExp("\\\\ue'+emoji[i]+'","g")'),
			'<img src="./source/plugin/NewPlaneWall/img/emoji/e'+emoji[i]+'.png">'
		);
	}
	return content;
}
// 获取数据
function getData(){
	verstr=((ver==-1)?"":("&ver="+ver));
	lastposstr=((lastpos==-1)?"":("&lastpos="+lastpos));
	jQuery.ajax({
		url	:"./plugin.php?id=NewPlaneWall:NewPlaneWall&action=ajax"
			+lastposstr+verstr,
		type:"GET",
		timeout:timeout,
		success:function(d){
			var show=(firstAjax==0);
			firstAjax=0;
			var data=JSON.parse(d);
			if(data==null||data.mp==null){
				dom.dm.innerHTML="";
				return;
			}
			if(lastpos==data.mp)return;
			var ts="";
			for(var i=0;i<data.l;i++){
				len[i]=data.d[i][1].length;
				data.d[i][1]=transfer(data.d[i][1]);
				ts+="<div>"+
					"<img class='avatar' src='./uc_server/avatar.php?uid="+data.d[i][3]+"&size=small' /><span class='author'>"+data.d[i][2]+"</span>"+
					"<span class='content'>"+data.d[i][1]+"</span>"+
					"</div>";
			}
			dom.dm.innerHTML=((lastpos==-1)?"":dom.dm.innerHTML)+ts;
			dom.dm.scrollTop=dom.dm.scrollHeight;
			lastpos=data.mp;
			if(show){
				for(var i=0;i<data.l;i++){
					var tdm=document.createElement("span");
					tdm.id="dm"+data.d[i][0];
					tdm.className="floatDM";
					tdm.innerHTML=data.d[i][1];
					dom.floatDM.appendChild(tdm);
					var pppp=jQuery(tdm);
					pppp.css({"left":"640px","top":""+(Math.random()*300)+"px"})
						.animate({"left":""+(-len[i]*36)+"px"},len[i]*25+5000,"linear",function(){
							pppp="";
							tdm.parentNode.removeChild(tdm);
						});
				}
			}
		}
	});
}
function sendMessage(){
	var t=dom.text.value.replace(/\ /g,"");
	if(t==""){
		alert("你还没有输入吐槽的内容呢！");
		dom.text.focus();
		return;
	}
	dom.text.value="发送中，请稍候……";
	dom.text.disabled="disabled";
	jQuery.ajax({
		url	:"./plugin.php?id=live_party:live_party&ajax",
		type:"POST",
		dataType:"json",
		contentType:"text/html",
		data:t,
		timeout:timeout,
		success:function(d){
			dom.text.value="";
			getData();
			dom.text.focus();
			dom.text.disabled=null;
		},
		error:function(d){dom.text.disabled=null;}
	});
}
function toggleDM(){
	dom.toggle.innerText=(dom.toggle.innerText=="●")?"○":"●";
	dom.floatDM.style.display=(dom.floatDM.style.display=="none")?"block":"none";
}
// 定时AJAX
getData();
setInterval(getData,ajaxLag);
dom.text.onkeypress=function(d){if(d.keyCode==13)sendMessage();}