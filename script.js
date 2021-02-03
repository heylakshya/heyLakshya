function navPress(){
	document.getElementById("nav-links").classList.toggle("clicked");
	document.getElementById("arrow").classList.toggle("clicked");
	document.getElementById("glass").classList.toggle("clicked");
}

let typist = function(element, words) {
	this.element = element;
	this.words = words;
	this.timer = 190;
	this.txt = '';
	this.word_index = 0;
	this.isDeleting = false;
	this.type();
}

typist.prototype.type = function() {
	// console.log("test", this.timer, this.txt, this.isDeleting, this.txt!=='');
	if (!this.isDeleting && this.txt!==this.words[this.word_index]){
		this.txt = this.words[this.word_index].substring(0, this.txt.length + 1);
		this.timer = 230;
		this.timer += Math.random()*50;
		this.timer -= Math.random()*50;
	}
	else if (!this.isDeleting && this.txt===this.words[this.word_index]){
		this.isDeleting = true;
		this.timer = 1500;
	}
	else if (this.isDeleting && this.txt!==''){
		this.txt = this.words[this.word_index].substring(0, this.txt.length - 1);
		this.timer = 120;
	}
	else if(this.isDeleting && this.txt===''){
		this.isDeleting = false;
		this.timer = 150;
		this.word_index = (this.word_index + 1)%this.words.length;

	}
	this.element.innerText = this.txt;
	that = this;
	setTimeout(function() {that.type();}, this.timer);
}

window.onload = function() {
	let element = document.getElementById('cursor-text');
	let words = ["developer.", "builder.", "designer.", "researcher."];
	new typist(element, words);
};

function light_up_bg(){
	document.getElementById('contact-bg').classList.add("over");
	// document.getElementById('submit').classList.add("over");
}

function dark_up_bg(){
	document.getElementById('contact-bg').classList.remove("over");
	// document.getElementById('submit').classList.remove("over");
}

function blink_toggle(id){
	document.getElementById(id).classList.toggle("on");
	// console.log(id);
}

function blinker(){
	setTimeout(blink_toggle, 0, "arrow1");
	setTimeout(blink_toggle, 300, "arrow2");
	setTimeout(blink_toggle, 600, "arrow1");
	setTimeout(blink_toggle, 900, "arrow2");
}

function card_on(card){
	card.parentNode.children[1].classList.add('card-hover');
}

function card_off(card){
	card.parentNode.children[1].classList.remove('card-hover');
}

console.log(document.getElementsByClassName('cardimg'));
setInterval(blinker, 1200)
