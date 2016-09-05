var realkeyword = document.getElementById('keyword_code');
var realcondition = document.getElementById('condition_code');
var realstatement = document.getElementById('statement_code');
var basekeyword = document.getElementById('keyword_code_b');
var basecondition = document.getElementById('condition_code_b');
var basestatement = document.getElementById('statement_code_b');

//Words used for replacement of "value"
function setSomething (something, text)
{
	something.childNodes[0].textContent = text;
}

function showBaseCodeOn ()
{
var codeArray = code.split('.');
var code_keyword = codeArray[0];
var code_condition = codeArray[1];
var code_statement = codeArray[2];
 setSomething(basekeyword, code_keyword);
 setSomething(basecondition, code_condition);
 setSomething(basestatement, code_statement);
}
String.prototype.capitalizeFiristLetter = function ()
{
return this.charAt(0).toUpperCase() + this.slice(1);
}

function showRealCodeOn ()
{
	var codeArray = code.split('.');
	if (codeArray[1] != "condition")
    var rightCondition= codeArray[1].capitalizeFiristLetter()+" () == true" ;
    else var rightCondition = "condition";
    if (codeArray[2] != "statement")
    var rightStatement ="Set"+codeArray[2].capitalizeFiristLetter()+" ("+value+");";
    else var rightStatement = "statement";

    setSomething(realkeyword, codeArray[0]+" ");
    setSomething(realcondition, rightCondition);
    setSomething(realstatement, rightStatement);
	}
 