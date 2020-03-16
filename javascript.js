

function isBlank(inputField){
    if(inputField.type=="checkbox"||inputField.type=="radio"){
	if(inputField.checked)
	    return false;
	return true;
    }
    if (inputField.value==""){
	return true;
    
    }
    return false;
 
}




function makeRed(inputDiv){
   	inputDiv.style.backgroundColor="#FFC1C1";
	inputDiv.parentNode.style.color="#FF0000";
}

function makeClean(inputDiv){
	
	inputDiv.parentNode.style.color="#79616f";		
}

window.onload = function(){
    var mainForm = document.getElementById("mainForm");
    var requiredInputs = document.querySelectorAll(".required");
    for (var i=0; i < requiredInputs.length; i++){
	requiredInputs[i].onfocus = function(){
	    this.style.backgroundColor = "#eee";
	}
    requiredInputs[i].onblur = function(){
	    this.style.backgroundColor = "#fff";
	}
    }
    mainForm.onsubmit = function isvalid(e){
	var requiredInputs = document.querySelectorAll(".required");
	for (var i=0; i < requiredInputs.length; i++){
	    if( isBlank(requiredInputs[i]) ){
		e.preventDefault();
           
		makeRed(requiredInputs[i]);
          
	    }
        
	    else {
		makeClean(requiredInputs[i]);
            
          
           
            
            
	    }
      
         
	}
        
          alert('أملأ البيانات المطلوبة ');
    }
   
}




function mydate(){

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var monthName;
	
var hours = currentDate.getHours(); 
var mins = currentDate.getMinutes(); 
var secs = currentDate.getSeconds(); 
var strToAppend;
if (hours >12 )
{
	hours1 = "0" + (hours - 12);
strToAppend = "PM";
}
else if (hours <12)
{
	hours1 = "0" + hours;
	strToAppend = "AM";
}
else
{
	hours1 = hours;
	strToAppend = "PM";
}
	
if(mins<10)
mins = "0" + mins;


switch (month)
{
	case 1:
		monthName = "January";
		break;
	case 2:
		monthName = "February";
		break;
	case 3:
		monthName = "March";
		break;
	case 4:
		monthName = "April";
		break;
	case 5:
		monthName = "May";
		break;
	case 6:
		monthName = "June";
		break;
	case 7:
		monthName = "July";
		break;
	case 8:
		monthName = "August";
		break;
	case 9:
		monthName = "September";
		break;
	case 10:
		monthName = "October";
		break;
	case 11:
		monthName = "November";
		break;
	case 12:
		monthName = "December";
		break;
}

var year = currentDate.getFullYear();
var myString;
myString = "Today is " + day +  " - " + monthName + " - " + year + " current time is  " + hours1 + ":" + mins + " " + strToAppend + ".";
    var d=document.getElementById("date");
d=document.write(myString);
    
    }
	
	// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}