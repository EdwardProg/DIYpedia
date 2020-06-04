function f1() {
	var o = document.getElementById('new');
	var t = document.getElementById('popular');
	var fr = document.getElementById('a1');
	var fo = document.getElementById('a2');

	o.style.backgroundColor = '#3A4950';
	t.style.backgroundColor = '#FFFFFF';

	fr.style.color = "#FFFFFF";
	fo.style.color = "#000000";
}

function f2() {
	var o = document.getElementById('new');
	var t = document.getElementById('popular');
	var fr = document.getElementById('a1');
	var fo = document.getElementById('a2');

	o.style.backgroundColor = '#FFFFFF';
	t.style.backgroundColor = '#3A4950';

	fr.style.color = "#000000";
	fo.style.color = "#FFFFFF";
}

function f3() {
	window.print();
}

function show() {
	document.getElementById('saidbar').classList.toggle('active');
}