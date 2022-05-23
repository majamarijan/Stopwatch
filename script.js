let stopWatch;
let hh, mm, ss, ms;
let counter = 0;
let countMS = 0;
let time1, time2;
let wrapper;
let pressed = false;
let startBtn, resetBtn;


window.onload = function() {
	stopWatch = document.querySelector('#stopWatch');
	wrapper = document.querySelector('#wrapper');
	hh = document.querySelector('.hh');
	mm = document.querySelector('.mm');
	ss = document.querySelector('.ss');
	ms = document.querySelector('.ms');
	startBtn = document.querySelector('.startBtn');
	resetBtn = document.querySelector('.resetBtn');
	startBtn.addEventListener('mouseenter', function(e) {
		e.target.classList.add('hover');
	},false);
	startBtn.addEventListener('mouseleave', function(e) {
		e.target.classList.remove('hover');
	},false);
	resetBtn.addEventListener('mouseenter', function(e) {
		e.target.classList.add('hover');
	},false);
	resetBtn.addEventListener('mouseleave', function(e) {
		e.target.classList.remove('hover');
	},false);
	
	keyPressed();
}

function keyPressed() {
	window.addEventListener('keydown',function(e){
		if(startBtn.innerHTML === 'Start'){
			startBtn.classList.add('dark'); 
		}else {
			startBtn.classList.remove('dark'); 
		}
		
		if(e.key == ' ' && pressed == false) {
			startBtn.disabled = true;
			pressed = true; 
			start();
		}else {
			pressed = false;
			clear();
		}
	}, false);
}

function time(calc,num) {
	return (calc%num < 10) ? `0${calc%num}`:`${calc%num}`;
}

function display() {
	counter++;	
	hh.innerHTML = `${time(Math.floor(counter/3600), 24)}`;
	mm.innerHTML = `${time(Math.floor((counter%3600)/60), 60)}`;
	ss.innerHTML = `${time(counter, 60)}`;
}

function updateMS() {
	countMS++;
	ms.innerHTML = `${time(countMS, 100)}`;
}

function start() {
	if(startBtn.innerHTML === 'Start') {
		pressed = true; 
		startBtn.innerHTML = 'Stop'; 
		time1 =	setInterval(display, 1000);
		time2 = setInterval(updateMS, 10);
	}else {
		pressed = false;
		clear();
	}
}

function reset(e){
	e.target.blur();
	e.target.background = 'none';
	clear();
	pressed = false; 
	document.querySelector('.startBtn').disabled = false; 
	document.querySelector('.startBtn').innerHTML = 'Start';
	countMS = counter=0;
	[hh,mm,ss,ms].map((elem)=>elem.innerHTML = '00');
}

function clear() {
	startBtn.innerHTML = 'Start';
	startBtn.classList.remove('dark'); 
	startBtn.disabled = false;
	startBtn.blur();
	clearInterval(time1);
	clearInterval(time2);
}

