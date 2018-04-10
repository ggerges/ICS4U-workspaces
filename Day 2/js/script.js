function hoverAction(){
	//console.log("hi");
	//alert('bye');
	var el = document.getElementById('sample');
	el.style.color = 'green'; //each element has a style property which is a map with key as the css property
	var arr = arrayPractice();
	//arr[7]();
	var answer = bigMathFunction(1,20);

	var elements = document.querySelectorAll('h1'); //returns array - same selector rules as css
	var mapMe = mapPractice();
	var i;
	for(i = 0; i<elements.length; i++){
		elements[i].style.color = mapMe.color;
	}

	var mapMe2 = mapPractice2();


	


}

function bigMathFunction(i,j){
	var count = 0;
	var sum =0;
	for(count = 0; count<j; count++){
		sum+=count;
	}
	var evenOdd = (sum%2 == 0) ? 'even' : 'odd';
	
	var el = document.getElementById('p3');
	el.innerHTML = 'This is the sum: ' + sum + ' and it\'s ' + evenOdd;
	el.innerHTML = '<img src = images/'/>;
	document.location = "website";
		console.log('This is the sum :' + sum + ' and it\'s  ' + evenOdd);
	
	
	console.log('This is the sum: ' + sum);
	return sum;
}


var fn = function(){
	alert(1);

}

function arrayPractice(){
	var arr = [];
	arr[0] = 'hi';
	arr[1] = 6;
	arr[8] = true;
	arr[7] = fn;


	var i = 0; 
	for(i = 0; i<arr.length;i++){
		if(arr[i] !== undefined){
			console.log(arr[i]);	
		}
	}
	return arr;
}

function mapPractice(){
	var obj = {};
	obj.color = 'red';
	obj['color'] = 'blue';

	var ex = 'color';
	obj[ex] = 'yellow';
	return obj;
}

function mapPractice2(){
	var objArr = {};
	var i;
	for(i = 0; i<10; i++){
		objArr[i] = 'hi';
	}
	return objArr;
}