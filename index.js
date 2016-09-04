var isPlay = true;
var stopNow = false;//stopiing the game without deleting the whole cnavas
var movement = true;
var hasItTouchedItself = false;
var hasItTouchedWall = false;
var hasItTouchedFood = false;
var snakeColor = "blue";
var snakeSpeed = 60;
var foodColor = "blue";
var defaultLength = 5;
var startDirection = "right";
var backgroundColor = "white";
var score;

var restartIfTouchedWall = true;
var restartIfTouchedItself = true;

var snake_array; //an array of cells to make up the snake
var food;//
function puse () //puse and resume the game
{
	if (isPlay)
	{
    movement = !movement; //do the opp of the movemnt value
	var button2 = document.getElementById ("Button2"); //gets the object Button2
	//Changing the button text according to the statution
	if(movement) {button2.value = "Puse";window.scrollTo(0, window.scrollMaxY);}
	else if (!movement) button2.value = "Resume";
	
	}
    

	
}

function play ()
{
	var button1 = document.getElementById("Button1"); //gets Button1
	var gameContainer = document.getElementById("gameContainer"); //gets gameContainer div
    if (!movement) puse ();
	isPlay = !isPlay; //do the opp of the isPlay value
    
    if (isPlay) {
    button1.value = "Stop";
    gameContainer.style.visibility = "visible";
    }
    else if (!isPlay) {
 
    	button1.value = "Start";
    	gameContainer.style.visibility = "hidden";

    }
    


}

$(document).ready(function(){

	//Canvas stuff
	var canvas = $("#canvas")[0];

	if (canvas != undefined) var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	
	//Lets save the cell width in a variable for easy control
	var cw = 10;
	var d;
	//Lets create the snake now
	
	function init()
	{
		d = startDirection; //default direction
		create_snake();
		create_food(); //Now we can see the food particle
		//finally lets display the score
		score = 0;
		
		//Lets move the snake now using a timer which will trigger the paint function
		//every 60ms
		if(typeof game_loop != "undefined") 
			{
				clearInterval(game_loop);
			}
			console.log (paint);

		// Puse Button (Button2) logic
        if (movement){
        	game_loop = setInterval(paint, snakeSpeed);
        }
        else if (movement == false)
        {
        	paint ();
        }
       
	}
	init();
	

	function create_snake()
	{
		var length = defaultLength; //Length of the snake
		snake_array = []; //Empty array to start with
		for(var i = length-1; i>=0; i--)
		{
			//This will create a horizontal snake starting from the top left
			snake_array.push({x: i, y:0});
		}
	}
	
	//Lets create the food now
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		//This will create a cell with x/y between 0-44
		//Because there are 45(450/10) positions accross the rows and columns
	}
	
	//Lets paint the snake now
	function paint()
	{
		if (isPlay) 
		{
         //To avoid the snake trail we need to paint the BG on every frame
		//Lets paint the canvas now
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, w, h);
		if (!runClicked)
		ctx.strokeStyle = "black";
	    if(runClicked)
	    ctx.strokeStyle = "red";
		ctx.strokeRect(0, 0, w, h);

		
		//The movement code for the snake to come here.
		//The logic is simple
		//Pop out the tail cell and place it infront of the head cell
	
			var nx = snake_array[0].x;
		    var ny = snake_array[0].y;
	
		//These were the position of the head cell.
		//We will increment it to get the new head position
		//Lets add proper direction based movement now
			if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;
      

		//Lets add the game over clauses now
		//This will restart the game if the snake hits the wall
		//Lets add the code for body collision
		//Now if the head of the snake bumps into its body, the game will restart
   
        if (check_collision(nx, ny, snake_array))
        {
        	hasItTouchedItself = true;
        	if (restartIfTouchedItself)
        	{
        		init(); //restarting;
        		return; //clean up the mess
        	}
        }else 
        {
        	hasItTouchedItself = false;
        }
        if ((nx == -1 || nx == w/cw || ny == -1 || ny == h/cw ))
        {
        	hasItTouchedWall = true;
        	if (restartIfTouchedWall)
        	{
        		init()//restarting;
        		return; //clean up the mess
        	}
        }else
        {
        	hasItTouchedWall = false;
        }

		if (stopNow)
		{
			if(movement)
			init();
			return;
		}

		if (movement ==false) {
			nx = 0;
			ny = 0;
}
		//Lets write the code to make the snake eat the food
		//The logic is simple
		//If the new head position matches with that of the food,
		//Create a new head instead of moving the tail
		if(nx == food.x && ny == food.y)
		{
			var tail = {x: nx, y: ny};
			hasItTouchedFood = true;
			score++;
			//Create new food
			create_food();
		}
		else
		{
			var tail = snake_array;
			hasItTouchedFood = false;
			if (movement)
		    tail = snake_array.pop(); //pops out the last cell
			tail.x = nx; tail.y = ny;

			
		}
		//The snake can now eat the food.
		if (movement)
		snake_array.unshift(tail); //puts back the tail as the first cell
		
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			//Lets paint 10px wide cells
			paint_cell(c.x, c.y,true);
		}
		
		//Lets paint the food
		paint_cell(food.x, food.y,false);
		//Lets paint the score
		var score_text = "Score: " + score;
		ctx.fillText(score_text, 5, h-5);
		} 
        if (isPlay==false)
        {
            init ();
        	
        }
	}
	
	//Lets first create a generic function to paint cells
	function paint_cell(x, y,isItSnake)
	{

		if (isItSnake)
		ctx.fillStyle = snakeColor;
	    else
	    ctx.fillStyle = foodColor;

		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
		ctx.lineWidth = 0;
	}
	
	function check_collision(x, y, array)
	{
		//This function will check if the provided x/y coordinates exist
		//in an array of cells or not
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	
	//Lets add the keyboard controls now
	$(document).keydown(function(e){
		var key = e.which;
		
		//We will add another clause to prevent reverse gear
		if(key == "37" && d != "right") {e.preventDefault();d = "left";}
		else if(key == "38" && d != "down") {e.preventDefault();d = "up";}
		else if(key == "39" && d != "left") {e.preventDefault();d = "right";}
		else if(key == "40" && d != "up") {e.preventDefault();d = "down";}
		//The snake is now keyboard controllable
	}
	)	
	
	
	
})	