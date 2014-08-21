(function(){
	'use strict';

	var demo = document.getElementById('demo'),
	inputs = demo.getElementsByTagName('input'),
	A = inputs[0], B = inputs[2],
	equation = "a * a",
	offClick = function(e) {
		if ("INPUT" === e.target.nodeName && e.target.parentNode.id === "equation" || e.target.id === "equation"){
			//ignore
		} else {
			var eq = document.getElementById('equation');
			equation = inputs[1].value;
			eq.classList.add('hidden');
			window.removeEventListener('click', offClick);
		}

	}

	A.addEventListener('keyup', function(e){
		var a = parseInt(A.value, 10);
		B.value = isNaN(a) ? '' : eval(equation);
	});

	B.addEventListener('click', function(e){
		var eq = document.getElementById('equation');
			eq.classList.remove('hidden');
		setTimeout(function(){
			window.addEventListener('click', offClick);
		}, 0);
	});

	inputs[1].addEventListener('keyup', function(e){
		if (e.keyCode === 13){
			offClick(e);
		}
	});

}());
