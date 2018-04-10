


function prepareEmail(){
    clearRed();
	var enterKey = '%0D%0A';
	var subject = 'TGJ 2O - Portfolio';
	var recipient='kdeslauriers@bayvieglen.ca';
	var body = '';
    var error = false;
	var q1=document.querySelector('input[name="Question1"]:checked');
    if (q1 != null)
    body += "1. On a scale of 1 to 5, how much did you enjoy this course?" + enterKey + "Answer: " + q1.value;
    else {
        var temp = document.querySelector("#q1");
        temp.style.color = 'red';
    	error = true;
    }
    
   
    var q2=document.querySelector('input[name="Question2"]:checked');
     if (q2 != null)
    body += enterKey +enterKey + "2.Which Unit was your favourite?" + enterKey + "Answer: " + q2.value;
    else {
        var temp = document.querySelector("#q2");
        temp.style.color = 'red';
    	error = true;
    }
    
    var q3=document.querySelector('input[name="Question3"]:checked');
	if (q3 != null)
    body += enterKey +enterKey + "3.Which project did you like more?" + enterKey + "Answer: " + q3.value;
 	else {
        var temp = document.querySelector("#q3");
        temp.style.color = 'red';
    	error = true;
    }
    
    var q4=document.querySelector('input[name="Question4"]:checked');
    if (q4 != null)
    	body += enterKey +enterKey + "4.Which teacher did you have?" + enterKey + "Answer: " + q4.value;
    else {
        var temp = document.querySelector("#q4");
        temp.style.color = 'red';
    	error = true;
    }
    
    var q5=document.querySelector('input[name="Question5"]:checked');
    if (q5 != null)
    body += enterKey +enterKey + "5.Which Unit did you find the most difficult?" + enterKey + "Answer: " + q5.value;
	else {
        var temp = document.querySelector("#q5");
        temp.style.color = 'red';
    	error = true;
    }
    
    var q6=document.querySelector('input[name="Question6"]:checked');
    if (q6 != null)
    body += enterKey +enterKey + "6.How easy did you think this course would be at the beginning of the year" + enterKey + "Answer: " + q6.value;
	else {
        var temp = document.querySelector("#q6");
        temp.style.color = 'red';
    	error = true;
    }
 	
 	var q7=document.querySelector('input[name="Question7"]:checked');
    if (q7 != null)
    body += enterKey +enterKey + "7.Which Unit would you change?" + enterKey + "Answer: " + q7.value;
	else {
        var temp = document.querySelector("#q7");
        temp.style.color = 'red';
    	error = true;
    }
    
    var q8=document.querySelector('input[name="Question8"]:checked');
    if (q8 != null)
    body += enterKey +enterKey + "8.What do you think of Javascript?" + enterKey + "Answer: " + q8.value;
	else {
        var temp = document.querySelector("#q8");
        temp.style.color = 'red';
    	error = true;
    }
    if (!error){
        var emailString = 'mailto:'+recipient+'?subject='+subject+'&body='+body;
    	window.location.href=emailString;
    }else{
        alert("Please complete all of the Questions!");
    }
}

function clearRed(){
    var temp = document.querySelector("#q1");
    temp.style.color = 'white';
    temp = document.querySelector("#q2");
    temp.style.color = 'white';
    temp = document.querySelector("#q3");
    temp.style.color = 'white';
    temp = document.querySelector("#q4");
    temp.style.color = 'white';
    temp = document.querySelector("#q5");
    temp.style.color = 'white';
    temp = document.querySelector("#q6");
    temp.style.color = 'white';
    temp = document.querySelector("#q7");
    temp.style.color = 'white';
    temp = document.querySelector("#q8");
    temp.style.color = 'white';
}

