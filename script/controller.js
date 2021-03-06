function welcomeAlert ()
{
	alert("Hello and Welcome to \"Educational Programming Game\" website, here you'll learn some\
 basic concepts of programming to start, click \"Start\" Button in the Control Panel or\ start programming by select a programming statement!");
}
function changeWidthHeightShape3 ()
{
	if(code.split('.')[0]== "if")
	{
		document.getElementById("wb_Shape3").style.width = "182px";
		document.getElementById("wb_Shape3").style.height ="295px";
		document.getElementById("Shape3").style.width = "182px";
		document.getElementById("Shape3").style.height ="295px";
		document.getElementById("p_control_text").style.left = "25px";

		document.getElementById("wb_Shape4").style.top = "110px";
		document.getElementById("wb_Shape4").style.left = "8px";
	}
}

function returnWidthHeightShape3 ()
{
	    document.getElementById("wb_Shape3").style.width = "162px";
		document.getElementById("wb_Shape3").style.height ="164px";
		document.getElementById("Shape3").style.width = "162px";
		document.getElementById("Shape3").style.height ="165px";
		document.getElementById("p_control_text").style.left = "20px";

		document.getElementById("wb_Shape4").style.top = "0px";
		document.getElementById("wb_Shape4").style.left = "0px";
}
function changeControlText (text)
{
	document.getElementById("p_control_text").childNodes[0].textContent =text;
}
//****************************
//**Statements controllers**
//****************************

//buttons objects:
//statements buttons
var if_btn = document.getElementById("p_button1");
var for_btn = document.getElementById("p_button2");
var switch_btn = document.getElementById("p_button3");
var while_btn = document.getElementById("p_button4");
var statements_buttons = [if_btn,for_btn,switch_btn,while_btn]; //in an array
//getting if buttons and putting them in an array
var if_statement_buttons = document.getElementsByClassName("if_btns");
//getting events buttons and putting them in an array
var events_buttons = document.getElementsByClassName("events_btns");
var all_control_items = [];
all_control_items[0] = document.getElementById("default_length");
all_control_items[1] = document.getElementById("default_direction_div");
all_control_items[2] = document.getElementById("snake_color");
//END
//declaring hide and show buttons:
function hideButtons (btn_array)
{
	for (var i = 0; i < btn_array.length; i++)
	{
		btn_array[i].style.visibility="hidden";
	}
}
function showButtons (btn_array)
{
	for (var i = 0; i < btn_array.length; i++)
	{
		btn_array[i].style.visibility="visible";
	}
}
function resizeShape3()
{
	document.getElementById("wb_Shape3").style.height = "140px";
	document.getElementById("Shape3").style.height = "140px";
	document.getElementById("wb_Shape4").style.top = "-25px";
		document.getElementById("wb_Shape4").style.left = "8px";
}
//END

var code ; //contains the player inserted code.
function setCodeDefault ()
{
	code ="keyword.condition.statement";
//	showBaseCodeOn();
}
setCodeDefault();
function setCodeKeyword (keyword)
{
	code = code.replace("keyword", keyword);
	showBaseCodeOn();
	showRealCodeOn();
}
function setCodeCondition (condition)
{
	code = code.replace("condition", condition);
    showBaseCodeOn();
    showRealCodeOn();
}
function setCodeStatement (statement)
{
	code = code.replace("statement", statement);
	showBaseCodeOn();
	showRealCodeOn();
}

showButtons(statements_buttons);//as default

//** Events **
document.body.onload = function ()
{
	isPlay=false; 
	welcomeAlert();
	window.scrollTo(0,0);
	document.getElementById("run_controllers").style.visibility = "hidden";
}
//base statements events
document.getElementById("p_button1").onclick = function()
{
 hideButtons(statements_buttons);//hiding statements buttons
 showButtons(if_statement_buttons);
 setCodeKeyword("if");
 changeWidthHeightShape3()
 changeControlText("Select a Condition");
}
document.getElementById("p_button2").onclick = function()
{
// hideButtons(statements_buttons);//hiding statements buttons
document.getElementById("p_button2").value = "Coming soon..";
}
document.getElementById("p_button3").onclick = function()
{
// hideButtons(statements_buttons);//hiding statements buttons
document.getElementById("p_button3").value = "Coming soon..";
}
document.getElementById("p_button4").onclick = function()
{
// hideButtons(statements_buttons);//hiding statements buttons
document.getElementById("p_button4").value = "Coming soon..";
}
//END
//if statements events

