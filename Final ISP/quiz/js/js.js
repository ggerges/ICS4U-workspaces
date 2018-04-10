
function submit() {
    var firstName = document.querySelector('[name="fname"]').value;
    var lastName = document.querySelector('[name="lname"]').value;
    document.location.href = ("your_in.html?fn="+ firstName + "&ln="+ lastName)
}

var seun = 0;
var belissimo = 0;

function q1() {
    var qq1 = document.querySelector('[name="WhichItem"]:checked');
    if (qq1.value == "Sparkles" || qq1.value == "Hair" || qq1.value == "Kraft") {
        seun++
    } else belissimo++
}

function q2() {
    var qq2 = document.querySelector('[name="music"]:checked');
    if (qq2.value == "Glee" || qq2.value == "Spy" || qq2.value == "HarryPotter") {
        seun++
    } else belissimo++
}

function q3() {
    var qq3 = document.querySelector('#selectQuestion');
    if (qq3.value == "Monday" || qq3.value == "Tuesday" || qq3.value =="Friday" || qq3.value == "Saturday") {
        seun++
        belissimo++
    }
}

function q4() {
    var qq4 = document.querySelector('[name="summer"]:checked');
    if (qq4.value == "bunny" || qq4.value == "Engage") {
        seun++
    } else belissimo++
}

function q5(){
    var qq5 = document.querySelector('[name="future"]:checked')
    if (qq5.value == "Married" || qq5.value == "Rabbit") {
        seun++   
    } else belissimo++
}
function q6(){
    var qq6 = document.querySelector('[name="amazon"]:checked')
    if (qq6.value == "cage" || qq6.value == "sparkle"){
        seun++
    } else belissimo++
}
function q7(){
    var qq7 = document.querySelector('[name="dress"]:checked')
    if (qq7.value == "yes"){
        seun ++
    }  else belissimo++
}
function q8(){
    var qq8 = document.querySelector('[name="teach"]:checked')
    if (qq8.value == "yes"){
        seun++
    } else belissimo++

}
function q9(){
    var qq9 = document.querySelector('[name="have"]:checked')
    if (qq9.value == "yes"){
        seun++
    } else belissimo++

}
function q10(){
    var qq10 = document.querySelector('[name="test"]:checked')
    if (qq10.value == "yes"){
        seun++
    } else belissimo++
}
    
function processSubmit() {
    seun = 0;
    belissimo = 0;
    q1();
    q2();
    q3();
    q4();
    q5();
    q6();
    q7();
    q8();
    q9();
    q10();

    var firstName = getParameterByName('fn');
    var lastName = getParameterByName('ln');
    if (seun > belissimo) {

        document.location.href = "seun.html?fn="+ firstName + "&ln="+ lastName;
    } else if (seun < belissimo) {
        document.location.href = "belissimo.html?fn="+ firstName + "&ln="+ lastName
    } else if (seun == belissimo) {
        alert("you are nothing")
    }
}


// stolen from the web at http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getNames(){
    var name = getParameterByName('fn') + " " + getParameterByName('ln');
    var userName = document.querySelector('#userName');
    userName.innerHTML = name;
}

