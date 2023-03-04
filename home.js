var search=document.querySelector(".search a .fa.fa-search");
var left=document.getElementsByClassName("fa-chevron-left");
var right=document.getElementsByClassName("fa-chevron-right");
var arr=document.querySelectorAll(".slide img");
var soluong=$(arr).length;
var vitri=0;
var chuyendong="";
$(search).click(function(){
	console.log("ok");
});
$(left).click(function(){
	clearInterval(chuyendong);
	var slidehientai=vitri;
	if(vitri==0){
		vitri=soluong-1;
	}
	else if(vitri>0){
		vitri--;
	}
	var slidetieptheo=vitri;
	$(arr[slidehientai]).addClass("hieuung1");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("show");
		$(arr[slidehientai]).removeClass("hieuung1");

	});
	$(arr[slidetieptheo]).addClass("show");
	$(arr[slidetieptheo]).addClass("hieuung2");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("hieuung2");
	});
});

$(right).click(function(){
	clearInterval(chuyendong);
	var slidehientai=vitri;
	if(vitri<soluong-1){
		vitri++;
	}
	else if(vitri==soluong-1){
		vitri=0;
	}
	var slidetieptheo=vitri;
	$(arr[slidehientai]).addClass("hieuung3");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("show");
		$(arr[slidehientai]).removeClass("hieuung3");

	});
	$(arr[slidetieptheo]).addClass("show");
	$(arr[slidetieptheo]).addClass("hieuung2");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("hieuung2");
	});
});

chuyendong=setInterval(function(){
	var slidehientai=vitri;
	if(vitri==0){
		vitri=soluong-1;
	}
	else if(vitri>0){
		vitri--;
	}
	var slidetieptheo=vitri;
	$(arr[slidehientai]).addClass("hieuung1");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("show");
		$(arr[slidehientai]).removeClass("hieuung1");

	});
	$(arr[slidetieptheo]).addClass("show");
	$(arr[slidetieptheo]).addClass("hieuung2");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("hieuung2");
	});
},3000);

