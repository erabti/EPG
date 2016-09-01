//varaibles
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
function PickSnakeColor (colorPicker)
{
    snake_color = '#'+colorPicker.toString();
	var color_picker = document.getElementById("color_picker1");
	color_picker.value = '#'+colorPicker.toString();
}
function SetSnakeColor ()
{
	snakeColor = snake_color
}
function SetSnakeSpeed (speed) //needs restarting
{
	snakeSpeed = speed;
}
function SetFoodColor (color)
{
	foodColor = color;
}
function SetDefaultLength (length)
{
	if (length == 0);
	defaultLength = length;
}
function SetStartDirection (direction)
{
	startDirection = direction;
}
function SetBackgroundColor (color)
{
	backgroundColor = color;
}
function AddPoint ()
{
	score++;
}
function Restart ()
{
	stopNow = true;
	function startItAgain()
	{
		stopNow = false ;
	}
	var timeout = setTimeout (startItAgain, 1);
}
function AlertText (text)
{
  window.alert(text);
}