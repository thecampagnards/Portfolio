var temp = 20;

function modifValues90(){ 
	var val = $('.progress-90 progress').attr('value');
	var skill = $('.progress-90 progress').attr('skill');
	if(val>=90){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-90 progress').attr('value',newVal).text(txt);
	$('.progress-90 strong').html(txt);
} setInterval(function(){
	modifValues90();
},temp);
function modifValues80(){ 
	var val = $('.progress-80 progress').attr('value');
	var skill = $('.progress-80 progress').attr('skill');
	if(val>=80){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-80 progress').attr('value',newVal).text(txt);
	$('.progress-80 strong').html(txt);
} setInterval(function(){
	modifValues80();
},temp);
function modifValues70(){ 
	var val = $('.progress-70 progress').attr('value');
	var skill = $('.progress-70 progress').attr('skill');
	if(val>=70){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-70 progress').attr('value',newVal).text(txt);
	$('.progress-70 strong').html(txt);
} setInterval(function(){
	modifValues70();
},temp);
function modifValues60(){ 
	var val = $('.progress-60 progress').attr('value');
	var skill = $('.progress-60 progress').attr('skill');
	if(val>=60){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-60 progress').attr('value',newVal).text(txt);
	$('.progress-60 strong').html(txt);
} setInterval(function(){
	modifValues60();
},temp);
function modifValues50(){ 
	var val = $('.progress-50 progress').attr('value');
	var skill = $('.progress-50 progress').attr('skill');
	if(val>=50){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-50 progress').attr('value',newVal).text(txt);
	$('.progress-50 strong').html(txt);
} setInterval(function(){
	modifValues50();
},temp);
function modifValues10(){ 
	var val = $('.progress-10 progress').attr('value');
	var skill = $('.progress-10 progress').attr('skill');
	if(val>=10){
		return;
	} 
	var newVal = val*1+0.95; 
	var txt = Math.floor(newVal)+'%';
	$('.progress-10 progress').attr('value',newVal).text(txt);
	$('.progress-10 strong').html(txt);
} setInterval(function(){
	modifValues10();
},temp);
