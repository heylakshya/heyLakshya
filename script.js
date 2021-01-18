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
	console.log("test", this.timer, this.txt, this.isDeleting, this.txt!=='');
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
	let words = ["collaborate.", "build.", "design.", "develop.", "research."];
	new typist(element, words);
};
