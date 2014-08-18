(function(){
	'use strict';

	var demo = document.getElementById('demo'),
	inputs = demo.getElementsByTagName('input'),
	A = inputs[0], B = inputs[1];

	A.addEventListener('keyup', function(e){
		var a = parseInt(A.value, 10);
		B.value = isNaN(a) ? '' : a * a;
	});

}());