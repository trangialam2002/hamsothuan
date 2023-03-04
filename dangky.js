var dangnhap=document.querySelector(".choose a:first-child")
var dangky=document.querySelector(".choose a:last-child")

dangnhap.onclick=function(){
	this.classList.remove("change1")
	this.classList.add("change2")
	dangky.classList.remove("change2")
	dangky.classList.add("change1")
}
dangky.onclick=function(){
	this.classList.remove("change1")
	this.classList.add("change2")
	dangnhap.classList.remove("change2")
	dangnhap.classList.add("change1")
}
