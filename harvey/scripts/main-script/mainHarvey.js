/* Declaring the 'input' variable. It is the TextField where the
   user types what he/she wants.
*/

var input = document.getElementById('inputText');
//when enter is pressed, obtainInput function (line: aprox. 11) will be triggered
input.onkeyup = obtainInput;
/* Declaring the 'output' variable. This the variable of the 
   <div id="dialog"></div>. Where the conversation is displayed.
*/
var output = document.getElementById('dialog');
input.focus();
//takes input from <input>	
function obtainInput(e) {
  // enter === 13. If anything other than enter is pressed return false.
  if (e.which != 13) {
    return false;
  }
  /* Here is the format of how the user's input and Yveete's answer will be displayed
	 With the use of inline CSS.
  */
  var question = this.value;
 displayOutput('<p style=\'margin-left:600px;font-size:18px;font-family:Helvetica;font-weight:lighter;\'><em>'
  + question + '</em></p>', output);
  displayOutput('<p style=\'position:relative;left: -150px;font-size:18px;font-family:Helvetica;font-weight:lighter;width:500px;text-align:left;\'>'
  + outputFormation(question) + '</p>', output);
  displayOutput('<hr style=\'opacity: 0.1;\'>', output);
  this.focus();
  this.select();
  
  /* scrollbar of the dialog div remains on the bottom
     so the user can see the latest interaction (user's input and then yveete's answer);
  */

  output.scrollTop = output.scrollHeight;
}
function outputFormation(question) {
  var answer = 'I cannot answer this question';
  
  if (question == 'What is the weather?') {
    answer = 'Rainy';
  }
	
  if (question == 'How are you?') {
    answer = 'I am fine';
  }

  if (question == 'hey') {
    answer = 'Hello';
  }

  return answer
}

//shows of the output
function displayOutput(message, destination) {
  destination.innerHTML += message;
}
