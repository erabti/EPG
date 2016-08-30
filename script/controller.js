function welcomeAlert ()
{
	alert("Hello and Welcome to \"Educational Programming Game\" website, here you'll learn some\
 basic concepts of programming to start, click \"Start\" Button in the Control Panel or\ start programming by select a programming statement!");
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
showButtons(statements_buttons);