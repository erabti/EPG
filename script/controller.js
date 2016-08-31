function welcomeAlert ()
{
	alert("Hello and Welcome to \"Educational Programming Game\" website, here you'll learn some\
 basic concepts of programming to start, click \"Start\" Button in the Control Panel or\ start programming by select a programming statement!");
}
function changeWidthHeightShape3 ()
{
	if(code == "if")
	{
		document.getElementById("wb_Shape3").style.width = "182px";
		document.getElementById("wb_Shape3").style.height ="360px";
		document.getElementById("Shape3").style.width = "182px";
		document.getElementById("Shape3").style.height ="360px";
		document.getElementById("p_control_text").style.left = "25px";
	}
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
//END

var code =""; //contains the player instered code.

showButtons(statements_buttons);//as default

//** Events **
//base statements events
document.getElementById("p_button1").onclick = function()
{
 hideButtons(statements_buttons);//hiding statements buttons
 showButtons(if_statement_buttons);
 
 code += "if"
 changeWidthHeightShape3()
 changeControlText("Select a Condition");
}
document.getElementById("p_button2").onclick = function()
{
 hideButtons(statements_buttons);//hiding statements buttons
}
document.getElementById("p_button3").onclick = function()
{
 hideButtons(statements_buttons);//hiding statements buttons
}
document.getElementById("p_button4").onclick = function()
{
 hideButtons(statements_buttons);//hiding statements buttons
}
//END
//if statements events
document.getElementById("if_p_button1").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= ".toucheditself";
}
document.getElementById("if_p_button2").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= ".touchedfood";
}
document.getElementById("if_p_button3").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+="touchedwalls"
}
document.getElementById("if_p_button4").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);
	code+= "pressup";
}
document.getElementById("if_p_button5").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "pressdown";
}
document.getElementById("if_p_button6").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "pressleft"
}
document.getElementById("if_p_button7").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "pressright";
}
document.getElementById("if_p_button8").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "timepassed";
}
document.getElementById("if_p_button9").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code += "clickedsnake";
}
document.getElementById("if_p_button10").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "clickedfood";
}
document.getElementById("if_p_button11").onclick = function()
{
	hideButtons(if_statement_buttons);
	showButtons(events_buttons);

	code+= "clickedwhitespace";
}
//END********************
//events buttons
document.getElementById("events_button1").onclick = function()
{

	code+= ".snakecolor";
}
document.getElementById("events_button2").onclick = function()
{
	
	code+= ".defaultlength";
}
document.getElementById("events_button3").onclick = function()
{

	code+=".snakespeed"
}
document.getElementById("events_button4").onclick = function()
{
	code+= ".snakeshape";
}
document.getElementById("events_button5").onclick = function()
{

	code+= ".startdirection";
}
document.getElementById("events_button6").onclick = function()
{

	code+= ".foodcolor"
}
document.getElementById("events_button7").onclick = function()
{

	code+= ".foodshape";
}
document.getElementById("events_button8").onclick = function()
{

	code+= ".backgroundcolor";
}
document.getElementById("events_button9").onclick = function()
{

	code += ".point";
}
document.getElementById("events_button10").onclick = function()
{

	code+= ".restart";
}
document.getElementById("events_button11").onclick = function()
{

	code+= ".prompt";
}