function submitAnswers(){
	
	var total=5;
	var score=0;
	
	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//validation
	
	for(var i=1;i<=total;i++){
		if(eval('q' + i) == null || eval('q' + i) == ''){
		
		alert('You missed question ' + i);
		
		return false;
		}
	}
	// Set Correct Answers
	 var answers = ["a","d","a","b","c"]
	 
	 //check answers
	 
	/* if(q1 == answers[0]){
		 
		 score++;
	 }
	  if(q2 == answers[1]){
		 
		 score++;
	 }
	  if(q3 == answers[2]){
		 
		 score++;
	 }
	  if(q4 == answers[3]){
		 
		 score++;
	 }
	  if(q5 == answers[4]){
		 
		 score++;
	 } */
	 
	 for(var i=1;i<=total;i++){
		if(eval('q' + i) == answers[i-1]){
		
		score++;
		
		}
	}
	
	//Display Results
	
	var result = document.getElementById('results');
	result.innerHTML = '<h3> You scored <span>' +score+ '</span> out of <span>' + total+ '</span></h3>';
	alert('You Scored ' +score+ ' out of ' +total);

	return false;

}