var arrBigImg=document.querySelectorAll(".detail_left .a1 img");
var soluongimg=arrBigImg.length;

var arrSmallImg=document.querySelectorAll(".detail_left .a3 img");

for(var i=0;i<soluongimg;i++){
	arrSmallImg[i].onclick=function(){
		for(var j=0;j<soluongimg;j++){
			arrSmallImg[j].classList.remove("vienxanh");
			arrBigImg[j].classList.remove("action");
		}
		this.classList.add("vienxanh");
		var n=this;
		for(var vitri=0;n=n.previousElementSibling;vitri++){

		}
		arrBigImg[vitri].classList.add("action");
	}

}