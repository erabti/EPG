EPG (beta 0.1)

*About:
EPG: Educational Programming Game.
EPG is a project which trying to give a very-basic programming concepts in fun, childish and easy way by playing games and give the freedom to change it and put conditions in the play-way using real-programming-statements therefore the player could have a basic overview about it and it's provide "live-code-show".

*(Beta-0.1) Features:
-Friendly GUI.
-Using version controls (git).
-"Good-Space-Using" technology.
-Animated effects.
-"live-code-show"

*Used Library:
-JScolor.js

*Used Snippets:
-Snake Game is an open source project, some codes has been used from it in the div-->"gameContainer".

*Basic achieved functionality overview:
{
**Collecting data from inserted code by buttons:
Used a variable called "code" that contain the any-basic code as "keyword(condition){statement}" and collect the data by adding (replacing) the any-basic code word, for example: "keyword" --> "if" "condition'--> "TouchedWall==true" etc..

**Compiling the "code" variable:
-Each time the player click a programming-statement buttons (buttons in the Shape3) the any-basic code be replaced with a specific word.
-These word will be (filtered) by the switch statement in the "control.js" file to reach the right function for the right button
-After that the right function which is in "runcode.js" file will be called within the switch statement.

**Code panel:
-The function "showBaseCodeOn()" and "showRealCodeOn()" will be called each time any programming-statement buttons to replace the any-basic code on the code-panel with the specificed code-text wether in "Base Code" mode or "Real Code" mode.

**Control panel (start-stop, puse-resume, reset buttons):
Start button:
-Using the function play() onclick the element to play and stop the game (good-space-using).
-The variable isPlay is the responsible of dismiss snippets in the "index.js" file in order to stop and start the game, isPlay = true play the game isPlay=false stop the game.
Puse button:
-Using the function puse() onclick the element to puse and resume the game (good-space-using) when it's playing.
-The variable movement is the responsible of dismiss snippets in the "index.js" file in order to resume and puse the game, movement = true resume the game movement=false puse the game.
Reset button:
-Is just redirect to the "index.htm" file (same file in order to refresh the website).
}

*Instructions:
-The main file is "index.html" open it on a modern-browser('Mozilla Firefox' recommended).
-'Google Chrome'(and some other browsers) can't open the "index.html" file without using a server.

*By:
This project has been done by "Ahmed Erabti" as one of the "test projects" for Mrs.Shaku Atre and the "WorldWomanWarrior" http://www.worldwomanwarrior.com/ website.

*Contact info:
phone-number: +20 01014414919
email-address:ahmed.erabti@yahoo.com, med.erabti@gamil.com
Address:Cairo - Egype, Nasr City-Elemdad wa Eltamween st. 10 21.
provider website:http://www.worldwomanwarrior.com/ 
