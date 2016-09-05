//varaibles
var value = ""
var snake_color = "#4700e0";
defaultMode = true;
//functions 
function HasItTouchedItself ()
{
 return hasItTouchedItself;
}
function HasItTouchedWall ()
{
	return hasItTouchedWall
}
function HasItTouchedFood ()
{
	return hasItTouchedFood;
}
function HaItClicked ()
{

}
function PickSnakeColor (colorPicker)
{
    snake_color = '#'+colorPicker.toString();
	var color_picker = document.getElementById("color_picker1");
	color_picker.value = '#'+colorPicker.toString();
}
function SetSnakeColor ()
{
	snakeColor = snake_color;
	value = snake_color;
}
function SetSnakeSpeed (speed) //needs restarting
{
	snakeSpeed = speed;
}
function SetFoodColor (color)
{
	foodColor = snake_color;//a shortcut ^_^
	console.log("SetFoodColor called");
	value = snake_color;
}
function SetDefaultLength (length)
{
	if (length == 0 || length <=0) defaultLength = 1;
	else defaultLength = length;
	value = length;
}
function SetStartDirection ()
{
	var direction = "right";
	if(default_direction.col1[0].checked) direction = "right";
	else if (default_direction.col1[1].checked) direction = "left";
	else if(default_direction.col1[2].checked) direction = "down";
	else if (default_direction.col1[3].checked) direction = "up";
	startDirection = direction;
	value = direction;
}
function SetBackgroundColor (color)
{
	backgroundColor = snake_color;
	value = snake_color;
}
function AddPoint ()
{
	var points = 1;
	try {
		point = document.getElementById("length_text");
	}
	catch(e)
	{
		console.log("ERR");
	};
	if (points >= 0 || points <0)
	score+= points;
    value = points;
}
function Restart ()
{
	
}
function AlertText ()
{
	var text = document.getElementById("length_tb").value;
	value = text;
  if (text != undefined)
  window.alert(text);
else {
	window.alert("");
}
}

var snakeClicked, foodClicked, whitespaceClicked;

function onmousedownCanvas (event)
{
window.scrollTo(0,scrollMaxY);
whitespaceClicked = true;//sets it to true because the whole canvas is white space
var mx, my;
if(event)
{
 mx = event.clientX;
 my = event.clientY;
}
else 
{
	mx = 0;
	my=0;
}
//snake
var snakeLength = snake_array.length ;
var minCellWidthX = snake_array[snakeLength-1].x * 10 + 439;
var minCellWidthY = snake_array[snakeLength-1].y * 10 + 87;
var maxCellWidthY = snake_array[0].y *10 + 97;
var maxCellWidthX = snake_array[0].x *10 +449; 
//todo:make it better in sensetive way,, which mean evert cell should be recognized not first and last
if ((mx >= minCellWidthX && mx <= maxCellWidthX)&&(my >= minCellWidthY && my <= maxCellWidthY))
{
	snakeClicked = true;

} else {
	snakeClicked = false;
}

//food

var minFx = food.x*10+439;//min food.x
var minFy = food.y*10+87; //min food.y
var maxFx = minFx +10;
var maxFy = minFy +10;

if((mx >=  minFx && mx <= maxFx) && (my >= minFy && my <= maxFy))
{
	foodClicked = true;
}
else {
	foodClicked = false;
}
////in case the user used touch pad instead of mouse:
var stopClick = setInterval("foodClicked = false;snakeClicked = false;whitespaceClicked=false;",6);
//END
}
function onmouseupCanvas ()
{
	snakeClicked = false;
	foodClicked = false;
	whitespaceClicked = false;
}
function HasItClicked ()
{
	return snakeClicked;
}
function HasFoodClicked()
{
	return foodClicked;
}
function HasWhitespaceClicked ()
{
	return whitespaceClicked;
}