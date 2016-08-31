//functions 
function HasItTouchedItself ()
{
	console.log(hasItTouchedItself);
 return hasItTouchedItself;
}
function SetSnakeColor (color)
{
	snakeColor = color;
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

//generate code
function readCode (code)
{
	var splitedCode = code.split('.');
	var basecode = "statement (condition) {todo}";

	switch (splitedCode[0])
{
	 case "if":
	 basecode = basecode.replace ("statement", "if");
	  switch (splitedCode[1])
	  {
	   case "toucheditself":
        if (HasItTouchedItself())
        {

        }
	   break;
	   case "touchedfood":
	   break;
	   case "touchedwalls":
	   break;
	   case "pressup":
	   break;
	   case "pressdown":
	   break;
	   case "pressleft":
	   break;
	   case "pressright":
	   break;
	   case "timepassed":
	   break;
	   default:
	}
	break;
	default:
	}

	
    
}
function runcode (code)
{
	var basecode = "";
	var array = code.split(".");

	if (array[0] == "1")
	{
      basecode = "if (1 == number) {statement}";
	}
	if (array[1] == "1")
	{
   basecode =  basecode.replace("number", "1");
	}
    basecode = basecode.replace("statement", "alert(something)");
    basecode = basecode.replace("something", array[2]);
   console.log(basecode);
   eval(basecode);
}