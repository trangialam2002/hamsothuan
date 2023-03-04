var left=document.querySelector(".right_slide .fa-chevron-left");
var right=document.querySelector(".right_slide .fa-chevron-right");
var arr=document.querySelectorAll(".right_slide img");
var soluong=$(arr).length;
var vitri=0;
var chuyendong="";

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
	$(arr[slidehientai]).addClass("chuyendong1");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("display");
		$(arr[slidehientai]).removeClass("chuyendong1");

	});
	$(arr[slidetieptheo]).addClass("display");
	$(arr[slidetieptheo]).addClass("chuyendong2");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("chuyendong2");
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
	$(arr[slidehientai]).addClass("chuyendong3");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("display");
		$(arr[slidehientai]).removeClass("chuyendong3");

	});
	$(arr[slidetieptheo]).addClass("display");
	$(arr[slidetieptheo]).addClass("chuyendong4");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("chuyendong4");
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
	$(arr[slidehientai]).addClass("chuyendong1");
	$(arr[slidehientai]).one("webkitAnimationEnd",function(){
		$(arr[slidehientai]).removeClass("display");
		$(arr[slidehientai]).removeClass("chuyendong1");

	});
	$(arr[slidetieptheo]).addClass("display");
	$(arr[slidetieptheo]).addClass("chuyendong2");
	$(arr[slidetieptheo]).one("webkitAnimationEnd",function(){
		$(arr[slidetieptheo]).removeClass("chuyendong2");
	});
},3000);

