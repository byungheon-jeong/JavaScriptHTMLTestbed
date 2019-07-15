function pointOut(button) {
	document.getElementByIDName('description').innerHTML = button.getStats();

}

function getStats(){
	var string;
	for (var i = this.stas.length - 1; i >= 0; i--) {
		string.concat(this.stas[i]);
	}
	return string;
}