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
		document.getElementById("p_control_text").value = "Select a Condition"
	}
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
	
}
document.getElementById("if_p_button2").onclick = function()
{
	
}
document.getElementById("if_p_button3").onclick = function()
{
	
}
document.getElementById("if_p_button4").onclick = function()
{
	
}
document.getElementById("if_p_button5").onclick = function()
{
	
}
document.getElementById("if_p_button6").onclick = function()
{
	
}
document.getElementById("if_p_button7").onclick = function()
{
	
}
document.getElementById("if_p_button8").onclick = function()
{
	
}
document.getElementById("if_p_button9").onclick = function()
{
	
}
document.getElementById("if_p_button10").onclick = function()
{
	
}
document.getElementById("if_p_button11").onclick = function()
{
	
}