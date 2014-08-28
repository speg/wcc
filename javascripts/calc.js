(function(){
	'use strict';

	if ("true" === window.localStorage.mixer) {
		mixpanel.track = function(e){console.log(e)};
	}

	var demo = document.getElementById('demo'),
	inputs = demo.getElementsByTagName('input'),
	addInput = document.getElementById('addInput'),
	A = inputs[0], B = inputs[2], E = inputs[1],
	equation = "a * a",
	offClick = function(e) {
		if ("INPUT" === e.target.nodeName && e.target.parentNode.id === "equation" || e.target.id === "equation"){
			//ignore
		} else {
			var eq = document.getElementById('equation');
			console.log(inputs);
			equation = E.value;
			eq.classList.add('hidden');
			window.removeEventListener('click', offClick);
		}

	}

	A.addEventListener('keyup', function(e){
		var a = parseInt(A.value, 10);
		B.value = isNaN(a) ? '' : eval(equation);
		mixpanel.track("input keyup");
	});

	B.addEventListener('click', function(e){
		mixpanel.track("opened equation");
		var eq = document.getElementById('equation');
			eq.classList.remove('hidden');
		setTimeout(function(){
			window.addEventListener('click', offClick);
		}, 0);
	});

	addInput.addEventListener('click', function(e){
		mixpanel.track("added new input")
		var newNode = document.createElement('input');
		newNode.type = "text";
		A.parentNode.insertBefore(newNode, A.nextSibling);
	});

	inputs[1].addEventListener('keyup', function(e){
		if (e.keyCode === 13){
			offClick(e);
		}
	});
	document.getElementById('mc-embedded-subscribe').addEventListener('click', function(){
		ga('send', 'event', 'meta', 'gaveEmail');
	});
}());