document.getElementById("if_p_button1").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);
	setCodeCondition("toucheditself");
	restartIfTouchedItself = false;


	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
document.getElementById("if_p_button2").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

    setCodeCondition("touchedfood");
	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
document.getElementById("if_p_button3").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);
	setCodeCondition("touchedwalls");
	restartIfTouchedWall = false;

	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
var timePassed = 0;
document.getElementById("if_p_button8").onclick = function()
{
	hideButtons(if_statement_buttons);
    timePassed = prompt("Please enter amount of time:","In seconds...");
	showButtons(events_buttons);

	setCodeCondition("timepassed");

	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
document.getElementById("if_p_button9").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	setCodeCondition("clickedsnake");

	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
document.getElementById("if_p_button10").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

    setCodeCondition("clickedfood");
	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
document.getElementById("if_p_button11").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

    setCodeCondition("clickedwhitespace");
	document.getElementById("p_control_text").childNodes[0].textContent = "Select a Statement";
}
//END********************
//events buttons
document.getElementById("events_button1").onclick = function()
{

    setCodeStatement("snakecolor");
	hideButtons(events_buttons);
	resizeShape3 ();
	document.getElementById("snake_color").style.visibility = "visible";
	document.getElementById("run_controllers").style.visibility = "visible";
    

	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button2").onclick = function()
{
	setCodeStatement("defaultlength");
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("default_length").style.visibility = "visible";
	document.getElementById("run_controllers").style.visibility="visible";
document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button3").onclick = function()
{
	setCodeStatement("snakespeed");
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("default_length").style.visibility="visible";
	document.getElementById("length_text").childNodes[0].textContent = "Insert speed:";
	document.getElementById("length_tb").value = "60";
	document.getElementById("length_tb").maxLength = "3";
	document.getElementById("run_controllers").style.visibility = "visible";

	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button5").onclick = function()
{

	setCodeStatement("startdirection");
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("default_direction_div").style.visibility = "visible";
	default_direction.col1[0].checked = true;
	document.getElementById("run_controllers").style.visibility="visible";

	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button6").onclick = function()
{

	setCodeStatement("foodcolor");
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("snake_color").style.visibility = "visible";
    document.getElementById("run_controllers").style.visibility ="visible";
	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button8").onclick = function()
{
	setCodeStatement("backgroundcolor");
	hideButtons(events_buttons);
	resizeShape3();

	document.getElementById("snake_color").style.visibility = "visible";
	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
	document.getElementById("run_controllers").style.visibility = "visible";
}
document.getElementById("events_button9").onclick = function()
{
	setCodeStatement("point");
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("default_length").style.visibility = "visible";
	document.getElementById("length_text").childNodes[0].textContent = "Points:";
	document.getElementById("length_tb").value = "1";
	document.getElementById("run_controllers").style.visibility="visible";
	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";
}
document.getElementById("events_button10").onclick = function()
{
    //todo:
	/*code+= ".restart";
	hideButtons(events_buttons);
	resizeShape3();
	document.getElementById("run_controllers").style.visibility = "visible";*/

	document.getElementById("events_button10").value = "Coming soon..";
}
document.getElementById("events_button11").onclick = function()
{
	setCodeStatement("prompt");
	hideButtons(events_buttons);
	resizeShape3();
    document.getElementById("default_length").style.visibility = "visible";
    document.getElementById("length_text").childNodes[0].textContent = "Insert Text:";
    var tb = document.getElementById("length_tb");
    tb.setAttribute("style","position:absolute;left:807px;top:245px;width:75px;height:27px;line-height:27px;z-index:8;");
    tb.value = "";
    tb.maxLength = "180";
    tb.style["background-repeat"] = "repeat";

	document.getElementById("run_controllers").style.visibility = "visible";
	document.getElementById("p_control_text").childNodes[0].textContent = "Insert a Value";

}
function showBaseCode(x)
{
	if (x)
	{
	document.getElementById("basecode").style.visibility = "visible";
	document.getElementById("realcode").style.visibility = "hidden";
	} else 
	{
	document.getElementById("basecode").style.visibility = "hidden";
	document.getElementById("realcode").style.visibility = "visible";
	}
	
}
//Runcode button event
var runClicked = false;
document.getElementById("runcode_button").onclick= function ()
{
    runClicked = true;
    defaultMode = false;

    document.getElementById("runcode_button").value = "Running...";
    document.getElementById("discard_button").value = "Stop Running";
}
document.getElementById("discard_button").onclick = function ()
{
	runClicked = false;
	//clearInterval(run_loop);
	Restart();
	if (document.getElementById("discard_button").value == "Discard")
	{
		setCodeDefault();
		document.getElementById("run_controllers").style.visibility = "hidden";
		hideButtons(all_control_items);
		showButtons (statements_buttons);
        returnWidthHeightShape3();

        restartIfTouchedWall = true;
        restartIfTouchedItself = true;
	}
	//clear all the mess;
	document.getElementById("runcode_button").value = "Run Code";
	document.getElementById("discard_button").value = "Discard";


}
var timeout ;
function running ()
{
if (code.split('.').length == 3)
{
	showRealCodeOn();
}


if (runClicked)
{
 
 var code_array = code.split('.');
    
 switch (code_array[0])
 {
	case "if":

	 switch(code_array[1])
	 {
	 	case "toucheditself":
	 	 switch (code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	var hasItTouchedItself = HasItTouchedItself();
	 	 //	console.log(hasItTouchedItself);
	 	 	if (hasItTouchedItself)
	 	 		{
	 	 			SetSnakeColor();
	 	 		}
	 	 	break;
	 	 	case "defaultlength":
	 	 	if(HasItTouchedItself())
	 	 	SetDefaultLength (document.getElementById("length_tb").value);
	 	 	break;
	 	 	case "startdirection":
	 	 	if (HasItTouchedItself()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasItTouchedItself()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasItTouchedItself()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if (HasItTouchedItself()) AddPoint();
	 	 	break;
	 	 	case "restart":
	 	 	if (HasItTouchedItself()) Restart();
	 	 	break;
	 	 	case "prompt":
	 	 	if (HasItTouchedItself()) AlertText();
	 	 	break;	 	 
	 	 }
	 	break;
	 	case "touchedwalls":
	 	 switch (code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 if (HasItTouchedWall())
	 	 	 {
	 	 	 	SetSnakeColor();
	 	 	 }
	 	 	 	
	 	 	break;
	 	 	case "defaultlength":
	 	 	if (HasItTouchedWall())
	 	 	SetDefaultLength (document.getElementById("length_tb").value);
	 	 	break;
	 	 	case "snakespeed":
	 	 	if (HasItTouchedWall())
	 	 	SetSnakeSpeed (document.getElementById("length_tb").value);
	 	 	break;
	 	 	case "startdirection":
	 	 	if (HasItTouchedWall()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasItTouchedWall()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasItTouchedWall()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if (HasItTouchedWall()) AddPoint();
	 	 	break;	
	 	 	case "restart":
	 	 	if (HasItTouchedWall()) Restart();
	 	 	break;
	 	 	case "prompt":
	 	 	if (HasItTouchedWall()) AlertText();
	 	 	break;
	 	 }
	 	break;

	 	case "touchedfood":
	 	 switch (code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 if (HasItTouchedFood())
	 	 	 {
	 	 	 	SetSnakeColor();
	 	 	 }
	 	 	break;
	 	 	case "defaultlength":
	 	 	if (HasItTouchedFood())
	 	 	SetDefaultLength (document.getElementById("length_tb").value);
	 	 	break;
	 	 	case "snakespeed":
	 	 	if (HasItTouchedFood())
	 	 	SetSnakeSpeed (document.getElementById("length_tb").value);
	 	 	break;
	 	 	case "startdirection":
	 	 	if (HasItTouchedFood()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasItTouchedFood()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasItTouchedFood()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if (HasItTouchedFood()) AddPoint();
	 	 	break;	
	 	 	case "restart":
	 	 	if (HasItTouchedFood()) Restart();
	 	 	break;
	 	 	case "prompt":
	 	 	if (HasItTouchedFood()) AlertText();
	 	 	break;
	 	 }
	 	break;
	 	case "timepassed":
	 	 switch(code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 	 timeout = setTimeout("SetSnakeColor()", timePassed*1000);
	 	 	break;
	 	 	case "defaultlength":
	 	 	
	 	 	timeout = setTimeout("SetDefaultLength (document.getElementById('length_tb').value)", timePassed*1000);;
	 	 	break;
	 	 	case "snakespeed":
	 	 	
	 	 	timeout = setTimeout("SetSnakeSpeed (document.getElementById('length_tb').value)", timePassed*1000);
	 	 	break;
	 	 	case "startdirection":
	 	    timeout = setTimeout("SetStartDirection()", timePassed*1000);
	 	 	break;
	 	 	case "foodcolor":
	 	 	timeout = setTimout("SetFoodColor ()", timePassed*1000);
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	timeout = setTimeout("SetBackgroundColor()", timePassed*1000);
	 	 	break;
	 	 	case "point":
	 	 	timeout =setTimeout ("AddPoint()", timePassed*1000);
	 	 	break;	
	 	 	case "restart":
	 	 	timeout = setTimeout("Restart()", timePassed*1000);
	 	 	break;
	 	 	case "prompt":
	 	    timeout = setTimeout("AlertText()", timePassed*1000);
	 	 	break;
	 	 }
	 	break;

	 	case "clickedsnake":
	 	 switch(code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 	if (HasItClicked()) SetSnakeColor();
	 	 	break;
	 	 	case "defaultlength":
	 	 	
	 	 	if (HasItClicked()) SetDefaultLength (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "snakespeed":
	 	 	
	 	 	if(HasItClicked()) SetSnakeSpeed (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "startdirection":
	 	    if(HasItClicked()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasItClicked()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasItClicked()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if(HasItClicked()) AddPoint();
	 	 	break;	
	 	 	case "restart":
	 	 	if(HasItClicked()) Restart();
	 	 	break;
	 	 	case "prompt":
	 	    if(HasItClicked()) AlertText();
	 	    break;
	 	 }
	 	break;

	 	case "clickedfood":
	 	 switch(code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 	if (HasFoodClicked()) SetSnakeColor();
	 	 	break;
	 	 	case "defaultlength":
	 	 	
	 	 	if (HasFoodClicked()) SetDefaultLength (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "snakespeed":
	 	 	
	 	 	if(HasFoodClicked()) SetSnakeSpeed (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "startdirection":
	 	    if(HasFoodClicked()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasFoodClicked()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasFoodClicked()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if(HasFoodClicked()) AddPoint();
	 	 	break;	
	 	 	case "restart":
	 	 	if(HasFoodClicked()) Restart();
	 	 	break;
	 	 	case "prompt":
	 	    if(HasFoodClicked()) AlertText();
	 	    break;
	 	 }
	 	break;

	 	case "clickedwhitespace":
	 	 switch(code_array[2])
	 	 {
	 	 	case "snakecolor":
	 	 	 	if (HasWhitespaceClicked()) SetSnakeColor();
	 	 	break;
	 	 	case "defaultlength":
	 	 	
	 	 	if (HasWhitespaceClicked()) SetDefaultLength (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "snakespeed":
	 	 	
	 	 	if(HasWhitespaceClicked()) SetSnakeSpeed (document.getElementById('length_tb').value);
	 	 	break;
	 	 	case "startdirection":
	 	    if(HasWhitespaceClicked()) SetStartDirection();
	 	 	break;
	 	 	case "foodcolor":
	 	 	if(HasWhitespaceClicked()) SetFoodColor ();
	 	 	break;
	 	 	case "backgroundcolor":
	 	 	if(HasWhitespaceClicked()) SetBackgroundColor();
	 	 	break;
	 	 	case "point":
	 	 	if(HasWhitespaceClicked()) AddPoint();
	 	 	break;	
	 	 	case "restart":
	 	 	if(HasWhitespaceClicked()) 
	 	 		{
	 	 			console.log("TRUE");
	 	 			Restart();
	 	 		}
	 	 	break;
	 	 	case "prompt":
	 	    if(HasWhitespaceClicked()) AlertText();
	 	    break;
	 	 }
	 	break;
	 }
	break;
	default:
	console.log("Code ERR");
 }
}

}
clearTimeout(timeout);
run_loop = setInterval(running, 0);