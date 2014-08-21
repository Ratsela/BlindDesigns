sliderInt=1;
sliderNext=2;
count = $("#main_area >img").size();
$(document).ready(function(){
$("#main_area > img#1").fadeIn(600);
	//startSlider();
});
function startSlider(){
	count = $("#main_area >img").size();
	loop = setInterval(function(){
					
	if(sliderNext > count)
	{
		sliderNext=1;
		sliderInt=1;
	}
					
	$("#main_area >img").fadeOut(600);
	$("#main_area >img#" + sliderNext).fadeIn(600);
	sliderInt = sliderNext;
	sliderNext = sliderNext + 1;
	},3000)
	}
function stopLoop(){
	window.clearInterval(loop);
}
function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
	}
function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);
	}
function showSlide(id){
	startSlider();
	stopLoop();
	if(id > count){
		id = 1;
	}
	else if(id < 1){
		id = count;
		}
	$("#main_area >img").fadeOut(600);
	$("#main_area >img#" + sliderNext).fadeIn(600);
	sliderInt = id;
	sliderNext = id + 1;
	}
	
