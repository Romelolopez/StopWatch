var startTime;
var limite;
var temporizador;
var minutos;
var segundos;


function submission() {
	//Variables for minutes and seconds
    const min = document.getElementsByClassName("input")[0].value;
	
    const sec = document.getElementsByClassName("input")[1].value;
	
	
	//When the function is executed hide the inputs that are in the "center" div
	//So when the time div has HTML in it, it shows up in the replacement of the inputs
	document.getElementById("center").style.display = "none";

	//if anything is entered in the min or sec input add this time to limit
		
		//Uncomment this line for button/text action 
        //document.getElementById("txtTempo").value = min + sec / 60
		limite = parseFloat(min + sec / 60);

	"use strict";

	//we get the start time but using the date function
	startTime = new Date();

 	//Uncomment this line for button/text action 
	//limite = parseFloat(document.getElementById("txtTempo").value);

	//we float the limit to get the second (this is if you used the button as well)
	//limite = parseFloat(min + sec / 60);
 
	temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
	"use strict";

	// read the current time
	var currentTime = new Date();

	// calculate how many seconds passed since the start of the timer
	var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

	// convert seconds to minutes and seconds (below 60)
	minutos = Math.floor(elapsed / 60);
	segundos = Math.floor(elapsed % 60);

	
	// pad with zeroes on the left to look better
	if (minutos < 10) {
		minutos = "0" + minutos;
	}
	if (segundos < 10) {
		segundos = "0" + segundos;
	}
	
	// show the elapsed time
	//document.getElementsById("center").style.display = "none";
	
	//print the time to the time div
	document.getElementById("time").innerHTML = minutos + ":" + segundos;

	// check if we are above the time limit and set the color of the timer accordingly
	if (minutos+segundos/60 >= limite) {
        document.getElementById("circle").style.backgroundColor = "red";
		clearInterval(temporizador);
	} else {
		document.getElementById("circle").style.backgroundColor = "#ebebeb";
	}

}

function reset() {
	if (minutos+segundos/60 >= 0) {
		//stops the clock
		clearInterval(temporizador);
		//display the inputs in the div
		document.getElementById("center").style.display = "block";
		//set the time div to empty again
		document.getElementById("time").innerHTML = ""
		//make the cirle grey
		document.getElementById("circle").style.backgroundColor = "#ebebeb";
		//empty inputs
		document.getElementById("minutes").value = ""
    	document.getElementById("seconds").value = ""
		//put focus on minutes again
		document.getElementById("minutes").focus()
	}
}

